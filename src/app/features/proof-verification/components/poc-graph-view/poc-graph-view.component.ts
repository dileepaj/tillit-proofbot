import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as d3 from 'd3';
import * as dagreD3 from 'dagre-d3';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poc-graph-view',
  templateUrl: './poc-graph-view.component.html',
  styleUrls: ['./poc-graph-view.component.css'],

})

export class PocGraphViewComponent implements AfterViewInit {

  loadingComplete: boolean = false;
  isMerkleTreeAvaible: boolean = false;
  errorOccurred: boolean = false;
  pocTreeWidth: Number = 0;
  pocTreeHeight: Number = 0;
  pocTreeWidth1: Number = 0;
  pocTreeHeight1: Number = 0;
  TXNhash: string = "";
  ProofType: string = "";
  src: string = "";
  pocTransactions = [];
  selectedItem;
  color = "primary";
  mode = "indeterminate";
  value = 10;
  @Input() data: any;
  @Input() dataWithMerkleTree: any;
  @Input() GraphTitle: string;
  @Output() clickedNodeEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private _location: Location) { }

  ngAfterViewInit() {
    this.loadingComplete = true;
    this.pocTransactions = this.dataWithMerkleTree;
    this.selectedItem = this.pocTransactions[this.pocTransactions.length - 1];
    if (!!this.data) {
      this.renderGraph(this.data.Nodes);
    }
      this.renderGraphWithMerkleTree(this.dataWithMerkleTree.Nodes);
  }


  goBack(): void {
    this._location.back();
  }

  renderGraph(Nodes: Object) {
    this.isMerkleTreeAvaible=true;

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
      this.addNodesAndEdges(g, Nodes, doneNodes, edgeValues, genesisNodes[key], max + 1, 0, 0, 'normal-node', 'normal-arrow');
    }

    // var svg = d3.select('svg');
    var inner = d3.select('#pocTree');
    var render = new dagreD3.render();
    render(inner, g);

    let box = document.querySelector('#pocTree');
    let width = box.getBoundingClientRect().width;
    let height = box.getBoundingClientRect().height;
    this.pocTreeWidth1 = width;
    this.pocTreeHeight1 = height;

    //listeners
    d3.selectAll("g.edgePath").on('click', function (d: any) {
      const from = Nodes[d.v].TrustLinks[0];
      const to = Nodes[d.w].TrustLinks[0];
    });
    d3.selectAll("g.edgeLabel").on('click', function (d: any) {
      const from = Nodes[d.v].TrustLinks[0];
      const to = Nodes[d.w].TrustLinks[0];
      if (Nodes[d.w].Data.TxnType == 2) {
        window.open(environment.blockchain.domailUrl + `/?type=pobl&txn=${to}&txn2=${from}`);
      } else alert("At the moment, proof verification is only available for TDPs.")
    });
    d3.selectAll("g.node").on('click', function (d: any) {
      //window.open(environment.blockchain.domailUrl+"/?type=poe"+"&txn=" + Nodes[d].TrustLinks[0])
    });
  }
  renderGraphWithMerkleTree(Nodes: Object) {
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
      this.addNodesAndEdges(g, Nodes, doneNodes, edgeValues, genesisNodes[key], max + 1, 0, 0, 'node', 'arrow');
    }

    // var svg = d3.select('svg');
    var inner = d3.select('#pocTreeWithMerkleTree');
    var render = new dagreD3.render();
    render(inner, g);

    let box = document.querySelector('#pocTreeWithMerkleTree');
    let width = box.getBoundingClientRect().width;
    let height = box.getBoundingClientRect().height;
    this.pocTreeWidth = width;
    this.pocTreeHeight = height;

    //listeners
    d3.selectAll("g.edgePath").on('click', (d: any) => {
      const from = Nodes[d.v].Data.TxnHash;
      const to = Nodes[d.w].Data.TxnHash;
      this.clickedNodeEvent.emit(`pobl-${to}-${from}`)
    });
    d3.selectAll("g.edgeLabel").on('click', (d: any) => {
      const from = Nodes[d.v].Data.TxnHash;
      const to = Nodes[d.w].Data.TxnHash;
      this.clickedNodeEvent.emit(`pobl-${to}-${from}`)
    });
    d3.selectAll("g.node").on('click', (d: any) => {
      if (Nodes[d].Data.TxnType == "0")
        this.clickedNodeEvent.emit(`pog-${Nodes[d].Data.TxnHash}`)
      else if (Nodes[d].Data.TxnType == "2")
        this.clickedNodeEvent.emit(`poe-${Nodes[d].Data.TxnHash}`)
    });
  }

  setGraphTitle(title: string){
    this.GraphTitle = title;
  }

  addNodesAndEdges(g: any, Nodes: any, doneNodes: Array<string>, edgeValues: Array<number>, node: any, mainIndex: number, depth: number, type, nodeIdName: string, arrowIdName: string) {
    const { sColor, lColor, bColor } = this.getColorForTxnType(node.Data.TxnType);
    if (doneNodes.includes(node.Data.TxnHash)) return;
    if (node.Data.Identifier != "") {
      let label=`\n\nBatch ID : ${node.Data.Identifier}\n`
      if (!!node.Data.ProductName) {
        label = label + `\nProduct : ${node.Data.ProductName}\n`
      }
      if(!!node.Data.CurrentStage){
        label = label + `\nStage : ${node.Data.CurrentStage}\n`
      }
      g.setNode(node.Data.TxnHash, {
        label: label ,
        shape: 'rect',
        id: `${nodeIdName}-${node.Data.TxnHash}`,
        style: `stroke: ${bColor}; stroke-width: 1.5px; fill: ${sColor}`,
        labelStyle: `font: 300 14px 'Helvetica Neue', Helvetica;fill: ${lColor}; cursor: pointer; font-weight: bold`,
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
          labelStyle: `font-size: 10px; fill: ${colors.sColor}; cursor: pointer; font-weight: bold`,
          id: `${arrowIdName}-${childNode.Data.TxnHash}-${node.Data.TxnHash}`,
          curve: d3.curveBasis,
          style: `stroke: ${colors.sColor}; fill:none; stroke-width: 3.5px;`,
          arrowheadStyle: `fill: ${colors.sColor}`,
        });
        edgeValues.push(nodeIndex);
        this.addNodesAndEdges(g, Nodes, doneNodes, edgeValues, childNode, nodeIndex, nodeDepth, type, nodeIdName, arrowIdName);
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
        case "pobl":
          this.ProofType = 'pobl'
          break

      }
      this.src = `${environment.blockchain.domailUrl}/?type=${this.ProofType}&txn=${this.TXNhash}`
    }
  }

  getProofbotLink(Nodes: any, doneNodes: Array<string>, SrcValues: Array<number>, node: any, mainIndex: number, depth: number, type) {
    const { sColor, lColor } = this.getColorForTxnType(node.Data.TxnType);
    for (let index = 0; index < doneNodes.length; index++) {
      this.TXNhash = doneNodes[index];
      if (sColor == '#45B39D') {
        this.ProofType = 'pog'
      }
      else if (sColor == '#52BE80') {
        this.ProofType = 'poe'
      }
      this.src = `${environment.blockchain.domailUrl}/?type=${this.ProofType}&txn=${this.TXNhash}`
    }
  }

  getColorForTxnType(type) {
    var sColor : string, lColor : string, bColor : string;
    switch (type) {
      case "0":
        sColor = "#45B39D";
        bColor = "#45B39D";
        lColor = "white";
        break
      case "2":
        sColor = "#52BE80";
        bColor = "#52BE80";
        lColor = "white";
        break
      case "6":
        sColor = "#5499C7";
        bColor = "#5499C7";
        lColor = "white";
        break
      case "7":
        sColor = "#CD6155";
        bColor = "#CD6155";
        lColor = "white";
        break
      case "5":
        sColor = "#A569BD";
        bColor = "#A569BD";
        lColor = "white";
        break
      case "9":
        sColor = "#CD8F55";
        bColor = "#CD8F55";
        lColor = "white";
        break
      case "10":
        sColor = "#718598";
        bColor = "#718598";
        lColor = "white";
        break
      default:
        sColor = "black";
        bColor = "black";
        lColor = "white";
        break
    }
    return {sColor, lColor, bColor};
  }

  getTxnNameForTxnType(type) {
    switch (type) {
      case "0":
          return "GENESIS";
      case "2":
        return "Traceability Data";
      case "6":
          return "SPLIT";
      case "7":
          return "MERGE";
      case "5":
          return "SPLIT PARENT";
      case "9":
          return "STAGE TRANSFER";
      case "10":
          return "POCOC";
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

  clickedNode(value: string) {
    this.clickedNodeEvent.emit(value);
  }

}
