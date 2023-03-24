import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as d3 from 'd3';
import * as dagreD3 from 'dagre-d3';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-metric-batch-history',
  templateUrl: './metric-batch-history.component.html',
  styleUrls: ['./metric-batch-history.component.css']
})
export class MetricBatchHistoryComponent implements OnInit {

  loadingComplete: boolean = false;
  errorOccurred: boolean = false;
  pocTreeWidth: Number = 0;
  pocTreeHeight: Number = 0;
  TXNhash: string = "";
  ProofType: string = "";
  src: string = "";
  pocTransactions = [];
  selectedItem;
  color = "primary";
  mode = "indeterminate";
  value = 10;
  @Input() data: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private _location: Location) { }

  ngOnInit() {
    this.loadingComplete = true;
    this.pocTransactions = this.data;
    this.selectedItem = this.pocTransactions[this.pocTransactions.length - 1];
    this.renderGraph(this.data.Nodes);
  }

  goBack(): void {
    this._location.back();
  }

  renderGraph(Nodes: Object) {

    // Create a new directed graph
    var g: any = new dagreD3.graphlib.Graph({ directed: true });

    // Set an object for the graph label
    g.setGraph({});

    g.graph().rankdir = 'LR';
    g.graph().ranksep = 80;
    g.graph().nodesep = 8;

    // Default to assigning a new object as a label for each new edge.
    g.setDefaultEdgeLabel(function () {
      return {};
    });

    var genesisNodes = Object.entries(Nodes).map(data => {
      if (!data[1].Parents) return data[1];
    })
    genesisNodes = genesisNodes.filter(n => n);

    var doneNodes = [];
    var edgeValues: number[] = [0];

    // set nodes and edges
    for (var key in genesisNodes) {
      var max = edgeValues.reduce(function (a, b) {
        return Math.max(a, b);
      }, 98);
      this.addNodesAndEdges(g, Nodes, doneNodes, edgeValues, genesisNodes[key], max + 1, 0, 0);
    }

    // var svg = d3.select('svg');
    var inner = d3.select('#pocTree');
    var render = new dagreD3.render();
    render(inner, g);

    let box = document.querySelector('#pocTree');
    let width = box.getBoundingClientRect().width;
    let height = box.getBoundingClientRect().height;
    this.pocTreeWidth = width;
    this.pocTreeHeight = height;

    //listeners
    d3.selectAll("g.edgePath").on('click', function (d: any) {
      const from = Nodes[d.v].TrustLinks[0];
      const to = Nodes[d.w].TrustLinks[0];
    });
    d3.selectAll("g.edgeLabel").on('click', function (d: any) {
      const from = Nodes[d.v].TrustLinks[0];
      const to = Nodes[d.w].TrustLinks[0];
      if (Nodes[d.w].Data.TxnType == 2) {
        //window.open(environment.blockchain.domailUrl+`/?type=pobl&txn=${to}&txn2=${from}`);
      } else alert("At the moment, proof verification is only available for TDPs.")
    });
    d3.selectAll("g.node").on('click', function (d: any) {
      //window.open(environment.blockchain.domailUrl+"/?type=poe"+"&txn=" + Nodes[d].TrustLinks[0])
    });
  }

  addNodesAndEdges(g: any, Nodes: any, doneNodes: Array<string>, edgeValues: Array<number>, node: any, mainIndex: number, depth: number, type) {
    const { sColor, lColor, bColor } = this.getColorForTxnType(node.Data.TxnType);
    if (doneNodes.includes(node.Data.TxnHash)) return;
    if (node.Data.Identifier != "") {
      g.setNode(node.Data.TxnHash, {
        label: !!node.Data.ProductName ? `Batch ID:\n${node.Data.Identifier}\nProduct: \n${node.Data.ProductName}` : `Batch ID\n${node.Data.Identifier}`,
        shape: 'rect',
        id: `node-${node.Data.TxnHash}`,
        style: `stroke: #969696; stroke-width: 3px; fill: #FFFFFF`,
        labelStyle: `font: 300 14px 'Helvetica Neue', Helvetica;fill: black; cursor: pointer; font-weight: bold`,
        rx: 15, // set the x-axis radius of the rectangle
        ry: 15, // set the y-axis radius of the rectangle
      });
    }
    var lastSplitNodeIndex = null;
    if (node.Children) {
      for (let index = 0; index < node.Children.length; index++) {
        const child = node.Children[index];
        const childNode = Nodes[child];
        const colors = this.getColorForTxnType(childNode.Data.TxnType);
        var nodeIndex = null;
        var nodeDepth = depth;
        if (childNode.Data.TxnType == "6") {
          nodeDepth++;
          if (lastSplitNodeIndex) lastSplitNodeIndex = this.getEdgeIndexForTxnType(childNode.Data.TxnType, lastSplitNodeIndex, nodeDepth);
          else lastSplitNodeIndex = this.getEdgeIndexForTxnType(childNode.Data.TxnType, mainIndex, nodeDepth)
          nodeIndex = lastSplitNodeIndex;
          nodeDepth++;
        } else nodeIndex = this.getEdgeIndexForTxnType(childNode.Data.TxnType, mainIndex, nodeDepth);
        mainIndex = nodeIndex;
        g.setEdge(node.Data.TxnHash, childNode.Data.TxnHash, {
          label: `${this.getTxnNameForTxnType(childNode.Data.TxnType)}`,
          labelStyle: `font-size: 10px; fill: black; cursor: pointer;`,
          id: `arrow-${childNode.Data.TxnHash}-${node.Data.TxnHash}`,
          curve: d3.curveBasis,
          style: `stroke: black; fill:none; stroke-width: 1px;`,
          arrowheadStyle: `fill: black`,
        });
        edgeValues.push(nodeIndex);
        this.addNodesAndEdges(g, Nodes, doneNodes, edgeValues, childNode, nodeIndex, nodeDepth, type);
      }
    }
    doneNodes.push(node.Data.TxnHash);
    for (let index = 0; index < doneNodes.length; index++) {
      this.TXNhash = doneNodes[index];
      switch (type) {
        case "0":
          this.ProofType = 'pog';
          break
        case "2":
          this.ProofType = 'poe'
          break
      }
      this.src = `${environment.blockchain.domailUrl}/?type=${this.ProofType}&txn=${this.TXNhash}`
    }
  }

  getProofbotLink(Nodes: any, doneNodes: Array<string>, SrcValues: Array<number>, node: any, mainIndex: number, depth: number, type) {
    const { sColor, lColor } = this.getColorForTxnType(node.Data.TxnType);
    for (let index = 0; index < doneNodes.length; index++) {
      this.TXNhash = doneNodes[index];
      if (sColor == 'brown') {
        this.ProofType = 'pog'
      }
      else if (sColor == 'green') {
        this.ProofType = 'poe'
      }
      this.src = `${environment.blockchain.domailUrl}/?type=${this.ProofType}&txn=${this.TXNhash}`
    }
  }

  getColorForTxnType(type) {
    var sColor: string, lColor: string, bColor: string;
    switch (type) {
      case "0":
        sColor = "#D6AD1C";
        bColor = "#086553";
        lColor = "white";
        break
      case "2":
        sColor = "#27AE60";
        bColor = "#127D40";
        lColor = "white";
        break
      case "6":
        sColor = "#2980B9";
        bColor = "#105481";
        lColor = "white";
        break
      case "7":
        sColor = "#C0392B";
        bColor = "#802C24";
        lColor = "white";
        break
      case "5":
        sColor = "#8E44AD";
        bColor = "#70318A";
        lColor = "white";
        break
      default:
        sColor = "black";
        bColor = "black";
        lColor = "white";
        break
    }
    return { sColor, lColor, bColor };
  }

  getTxnNameForTxnType(type) {
    switch (type) {
      case "0":
        return "GENESIS";
      case "2":
        return "TDP";
      case "6":
        return "SPLIT";
      case "7":
        return "MERGE";
      case "5":
        return "SPLIT PARENT";
      default:
    }
  }
  getEdgeIndexForTxnType(type: string, mainIndex: number, depth: number): number {
    const suffix = 1 / Math.pow(10, depth);
    const final = mainIndex + suffix;
    return parseFloat(final.toFixed(depth));
  }

  public getTransaction(passingHash: string) {
    this.pocTransactions.forEach((element) => {
      if (element.Txnhash == passingHash) {
        this.selectedItem = element;
      }
    });
  }

  createChild(data: any) {
    let index = data.length;
    let kkk: string = '{' + this.rec(data, index) + '}';
    return JSON.parse(kkk);
  }

  rec(data: any, index: number): string {
    index = index - 1;
    let str: string = '';

    if (index >= 1) {
      str = str.concat(this.rec(data, index));
    } else if (index == 0) {
      let val = '"id":"' + data[index].Txnhash + '"';
      str = str.concat(val);
      return str;
    }

    let val = '"id":"' + data[index].Txnhash + '",' + '"children":[{' + str + '}]';
    return val;
  }

}
