import { ComponentRef, Injectable } from '@angular/core';
import { PocGraphViewComponent } from '../features/proof-verification/components/poc-graph-view/poc-graph-view.component';
import { CommonService } from "src/app/services/common.service";
import * as d3 from 'd3';
@Injectable({
  providedIn: 'root'
})
export class BuildPOCJsonService {
  pocProofJson: any = {
    "Header": {
      "StorageTitle": "Information storage",
      "ProofContainerTitle": "",
      "GSHeightExpand": false,
      "VSHeightExpand": false,
      "GSOverflowX": "hidden",
      "VSOverflowX": "hidden",
      "PlaybackSpeed": 1,
      "ScrollToPointer": true,
      "Segments": [
        {
          "NO": 1,
          "Name": "&{SegName1}",
          "Source": "../../../../assets/img/database.png"
        }
      ]
    },
    "Steps": [
      {
        "StepHeader": {
          "StepNo": 1,
          "SegmentNo": 1,
          "FrameID": 1,
          "FrameTitle": ""
        },
        "Action": {
          "ActionTitle": "&{TextPoc0}",
          "ActionDescription": "&{TextPoc1}",
          "FrameTitle": "&{TextPoc2}",
          "ActionType": "LoadProofAndGraphView",
          "ActionParameters": {
            "ExternalURL": "https://qa.gateway.tracified.com/pocv4/${TXNhash}",
            "FrameType": "",
            "InnerHTML": "",
            "PageURL": "",
            "Query": "",
            "QueryIndex": "",
            "YOffset": "",
            "XOffset": "",
            "ElAttributeName": "",
            "ElAttributeValue": "",
            "ElAttributeValueReplace": "",
            "ElProperty": "",
            "ElPropertyValue": "",
            "ElFunction": "",
            "ElFunctionArguments": "",
            "SelectiveText": "",
            "CaseSensitivity": "",
            "SelectiveTextIndex": "",
            "TXNHash": "${TXNhash}",
            "CSS": "",
            "FormatType": ""
          },
          "ActionResultVariable": "",
          "MetaData": []
        },
        "Customizations": {
          "PointerData": "",
          "ScrollToPointer": false,
          "FrameAutoScroll": true,
          "FrameScrollBars": "",
          "ToastMessage1": "",
          "ToastPosition1": [
            "6%",
            "80%"
          ],
          "ActionDuration": 10
        }
      },
    ]
  }

  pocLangJson: any = {
    "Segments": {
      "SegName1": {
        "ja": "aa",
        "en": "Get The POC Tree View."
      },
      "SegName2": {
        "ja": "ステラ・トランザクションの取得",
        "en": "Get Stellar Transaction"
      },
      "SegName3": {
        "ja": "現在のTXN Hashをデコード",
        "en": "Decode Current TXN Hash"
      },
      "SegName4": {
        "ja": "現在のトランザクションの取得",
        "en": "Get Current Transaction"
      },
      "SegName5": {
        "ja": "デコード 識別子",
        "en": "Decode Identifier"
      },
      "SegName6": {
        "ja": "プロダクトIDのデコード",
        "en": "Decode Product ID"
      },
      "SegName7": {
        "ja": "バックリンクTXN Hashのデコード",
        "en": "Decode BackLink TXN Hash"
      },
      "SegName8": {
        "ja": "トランザクションの種類をデコード",
        "en": "Decode Transaction Type"
      },
      "SegName9": {
        "ja": "概要",
        "en": "POG Summary"
      },
      "SegName10": {
        "ja": "TDPデータ取得",
        "en": "Retrieve Traceability Data Data"
      },
      "SegName11": {
        "ja": "トレーサビリティデータのデコード",
        "en": "Decode Traceability Data"
      },
      "SegName12": {
        "ja": "データハッシュ生成",
        "en": "Data hash generation"
      },
      "SegName13": {
        "ja": "ブロックチェーントランザクションを取得",
        "en": "Retrieve blockchain transaction"
      },
      "SegName14": {
        "ja": "Current TXN ハッシュのデコード",
        "en": "Decode Current TXN Hash"
      },
      "SegName15": {
        "ja": "ブロックチェーントランザクションの取得",
        "en": "Retrieve blockchain Current TXN"
      },
      "SegName16": {
        "ja": "比較",
        "en": "Comparison"
      },
      "SegName17": {
        "ja": "概要",
        "en": "Summary"
      },
      "SegName18": {
        "ja": "ステラ・トランザクションを取得",
        "en": "GET Stellar Transaction"
      },
      "SegName19": {
        "ja": "現在のTXNHashをデコード",
        "en": "Decode Current TXN Hash and Merge ID"
      },
      "SegName20": {
        "ja": "現在のトランザクションを取得",
        "en": "GET Current Transaction"
      },
      "SegName21": {
        "ja": "IDを解読",
        "en": "Decode Identifier"
      },
      "SegName22": {
        "ja": "プロダクトIDを解読",
        "en": "Decode Product ID"
      },
      "SegName23": {
        "ja": "バックリンクTXNHashの解読",
        "en": "Decode Backlink TXNHash"
      },
      "SegName24": {
        "ja": "バックリンクトランザクションの取得",
        "en": "GET Backlink Transaction"
      },
      "SegName25": {
        "ja": "現在のトランザクションのデコード",
        "en": "Decode Current Transaction"
      },
      "SegName26": {
        "ja": "現在のトランザクションを取得",
        "en": "GET Current Transaction"
      },
      "SegName27": {
        "ja": "IDをデコード",
        "en": "Decode Identifier"
      },
      "SegName28": {
        "ja": "プロダクトIDを解読",
        "en": "Decode Product ID"
      },
      "SegName29": {
        "ja": "比較",
        "en": "Comparison"
      },
      "SegName30": {
        "ja": "比較",
        "en": "Comparison"
      },
      "SegName31": {
        "ja": "概要",
        "en": "Summary"
      },
      "SegName32": {
        "ja": "概要",
        "en": "Summary"
      }
    },
    "Actions": [
      {
        "SegmentNo": 1,
        "StepNo": 1,
        "Languages": {
          "TextPoc0": {
            "ja": "aa",
            "en": "Load Graph View"
          },
          "TextPoc1": {
            "ja": "aa",
            "en": "Load the POC tree view "
          },
          "TextPoc2": {
            "ja": "aa",
            "en": "Retrieve POC Tree View ."
          }
        }
      }


    ]
  }

  orderedNodes = []; // Initialize an empty array to hold the matching LastTxnHash values
  TotalProofCount: number = 0;
  currentId: string;
  currentBatch: string;
  currentBatch2: string;
  constructor(public commonServices: CommonService) { }

  async buildPOCJson(data: any): Promise<any> {
    let pocArray = await this.createPOCOrder(data)  
    if (!!pocArray) {
      let b = await this.loopTheNodes(pocArray)
      return b
    }
  }
 
  async loopTheNodes(pocArray): Promise<any> {
    pocArray.forEach(node => {
      switch (node.Data.TxnType) {
        case "0":
          let segPog = this.pocProofJson.Header.Segments[this.pocProofJson.Header.Segments.length - 1].NO
          let numPog = this.pocProofJson.Steps[this.pocProofJson.Steps.length - 1].StepHeader.StepNo
          let pogSegments = [
            {
              "NO": segPog + 1,
              "Name": "&{SegName2}",
              "Source": ""
            },
            {
              "NO": segPog + 2,
              "Name": "&{SegName3}",
              "Source": ""
            },
            {
              "NO": segPog + 3,
              "Name": "&{SegName4}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPog + 4,
              "Name": "&{SegName5}",
              "Source": ""
            },
            {
              "NO": segPog + 5,
              "Name": "&{SegName6}",
              "Source": ""
            },
            {
              "NO": segPog + 6,
              "Name": "&{SegName7}",
              "Source": ""
            },
            {
              "NO": segPog + 7,
              "Name": "&{SegName8}",
              "Source": ""
            },
            {
              "NO": segPog + 8,
              "Name": "&{SegName9}",
              "Source": ""
            }
          ]
          let pogSteps = [
            {
              "StepHeader": {
                "StepNo": numPog + 1,
                "SegmentNo": segPog + 1,
                "FrameID": 1,
                "FrameTitle": "" 
              },
              "Action": {
                "ActionTitle": "&{TextPog0}",
                "ActionDescription": "&{TextPog1}",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "StellarOperationViewer",
                  "SubActionArguments": {
                    "StepNo": numPog + 1,
                    "SegmentNo": segPog + 1,
                    "FrameID": 1,
                    "FrameTitle": "&{TextPog2}",
                    "ActionTitle": "&{TextPog3}",
                    "ActionDescription": "&{TextPog4}",
                    "PathID":`pog-${node.Id}`,
                    "ActionTitle_1": "&{TextPog5}",
                    "ActionDescription_1": "&{TextPog6}",
                    "ActionTitle_2": "&{TextPog7}",
                    "ActionDescription_2": "&{TextPog8}",
                    "TXNHash": node.TrustLinks[0],
                    "OperationName": "current transaction",
                    "ResponseVariable": "MainTXNDataString",
                    "JSONResultVariable": "MainTXNData",
                    "StartedProofType": "POG",
                    "TrustLinks": [node.Id],
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 2,
                "SegmentNo": segPog + 2,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPog9}",
                "ActionDescription": "&{TextPog10}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNCurentTXNHash",
                "MetaData": [
                  "MainTXNData",
                  "CurrentTXN",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 2
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 3,
                "SegmentNo": segPog + 2,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPog + 3,
                    "SegmentNo": segPog + 2,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPog11}",
                    "ActionDescription": "&{TextPog12}",
                    "ActionTitle_1": "&{TextPog13}",
                    "ActionDescription_1": "&{TextPog14}",
                    "OperationKey": "CurrentTXN",
                    "OperationValue": "MainTXNCurentTXNHash",
                    "OperationKeyName": "encoded CurrentTXN Hash from the transaction details",
                    "OperationValueName": "encoded CurrentTXN Hash from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 4,
                "SegmentNo": segPog + 2,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPog15}",
                "ActionDescription": "&{TextPog16}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPog200}",
                      "Value": "${MainTXNCurentTXNHash}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 5,
                "SegmentNo": segPog + 2,
                "FrameID": 2,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPog + 5,
                    "SegmentNo": segPog + 2,
                    "FrameID": 2,
                    "FrameTitle": "&{TextPog17}",
                    "ActionTitle": "&{TextPog18}",
                    "ActionDescription": "&{TextPog19}",
                    "ActionTitle_1": "&{TextPog20}",
                    "ActionDescription_1": "&{TextPog21}",
                    "ActionTitle_2": "&{TextPog22}",
                    "ActionDescription_2": "&{TextPog23}",
                    "ActionTitle_3": "&{TextPog24}",
                    "ActionDescription_3": "&{TextPog25}",
                    "ActionTitle_4": "&{TextPog26}",
                    "ActionDescription_4": "&{TextPog27}",
                    "ToastMessage": "&{TextPog104}",
                    "DecodeKeyName": "&{TextPog236}",
                    "EncodedInputValue": "${MainTXNCurentTXNHash}",
                    "DecodedResultVariable": "var_currenttxn",
                    "InformationStorageKey": "&{TextPog219}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 6,
                "SegmentNo": segPog + 3,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "StellarOperationViewer",
                  "SubActionArguments": {
                    "StepNo": numPog + 6,
                    "SegmentNo": segPog + 3,
                    "FrameID": 3,
                    "FrameTitle": "&{TextPog28}",
                    "ActionTitle": "&{TextPog29}",
                    "ActionDescription": "&{TextPog30}",
                    "PathID":"",
                    "ActionTitle_1": "&{TextPog31}",
                    "ActionDescription_1": "&{TextPog32}",
                    "ActionTitle_2": "&{TextPog33}",
                    "ActionDescription_2": "&{TextPog34}",
                    "TXNHash": "${var_currenttxn}",
                    "OperationName": "current transaction of the gateway transaction",
                    "ResponseVariable": "MainTXNCurentTXNDataString",
                    "JSONResultVariable": "MainTXNCurentTXNData",
                    "StartedProofType": "",
                    "TrustLinks": []
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 7,
                "SegmentNo": segPog + 4,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPog35}",
                "ActionDescription": "&{TextPog36}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNCurentTXNDataIdentifier",
                "MetaData": [
                  "MainTXNCurentTXNData",
                  "identifier",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 8,
                "SegmentNo": segPog + 4,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPog + 8,
                    "SegmentNo": segPog + 4,
                    "FrameID": 3,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPog37}",
                    "ActionDescription": "&{TextPog38}",
                    "ActionTitle_1": "&{TextPog39}",
                    "ActionDescription_1": "&{TextPog40}",
                    "OperationKey": "identifier",
                    "OperationValue": "MainTXNCurentTXNDataIdentifier",
                    "OperationKeyName": "encoded Identifier from the transaction details",
                    "OperationValueName": "encoded Identifier value from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 9,
                "SegmentNo": segPog + 4,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPog41}",
                "ActionDescription": "&{TextPog42}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPog201}",
                      "Value": "${MainTXNCurentTXNDataIdentifier}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 10,
                "SegmentNo": segPog + 4,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPog + 10,
                    "SegmentNo": segPog + 4,
                    "FrameID": 4,
                    "FrameTitle": "&{TextPog45}",
                    "ActionTitle": "&{TextPog46}",
                    "ActionDescription": "&{TextPog47}",
                    "ActionTitle_1": "&{TextPog48}",
                    "ActionDescription_1": "&{TextPog49}",
                    "ActionTitle_2": "&{TextPog50}",
                    "ActionDescription_2": "&{TextPog51}",
                    "ActionTitle_3": "&{TextPog52}",
                    "ActionDescription_3": "&{TextPog53}",
                    "ActionTitle_4": "&{TextPog54}",
                    "ActionDescription_4": "&{TextPog55}",
                    "ToastMessage": "&{TextPog105}",
                    "DecodeKeyName": "&{TextPog237}",
                    "EncodedInputValue": "${MainTXNCurentTXNDataIdentifier}",
                    "DecodedResultVariable": "MainTXNCurentTXNDataIdentifierDecoded",
                    "InformationStorageKey": "&{TextPog220}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 11,
                "SegmentNo": segPog + 5,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPog56}",
                "ActionDescription": "&{TextPog57}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNCurentTXNDataProductId",
                "MetaData": [
                  "MainTXNCurentTXNData",
                  "productId",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 12,
                "SegmentNo": segPog + 5,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPog + 12,
                    "SegmentNo": segPog + 5,
                    "FrameID": 3,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPog58}",
                    "ActionDescription": "&{TextPog59}",
                    "ActionTitle_1": "&{TextPog60}",
                    "ActionDescription_1": "&{TextPog61}",
                    "OperationKey": "productId",
                    "OperationValue": "MainTXNCurentTXNDataProductId",
                    "OperationKeyName": "encoded ProductID from the transaction details",
                    "OperationValueName": "encoded ProductID value from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 13,
                "SegmentNo": segPog + 5,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPog62}",
                "ActionDescription": "&{TextPog63}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPog202}",
                      "Value": "${MainTXNCurentTXNDataProductId}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 14,
                "SegmentNo": segPog + 5,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPog + 14,
                    "SegmentNo": segPog + 5,
                    "FrameID": 3,
                    "FrameTitle": "&{TextPog64}",
                    "ActionTitle": "&{TextPog65}",
                    "ActionDescription": "&{TextPog66}",
                    "ActionTitle_1": "&{TextPog67}",
                    "ActionDescription_1": "&{TextPog68}",
                    "ActionTitle_2": "&{TextPog69}",
                    "ActionDescription_2": "&{TextPog70}",
                    "ActionTitle_3": "&{TextPog71}",
                    "ActionDescription_3": "&{TextPog72}",
                    "ActionTitle_4": "&{TextPog73}",
                    "ActionDescription_4": "&{TextPog74}",
                    "ToastMessage": "&{TextPog106}",
                    "DecodeKeyName": "&{TextPog238}",
                    "EncodedInputValue": "${MainTXNCurentTXNDataProductId}",
                    "DecodedResultVariable": "MainTXNCurentTXNDataProductIdDecoded",
                    "InformationStorageKey": "&{TextPog221}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 15,
                "SegmentNo": segPog + 6,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPog75}",
                "ActionDescription": "&{TextPog76}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNPreviousTXN",
                "MetaData": [
                  "MainTXNData",
                  "PreviousTXN",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 16,
                "SegmentNo": segPog + 6,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPog + 16,
                    "SegmentNo": segPog + 6,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPog77}",
                    "ActionDescription": "&{TextPog78}",
                    "ActionTitle_1": "&{TextPog79}",
                    "ActionDescription_1": "&{TextPog80}",
                    "OperationKey": "PreviousTXN",
                    "OperationValue": "MainTXNPreviousTXN",
                    "OperationKeyName": "encoded PreviousTXN Hash from the transaction details.",
                    "OperationValueName": "encoded PreviousTXN Hash value from the transaction details."
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 17,
                "SegmentNo": segPog + 6,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPog81}",
                "ActionDescription": "&{TextPog82}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPog203}",
                      "Value": "${MainTXNPreviousTXN}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 18,
                "SegmentNo": segPog + 7,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPog83}",
                "ActionDescription": "&{TextPog84}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNTXType",
                "MetaData": [
                  "MainTXNData",
                  "Type",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 19,
                "SegmentNo": segPog + 7,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPog + 19,
                    "SegmentNo": segPog + 7,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPog85}",
                    "ActionDescription": "&{TextPog86}",
                    "ActionTitle_1": "&{TextPog87}",
                    "ActionDescription_1": "&{TextPog88}",
                    "OperationKey": "Type",
                    "OperationValue": "MainTXNTXType",
                    "OperationKeyName": "encoded Transaction Type from the transaction details.",
                    "OperationValueName": "encoded Transaction Type value from the transaction details."
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 20,
                "SegmentNo": segPog + 7,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPog89}",
                "ActionDescription": "&{TextPog90}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPog204}",
                      "Value": "${MainTXNTXType}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 21,
                "SegmentNo": segPog + 7,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPog + 21,
                    "SegmentNo": segPog + 7,
                    "FrameID": 4,
                    "FrameTitle": "&{TextPog91}",
                    "ActionTitle": "&{TextPog92}",
                    "ActionDescription": "&{TextPog93}",
                    "ActionTitle_1": "&{TextPog94}",
                    "ActionDescription_1": "&{TextPog95}",
                    "ActionTitle_2": "&{TextPog96}",
                    "ActionDescription_2": "&{TextPog97}",
                    "ActionTitle_3": "&{TextPog98}",
                    "ActionDescription_3": "&{TextPog99}",
                    "ActionTitle_4": "&{TextPog100}",
                    "ActionDescription_4": "&{TextPog101}",
                    "ToastMessage": "&{TextPog107}",
                    "DecodeKeyName": "&{TextPog222}",
                    "EncodedInputValue": "${MainTXNTXType}",
                    "DecodedResultVariable": "MainTXNTXTypeDecoded",
                    "InformationStorageKey": "&{TextPog222}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPog + 22,
                "SegmentNo": segPog + 8,
                "FrameID": 5,
                "FrameTitle": "&{TextPog102}",
                "PathID":`pog-${node.Id}-Final`,
              },
              "Action": {
                "ActionTitle": "&{TextPog103}",
                "ActionDescription": "&{TextPog103}",
                "FrameTitle": "&{TextPog102}",
                "ActionType": "BrowserScreen",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/checked.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; color:#098260; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Completed Successfully!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF GENESIS</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"width:200px; border-right: 1px solid #E3E3E3;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Transaction Type</span></strong></p></th><th scope=\"col\" style=\"width:200px\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Previous Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"width:200px; border-right: 1px solid #E3E3E3;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n ${MainTXNTXTypeDecoded}\r\n </p></td><td style=\"width:200px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n Genesis\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "InnerHTMLError": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center mt-2\"><center><img src=\"../../../../assets/img/cancel.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; color:#F15249; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Failed!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF GENESIS</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"width:200px; border-right: 1px solid #E3E3E3;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Transaction Type</span></strong></p></th><th scope=\"col\" style=\"width:200px\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Previous Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"width:200px; border-right: 1px solid #E3E3E3;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n ${MainTXNTXTypeDecoded}\r\n </p></td><td style=\"width:200px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n Non Genesis\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "PageURL": "about: Verification Summary - PROOF OF GENESIS",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "Compare": {
                    "t1": "MainTXNPreviousTXN",
                    "t2": ""
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage1": "&{TextPog233}",
                "ToastPosition1": [
                  "6%",
                  "80%"
                ],
                "ActionDuration": 10
              }
            },
          ]
          let pogLang = [
            {
              "SegmentNo": segPog + 1,
              "StepNo": numPog + 1,
              "Languages": {
                "TextPog0": {
                  "ja": "現在のトランザクションの取得",
                  "en": "Retrieve Current Transaction"
                },
                "TextPog1": {
                  "ja": "現在のトランザクションの取得",
                  "en": "Retrieve Current Transaction"
                },
                "TextPog2": {
                  "ja": "ステップ１ー現在のトランザクションの取得",
                  "en": "Step 1 - Retrieve Current Transaction"
                },
                "TextPog3": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar Horizon API"
                },
                "TextPog4": {
                  "ja": "ステラブロックチェーンから現在の取引を取得する",
                  "en": "Retrieve the current transaction from Stellar Blockchain."
                },
                "TextPog5": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "TextPog6": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "TextPog7": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "TextPog8": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPog + 2,
              "StepNo": numPog + 2,
              "Languages": {
                "TextPog9": {
                  "ja": "Current TXNハッシュを抽出",
                  "en": "Extract Current TXN Hash"
                },
                "TextPog10": {
                  "ja": "トランザクションの詳細からCurrent TXNハッシュ（base64エンコード）を選択",
                  "en": "Select the Current TXN Hash (base64 encoded) from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 2,
              "StepNo": numPog + 3,
              "Languages": {
                "TextPog11": {
                  "ja": "現在のTXNをハイライト表示",
                  "en": "Highlight the Current TXN"
                },
                "TextPog12": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュを選択",
                  "en": "Select the encoded Current TXN Hash from the transaction details"
                },
                "TextPog13": {
                  "ja": "Main TXN Current TXN Hashをハイライト表示",
                  "en": "Highlight the Main TXN Current TXN Hash"
                },
                "TextPog14": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュを選択",
                  "en": "Select the encoded Current TXN Hash from the transaction details"
                },
                "TextPog219": {
                  "ja": "CurrentTXN",
                  "en": "CurrentTXN"
                },
                "TextPog115": {
                  "ja": "CurrentTXN ハッシュ",
                  "en": "CurrentTXN Hash"
                }
              }
            },
            {
              "SegmentNo": segPog + 2,
              "StepNo": numPog + 4,
              "Languages": {
                "TextPog15": {
                  "ja": "Base64エンコードされたCurrent TXNの保存",
                  "en": "Save Base64 Encoded Current TXN"
                },
                "TextPog16": {
                  "ja": "将来の使用にBase64でエンコードされたCurrent TXNハッシュ値を保存",
                  "en": "Save the base64 encoded Current TXN Hash value for future usage."
                },
                "TextPog200": {
                  "ja": "CurrentTXN (base64)",
                  "en": "CurrentTXN (base64)"
                }
              }
            },
            {
              "SegmentNo": segPog + 2,
              "StepNo": numPog + 5,
              "Languages": {
                "TextPog17": {
                  "ja": "ステップ２ーデコード Current TXN",
                  "en": "Step 2 - Decode Current TXN"
                },
                "TextPog18": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "TextPog19": {
                  "ja": "Base64でエンコードされたCurrent TXNのハッシュをデコード",
                  "en": "Decode the base64 encoded Current TXN Hash"
                },
                "TextPog20": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "TextPog21": {
                  "ja": "Base64でエンコードされたCurrent TXNハッシュを入力",
                  "en": "Input the base64 encoded Current TXN Hash"
                },
                "TextPog22": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPog23": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPog24": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "TextPog25": {
                  "ja": "デコードされたCurrent TXNハッシュの出力を取得",
                  "en": "Get the output of the decoded Current TXN Hash"
                },
                "TextPog26": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "TextPog27": {
                  "ja": "将来の使用のためにデコードされたCurrent TXNハッシュを保存",
                  "en": "Save the decoded Current TXN Hash for future usage."
                },
                "TextPog104": {
                  "ja": "デコードされたCurrent TXNハッシュ",
                  "en": "Decoded Current TXN Hash"
                },
                "TextPog236": {
                  "ja": "CurrentTXN Hash",
                  "en": "CurrentTXN Hash"
                }
              }
            },
            {
              "SegmentNo": segPog + 3,
              "StepNo": numPog + 6,
              "Languages": {
                "TextPog28": {
                  "ja": "ステップ３－現在のトランザクションの取得",
                  "en": "Step 3 - Retrieve Current Transaction"
                },
                "TextPog29": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar Horizon API"
                },
                "TextPog30": {
                  "ja": "ゲートウェイトランザクションの現在のトランザクションをステラブロックチェーンから取得",
                  "en": "Retrieve the current transaction of the gateway transaction from Stellar Blockchain."
                },
                "TextPog31": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "TextPog32": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "TextPog33": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "TextPog34": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPog + 4,
              "StepNo": numPog + 7,
              "Languages": {
                "TextPog35": {
                  "ja": "Base64 Encodedの識別子を選択",
                  "en": "Select Base64 Encoded Identifier"
                },
                "TextPog36": {
                  "ja": "トランザクションの詳細からエンコードされたIdentifierを選択",
                  "en": "Select the encoded Identifier from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 4,
              "StepNo": numPog + 8,
              "Languages": {
                "TextPog37": {
                  "ja": "識別子をハイライト表示",
                  "en": "Highlight the identifier."
                },
                "TextPog38": {
                  "ja": "トランザクションの詳細からエンコードされたIdentifierを選択",
                  "en": "Select the encoded Identifier from the transaction details."
                },
                "TextPog39": {
                  "ja": "Main TXN Current TXNDataIdentifierをハイライト表示",
                  "en": "Highlight the Main TXN Current TXNDataIdentifier."
                },
                "TextPog40": {
                  "ja": "トランザクションの詳細から、エンコードされた識別子の値を選択",
                  "en": "Select the encoded Identifier value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 4,
              "StepNo": numPog + 9,
              "Languages": {
                "TextPog41": {
                  "ja": "Base64Encodeされた識別子の保存",
                  "en": "Save Base64 Encoded Identifier"
                },
                "TextPog42": {
                  "ja": "将来の使用のために、base64 エンコードされた 識別子の 値を保存",
                  "en": "Save the base64 encoded Identifier value for future usage."
                },
                "TextPog201": {
                  "ja": "識別子 (base64)",
                  "en": "Identifier (base64)"
                }
              }
            },
            {
              "SegmentNo": segPog + 4,
              "StepNo": numPog + 10,
              "Languages": {
                "TextPog45": {
                  "ja": "ステップ４ーMain TXN 識別子のデコード",
                  "en": "Step 4 - Decode Main TXN Identifier"
                },
                "TextPog46": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "TextPog47": {
                  "ja": "base64でエンコードされたMain TXN識別子をデコード",
                  "en": "Decode the base64 encoded Main TXN Identifier"
                },
                "TextPog48": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "TextPog49": {
                  "ja": "Main TXN 識別子を base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded Main TXN Identifier"
                },
                "TextPog50": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPog51": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPog52": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "TextPog53": {
                  "ja": "デコードされたMain TXN識別子の出力を取得",
                  "en": "Get the output of the decoded Main TXN Identifier"
                },
                "TextPog54": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "TextPog55": {
                  "ja": "将来の使用のためにデコードされたMain TXN識別子を保存",
                  "en": "Save the decoded Main TXN Identifier for future usage."
                },
                "TextPog105": {
                  "ja": "デコードされたMainTXN識別子",
                  "en": "Decoded Main TXN Identifier"
                },
                "TextPog220": {
                  "ja": "識別子",
                  "en": "Identifier"
                },
                "TextPog117": {
                  "ja": "MainTXN識別子",
                  "en": "MainTXN Identifier"
                },
                "TextPog237": {
                  "ja": "MainTXN識別子",
                  "en": "Main TXN Identifier"
                }
              }
            },
            {
              "SegmentNo": segPog + 5,
              "StepNo": numPog + 11,
              "Languages": {
                "TextPog56": {
                  "ja": "Base64 EncodedのProduct IDを選択",
                  "en": "Select Base64 Encoded Product ID"
                },
                "TextPog57": {
                  "ja": "取引内容からエンコードされたプロダクトIDを選択",
                  "en": "Select the encoded Product ID from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 5,
              "StepNo": numPog + 12,
              "Languages": {
                "TextPog58": {
                  "ja": "product Id をハイライト表示",
                  "en": "Highlight the product Id"
                },
                "TextPog59": {
                  "ja": "取引内容からエンコードされたProduct IDを選択",
                  "en": "Select the encoded Product ID from the transaction details"
                },
                "TextPog60": {
                  "ja": "Main TXN Current TXN Data Product Idをハイライト表示",
                  "en": "Highlight the Main TXN Current TXN Data Product Id"
                },
                "TextPog61": {
                  "ja": "トランザクションの詳細から、エンコードされたProduct IDの値を選択",
                  "en": "Select the encoded Product ID value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPog + 5,
              "StepNo": numPog + 13,
              "Languages": {
                "TextPog62": {
                  "ja": "Base64EncodeされたProduct IDの保存",
                  "en": "Save Base64 Encoded Product ID"
                },
                "TextPog63": {
                  "ja": "将来の使用のために、Base64エンコードされたProduct IDの値を保存",
                  "en": "Save the base64 encoded Product ID value for future usage."
                },
                "TextPog202": {
                  "ja": "製品 ID (base64)",
                  "en": "Product ID (base64)"
                }
              }
            },
            {
              "SegmentNo": segPog + 6,
              "StepNo": numPog + 14,
              "Languages": {
                "TextPog64": {
                  "ja": "ステップー５Main TXN Product IDのデコード",
                  "en": "Step 5 - Decode Main TXN Product ID"
                },
                "TextPog65": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "TextPog66": {
                  "ja": "Main TXN Product ID を base64 でデコード",
                  "en": "Decode the base64 encoded Main TXN Product ID"
                },
                "TextPog67": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "TextPog68": {
                  "ja": "Main TXN Product ID を base64 でエンコードして入力",
                  "en": "Input the base64 encoded Main TXN Product ID"
                },
                "TextPog69": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPog70": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPog71": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "TextPog72": {
                  "ja": "デコードしたMain TXN Product IDの出力を取得",
                  "en": "Get the output of the decoded Main TXN Product ID"
                },
                "TextPog73": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "TextPog74": {
                  "ja": "将来の使用のためにデコードされたMain TXN Product IDを保存",
                  "en": "Save the decoded Main TXN Product ID for future usage."
                },
                "TextPog106": {
                  "ja": "デコードされたMain TXN Product ID",
                  "en": "Decoded Main TXN Product ID"
                },
                "TextPog221": {
                  "ja": "製品番号",
                  "en": "ProductID"
                },
                "TextPog238": {
                  "ja": "MainTXN製品番号",
                  "en": "MainTXN ProductID"
                }
              }
            },
            {
              "SegmentNo": segPog + 6,
              "StepNo": numPog + 15,
              "Languages": {
                "TextPog75": {
                  "ja": "Base64Encodeされた前のTXNを選択",
                  "en": "Select Base64 Encoded Previous TXN"
                },
                "TextPog76": {
                  "ja": "トランザクションの詳細から、エンコードされた前のTXNハッシュ値を選択",
                  "en": "Select the encoded Previous TXN Hash value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 6,
              "StepNo": numPog + 16,
              "Languages": {
                "TextPog77": {
                  "ja": "前のTXNをハイライト表示",
                  "en": "Highlight the Previous TXN"
                },
                "TextPog78": {
                  "ja": "トランザクションの詳細からエンコードされた前のTXNハッシュを選択",
                  "en": "Select the encoded Previous TXN Hash from the transaction details."
                },
                "TextPog79": {
                  "ja": "Main TXN Previous TXNをハイライト表示",
                  "en": "Highlight the Main TXN Previous TXN"
                },
                "TextPog80": {
                  "ja": "トランザクションの詳細から、エンコードされたMain TXN Previous TXNハッシュ値を選択",
                  "en": "Select the encoded Main TXN Previous TXN Hash value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 6,
              "StepNo": numPog + 17,
              "Languages": {
                "TextPog81": {
                  "ja": "Base64エンコードされた前のTXNの保存",
                  "en": "Save Base64 Encoded Previous TXN"
                },
                "TextPog82": {
                  "ja": "将来の使用のためにBase64エンコードされた前のTXNハッシュ値を保存",
                  "en": "Save the base64 encoded Previous TXN Hash value for future usage."
                },
                "TextPog203": {
                  "ja": "PreviousTXN ハッシュ (base64)",
                  "en": "PreviousTXN Hash (base64)"
                }
              }
            },
            {
              "SegmentNo": segPog + 7,
              "StepNo": numPog + 18,
              "Languages": {
                "TextPog83": {
                  "ja": "Base64 Encodedトランザクションタイプの選択",
                  "en": "Select Base64 Encoded Transaction Type"
                },
                "TextPog84": {
                  "ja": "トランザクションの詳細から、エンコードされたトランザクションタイプの値を選択",
                  "en": "Select the encoded Transaction Type value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 7,
              "StepNo": numPog + 19,
              "Languages": {
                "TextPog85": {
                  "ja": "タイプをハイライト表示",
                  "en": "Highlight the Type"
                },
                "TextPog86": {
                  "ja": "トランザクションの詳細から、エンコードされたトランザクションタイプを選択",
                  "en": "Select the encoded Transaction Type from the transaction details."
                },
                "TextPog87": {
                  "ja": "Main TXN Typeをハイライト表示",
                  "en": "Highlight the Main TXN Type"
                },
                "TextPog88": {
                  "ja": "トランザクションの詳細から、エンコードされたトランザクションタイプの値を選択",
                  "en": "Select the encoded Transaction Type value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 7,
              "StepNo": numPog + 20,
              "Languages": {
                "TextPog89": {
                  "ja": "Base64エンコードされた前のTXNの保存",
                  "en": "Save Base64 Encoded Previous TXN"
                },
                "TextPog90": {
                  "ja": "将来の使用のためにBase64エンコードされた前のTXNハッシュ値を保存",
                  "en": "Save the base64 encoded Previous TXN Hash value for future usage."
                },
                "TextPog204": {
                  "ja": "トランザクション タイプ (base64)",
                  "en": "Transaction Type (base64)"
                }
              }
            },
            {
              "SegmentNo": segPog + 7,
              "StepNo": numPog + 21,
              "Languages": {
                "TextPog91": {
                  "ja": "ステップ４－トランザクションタイプをデコード",
                  "en": "Step 04 - Decode Transaction Type"
                },
                "TextPog92": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "TextPog93": {
                  "ja": "base64でエンコードされたトランザクションタイプをデコード",
                  "en": "Decode the base64 encoded Transaction Type"
                },
                "TextPog94": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "TextPog95": {
                  "ja": "Base64でエンコードされたトランザクションタイプを入力",
                  "en": "Input the base64 encoded Transaction Type"
                },
                "TextPog96": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPog97": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPog98": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "TextPog99": {
                  "ja": "デコードしたトランザクションタイプの出力を取得",
                  "en": "Get the output of the decoded Transaction Type"
                },
                "TextPog100": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "TextPog101": {
                  "ja": "将来の使用のためにデコードしたトランザクションタイプを保存",
                  "en": "Save the decoded Transaction Type for future usage."
                },
                "TextPog107": {
                  "ja": "デコードされたトランザクションのタイプ",
                  "en": "Decoded Transaction Type"
                },
                "TextPog222": {
                  "ja": "取引タイプ",
                  "en": "Transaction Type"
                }
              }
            },
            {
              "SegmentNo": segPog + 8,
              "StepNo": numPog + 22,
              "Languages": {
                "TextPog102": {
                  "ja": "ステップ５－検証の概要",
                  "en": "Step 05 - Verification Summary"
                },
                "TextPog103": {
                  "ja": "検証の概要",
                  "en": "Verification Summary"
                },
                "TextPog233": {
                  "ja": "検証は正常に終了",
                  "en": "Verification Completed Successfully"
                }
              }
            }
          ]
          segPog = segPog + 8
          numPog = numPog + 22
          this.pocProofJson.Steps.push(...pogSteps)
          this.pocProofJson.Header.Segments.push(...pogSegments)
          this.pocLangJson.Actions.push(...pogLang)
          break;
        case "2":
          let segPoe = this.pocProofJson.Header.Segments[this.pocProofJson.Header.Segments.length - 1].NO
          let numPoe = this.pocProofJson.Steps[this.pocProofJson.Steps.length - 1].StepHeader.StepNo
          let poeSegments = [
            {
              "NO": segPoe + 1,
              "Name": "&{SegName10}",
              "Source": "../../../../assets/img/database.png"
            },
            {
              "NO": segPoe + 2,
              "Name": "&{SegName11}",
              "Source": "../../../../assets/img/database.png"
            },
            {
              "NO": segPoe + 3,
              "Name": "&{SegName12}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPoe + 4,
              "Name": "&{SegName13}",
              "Source": ""
            },
            {
              "NO": segPoe + 5,
              "Name": "&{SegName14}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPoe + 6,
              "Name": "&{SegName15}",
              "Source": ""
            },
            {
              "NO": segPoe + 7,
              "Name": "&{SegName16}",
              "Source": ""
            },
            {
              "NO": segPoe + 8,
              "Name": "&{SegName17}",
              "Source": ""
            }
          
          ]
          let poeSteps = [
            {
              "StepHeader": {
                "StepNo": numPoe + 1,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "Tracified API Request",
                "ActionDescription": "Retrieve Traceability Data data from Tracified Gateway.",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "TDPResponseViewer",
                  "SubActionArguments": {
                    "StepNo": numPoe + 1,
                    "SegmentNo": segPoe + 1,
                    "FrameID": 1,
                    "FrameTitle": "&{Text0}",
                    "ActionTitle": "&{Text1}",
                    "ActionDescription": "&{Text3}",
                    "PathID":`poe-${node.Id}`,
                    "FrameTitle_1": "&{Text4}",
                    "ActionTitle_1": "&{Text5}",
                    "ActionDescription_1": "&{Text6}",
                    "FrameTitle_2": "&{Text7}",
                    "ActionTitle_2": "&{Text8}",
                    "ActionDescription_2": "&{Text9}",
                    "TXNHash": node.TrustLinks[0],
                    "OperationName": "&{Text2}",
                    "ResponseVariable": "MainTDPDataString",
                    "JSONResultVariable": "MainTDPData",
                    "StartedProofType": "POE",
                    "TrustLinks": [node.Id],
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 2,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text10}",
                "ActionDescription": "&{Text11}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonKeyPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "TDPIdentifier",
                "MetaData": [
                  "MainTDPData",
                  "TDPIdentifier"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 2
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 3,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPoe + 3,
                    "SegmentNo": segPoe + 1,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text13}",
                    "ActionDescription": "&{Text14}",
                    "FrameTitle_1": "&{Text15}",
                    "ActionTitle_1": "&{Text16}",
                    "ActionDescription_1": "&{Text17}",
                    "OperationKey": "TDPIdentifier",
                    "OperationValue": "TDPIdentifier",
                    "OperationKeyName": "TDP identifier from the Traceability Data details",
                    "OperationValueName": "TDP identifier from the Traceability Data details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 4,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text19}",
                "ActionDescription": "&{Text20}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{Text21}",
                      "Value": "${TDPIdentifier}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 5,
                "SegmentNo": 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text22}",
                "ActionDescription": "&{Text23}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonKeyPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "TDPData",
                "MetaData": [
                  "MainTDPData",
                  "TDPData"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 2
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 6,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPoe + 6,
                    "SegmentNo": segPoe + 1,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text23}",
                    "ActionDescription": "&{Text25}",
                    "FrameTitle_1": "&{Text26}",
                    "ActionTitle_1": "&{Text27}",
                    "ActionDescription_1": "&{Text28}",
                    "OperationKey": "TDPData",
                    "OperationValue": "TDPData",
                    "OperationKeyName": "TDP Data from the Traceability Data details",
                    "OperationValueName": "TDP Data from the Traceability Data details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 7,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text30}",
                "ActionDescription": "&{Text31}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{Text32}",
                      "Value": "${TDPData}",
                      "CompareType": "notEmpty",
                      "CompareValue": "",
                      "Error": "Cannot find the Traceability data from Tracifed for the given transaction"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 8,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text33}",
                "ActionDescription": "&{Text34}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonKeyPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "TDPTxnhash",
                "MetaData": [
                  "MainTDPData",
                  "Txnhash"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 2
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 9,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPoe + 9,
                    "SegmentNo": segPoe + 1,
                    "FrameID": 1,
                    "ActionTitle": "&{Text35}",
                    "ActionDescription": "&{Text36}",
                    "ActionTitle_1": "&{Text37}",
                    "ActionDescription_1": "&{Text38}",
                    "OperationKey": "Txnhash",
                    "OperationValue": "TDPTxnhash",
                    "OperationKeyName": "txnhash from the Traceability Data details",
                    "OperationValueName": "txnhash from the Traceability Data details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 10,
                "SegmentNo": 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text39}",
                "ActionDescription": "&{Text40}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{Text41}",
                      "Value": "${TDPTxnhash}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 11,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text42}",
                "ActionDescription": "&{Text43}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonKeyPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "TdpId",
                "MetaData": [
                  "MainTDPData",
                  "TdpId"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 2
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 12,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPoe + 12,
                    "SegmentNo": segPoe + 1,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text44}",
                    "ActionDescription": "&{Text45}",
                    "FrameTitle_1": "&{Text47}",
                    "ActionTitle_1": "&{Text46}",
                    "ActionDescription_1": "&{Text47}",
                    "OperationKey": "TdpId",
                    "OperationValue": "TdpId",
                    "OperationKeyName": "Tdp ID from the Traceability Data details",
                    "OperationValueName": "Tdp ID from the Traceability Data details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 13,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text48}",
                "ActionDescription": "&{Text49}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{Text50}",
                      "Value": "${TdpId}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 14,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text51}",
                "ActionDescription": "&{Text52}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonKeyPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "ProfileID",
                "MetaData": [
                  "MainTDPData",
                  "ProfileID"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 2
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 15,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPoe + 15,
                    "SegmentNo": segPoe + 1,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text53}",
                    "ActionDescription": "&{Text54}",
                    "FrameTitle_1": "&{Text56}",
                    "ActionTitle_1": "&{Text55}",
                    "ActionDescription_1": "&{Text56}",
                    "OperationKey": "ProfileID",
                    "OperationValue": "ProfileID",
                    "OperationKeyName": "Profile ID from the Traceability Data details",
                    "OperationValueName": "Profile ID from the Traceability Data details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 16,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text57}",
                "ActionDescription": "&{Text58}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{Text59}",
                      "Value": "${ProfileID}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 17,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text60}",
                "ActionDescription": "&{Text61}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonKeyPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "Identifier",
                "MetaData": [
                  "MainTDPData",
                  "Identifier"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 2
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 18,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPoe + 18,
                    "SegmentNo": segPoe + 1,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text62}",
                    "ActionDescription": "&{Text63}",
                    "FrameTitle_1": "&{Text65}",
                    "ActionTitle_1": "&{Text64}",
                    "ActionDescription_1": "&{Text65}",
                    "OperationKey": "Identifier",
                    "OperationValue": "Identifier",
                    "OperationKeyName": "identifier from the Traceability Data details",
                    "OperationValueName": "identifier from the Traceability Data details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 19,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text66}",
                "ActionDescription": "&{Text67}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{Text68}",
                      "Value": "${Identifier}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 20,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text69}",
                "ActionDescription": "&{Text70}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonKeyPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MapIdentifier",
                "MetaData": [
                  "MainTDPData",
                  "MapIdentifier"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 2
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 21,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPoe + 21,
                    "SegmentNo": segPoe + 1,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text71}",
                    "ActionDescription": "&{Text72}",
                    "FrameTitle_1": "&{Text74}",
                    "ActionTitle_1": "&{Text73}",
                    "ActionDescription_1": "&{Text74}",
                    "OperationKey": "MapIdentifier",
                    "OperationValue": "MapIdentifier",
                    "OperationKeyName": "Map identifier from the Traceability Data details",
                    "OperationValueName": "Map identifier from the Traceability Data details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 22,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text75}",
                "ActionDescription": "&{Text76}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{Text77}",
                      "Value": "${MapIdentifier}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 23,
                "SegmentNo": segPoe + 2,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPoe + 23,
                    "SegmentNo": segPoe + 2,
                    "FrameID": 3,
                    "FrameTitle": "&{Text212}",
                    "ActionTitle": "&{Text213}",
                    "ActionDescription": "&{Text214}",
                    "ActionTitle_1": "&{Text215}",
                    "ActionDescription_1": "&{Text216}",
                    "ActionTitle_2": "&{Text217}",
                    "ActionDescription_2": "&{Text218}",
                    "ActionTitle_3": "&{Text219}",
                    "ActionDescription_3": "&{Text220}",
                    "ActionTitle_4": "&{Text221}",
                    "ActionDescription_4": "&{Text222}",
                    "InformationStorageKey": "&{Text223}",
                    "ToastMessage": "&{Text224}",
                    "EncodedInputValue": "${TDPData}",
                    "DecodedResultVariable": "DecodedTDPData"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 24,
                "SegmentNo": segPoe + 3,
                "FrameID": 8,
                "FrameTitle": "&{Text210}"
              },
              "Action": {
                "ActionTitle": "&{Text210}",
                "ActionDescription": "&{Text211}",
                "ActionType": "BrowserScreen",
                "ActionParameters": {
                  "ExternalURL": "",
                  "EncodedData": "${TDPData}",
                  "InnerHTMLPOE": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items:center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><div><p class=\"size-12\"><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2;font-family:Inter; font-style:normal; font-size:12px; color:black ;text-transform: uppercase;\">\r\nBase64 encoded data and the TDP identifier received from the gateway are being combined.\r\n</b></center></p></div></center></div></div><div class=\"p-2\"><center><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;max-width: 450px; max-height: 50px;\"><strong><span class=\"size-14\">Base64 Encoded data</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal;text-align: start; color:#000000;\"><strong>TDP Identifier</strong></p></th></tr></thead><tbody><tr><td style=\"padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word; overflow:hidden;  word-break:break-word; overflow:hidden; max-width:400px; max-height:40px;  max-height:40px; \">\r\n ${TDPData}\r\n</p></td></td><td style=\"padding-left:2px; \"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal;word-break:break-word; max-height: 25px;\">\r\n + ${TDPIdentifier}\r\n</p></td></tr></tbody></table></center></div></div></body></html>",
                  "PageURL": "&{Text210}",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionResultVariable": "",
                  "MetaData": [],
                  "Compare":{}
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": [],
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 25,
                "SegmentNo": segPoe + 3,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "EncodedData": "false",
                  "ActionConfigurationID": "OnlineToolsEncoder",
                  "SubActionArguments": {
                    "StepNo": numPoe + 25,
                    "SegmentNo": segPoe + 3,
                    "FrameID": 3,
                    "FrameTitle": "&{Text210}",
                    "ActionTitle": "&{Text79}",
                    "ActionDescription": "&{Text80}",
                    "ActionTitle_1": "&{Text81}",
                    "ActionDescription_1": "&{Text82}",
                    "ActionTitle_2": "&{Text83}",
                    "ActionDescription_2": "&{Text84}",
                    "ActionTitle_3": "&{Text85}",
                    "ActionDescription_3": "&{Text86}",
                    "ActionTitle_4": "&{Text87}",
                    "ActionDescription_4": "&{Text88}",
                    "InformationStorageKey": "&{Text89}",
                    "ToastMessage": "&{Text90}",
                    "EcodedInputValue": "${TDPData}${TDPIdentifier}",
                    "TDPDataFirst100": "${TDPData.substring(0, 100)}",
                    "TDPDataLast100": "${TDPData.substring(TDPData.length - 100)}",
                    "EncodedResultVariable": "data_hash"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 26,
                "SegmentNo": segPoe + 4,
                "FrameID": 2,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "Retrieve Traceability Data Transaction",
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "StellarOperationViewer",
                  "SubActionArguments": {
                    "StepNo": numPoe + 26,
                    "SegmentNo": segPoe + 4,
                    "FrameID": 2,
                    "FrameTitle": "&{Text91}",
                    "ActionTitle": "&{Text92}",
                    "ActionDescription": "&{Text93}",
                    "PathID":"",
                    "ActionTitle_1": "&{Text94}",
                    "ActionDescription_1": "&{Text95}",
                    "SegmentSource_1": "../../../../assets/img/blockchain2.png",
                    "ActionTitle_2": "&{Text96}",
                    "ActionDescription_2": "&{Text97}",
                    "SegmentSource_2": "../../../../assets/img/blockchain2.png",
                    "TXNHash": "${TDPTxnhash}",
                    "ResponseVariable": "MainTXNDataString",
                    "OperationName": "current transaction",
                    "JSONResultVariable": "MainTXNData",
                    "StartedProofType": "",
                    "TrustLinks": []
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 27,
                "SegmentNo": segPoe + 4,
                "FrameID": 2,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text98}",
                "ActionDescription": "&{Text99}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNCurentTXNHash",
                "MetaData": [
                  "MainTXNData",
                  "CurrentTXN",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 2
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 28,
                "SegmentNo": segPoe + 4,
                "FrameID": 2,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPoe + 28,
                    "SegmentNo": segPoe + 4,
                    "FrameID": 2,
                    "ActionTitle": "&{Text100}",
                    "ActionDescription": "&{Text101}",
                    "ActionTitle_1": "&{Text102}",
                    "ActionDescription_1": "&{Text103}",
                    "OperationKey": "CurrentTXN",
                    "OperationValue": "MainTXNCurentTXNHash",
                    "OperationKeyName": "encoded CurrentTXN Hash from the transaction details",
                    "OperationValueName": "encoded CurrentTXN Hash from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 29,
                "SegmentNo": segPoe + 5,
                "FrameID": 2,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text104}",
                "ActionDescription": "&{Text105}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{Text106}",
                      "Value": "${MainTXNCurentTXNHash}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 30,
                "SegmentNo": segPoe + 5,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPoe + 30,
                    "SegmentNo": segPoe + 5,
                    "FrameID": 3,
                    "FrameTitle": "&{Text107}",
                    "ActionTitle": "&{Text108}",
                    "ActionDescription": "&{Text109}",
                    "ActionTitle_1": "&{Text110}",
                    "ActionDescription_1": "&{Text111}",
                    "ActionTitle_2": "&{Text112}",
                    "ActionDescription_2": "&{Text113}",
                    "ActionTitle_3": "&{Text114}",
                    "ActionDescription_3": "&{Text115}",
                    "ActionTitle_4": "&{Text116}",
                    "ActionDescription_4": "&{Text117}",
                    "InformationStorageKey": "&{Text118}",
                    "ToastMessage": "&{Text119}",
                    "EncodedInputValue": "${MainTXNCurentTXNHash}",
                    "DecodedResultVariable": "var_currenttxn"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 31,
                "SegmentNo": segPoe + 6,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "StellarOperationViewer",
                  "SubActionArguments": {
                    "StepNo": numPoe + 31,
                    "SegmentNo": segPoe + 6,
                    "FrameID": 4,
                    "ActionTitle": "&{Text120}",
                    "ActionDescription": "&{Text121}",
                    "ActionTitle_1": "&{Text122}",
                    "ActionDescription_1": "&{Text123}",
                    "PathID":"",
                    "SegmentSource_1": "../../../../assets/img/blockchain2.png",
                    "ActionTitle_2": "&{Text124}",
                    "ActionDescription_2": "&{Text125}",
                    "SegmentSource_2": "../../../../assets/img/blockchain2.png",
                    "FrameTitle": "&{Text126}",
                    "TXNHash": "${var_currenttxn}",
                    "OperationName": "&{Text127}",
                    "ResponseVariable": "MainTXNCurentTXNDataString",
                    "JSONResultVariable": "MainTXNCurentTXNData",
                    "StartedProofType": "",
                    "TrustLinks": []
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 32,
                "SegmentNo": segPoe + 7,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text128}",
                "ActionDescription": "&{Text129}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNCurentTXNDataIdentifier",
                "MetaData": [
                  "MainTXNCurentTXNData",
                  "identifier",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 33,
                "SegmentNo": segPoe + 7,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPoe + 33,
                    "SegmentNo": segPoe + 7,
                    "FrameID": 4,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text131}",
                    "ActionDescription": "&{Text132}",
                    "FrameTitle_1": "&{Text133}",
                    "ActionTitle_1": "&{Text134}",
                    "ActionDescription_1": "&{Text135}",
                    "OperationKey": "Identifier",
                    "OperationValue": "MainTXNCurentTXNDataIdentifier",
                    "OperationKeyName": "encoded Identifier from the transaction details",
                    "OperationValueName": "encoded Identifier value from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 34,
                "SegmentNo": segPoe + 7,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text136}",
                "ActionDescription": "&{Text137}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{Text140}",
                      "Value": "${MainTXNCurentTXNDataIdentifier}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 35,
                "SegmentNo": segPoe + 7,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPoe + 35,
                    "SegmentNo": segPoe + 7,
                    "FrameID": 5,
                    "FrameTitle": "&{Text141}",
                    "ActionTitle": "&{Text142}",
                    "ActionDescription": "&{Text143}",
                    "ActionTitle_1": "&{Text144}",
                    "ActionDescription_1": "&{Text145}",
                    "ActionTitle_2": "&{Text146}",
                    "ActionDescription_2": "&{Text147}",
                    "ActionTitle_3": "&{Text148}",
                    "ActionDescription_3": "&{Text149}",
                    "ActionTitle_4": "&{Text150}",
                    "ActionDescription_4": "&{Text151}",
                    "InformationStorageKey": "&{Text152}",
                    "ToastMessage": "&{Text153}",
                    "DecodeKeyName": "CurrentTXN Identifier",
                    "EncodedInputValue": "${MainTXNCurentTXNDataIdentifier}",
                    "DecodedResultVariable": "MainTXNCurentTXNDataIdentifierDecoded"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 36,
                "SegmentNo": segPoe + 7,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text154}",
                "ActionDescription": "&{Text155}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNCurentTXNDatadatahash",
                "MetaData": [
                  "MainTXNCurentTXNData",
                  "dataHash",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 37,
                "SegmentNo": segPoe + 7,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPoe + 37,
                    "SegmentNo": segPoe + 7,
                    "FrameID": 4,
                    "ActionTitle": "&{Text160}",
                    "ActionDescription": "&{Text161}",
                    "ActionTitle_1": "&{Text162}",
                    "ActionDescription_1": "&{Text163}",
                    "OperationKey": "dataHash",
                    "OperationValue": "MainTXNCurentTXNDatadatahash",
                    "OperationKeyName": "encoded datahash from the transaction details.",
                    "OperationValueName": "encoded datahash value from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 38,
                "SegmentNo": segPoe + 7,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text164}",
                "ActionDescription": "&{Text165}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{Text166}",
                      "Value": "${MainTXNCurentTXNDatadatahash}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 39,
                "SegmentNo": segPoe + 7,
                "FrameID": 6,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPoe + 39,
                    "SegmentNo": segPoe + 7,
                    "FrameID": 6,
                    "FrameTitle": "&{Text180}",
                    "ActionTitle": "&{Text181}",
                    "ActionDescription": "&{Text182}",
                    "ActionTitle_1": "&{Text183}",
                    "ActionDescription_1": "&{Text184}",
                    "ActionTitle_2": "&{Text185}",
                    "ActionDescription_2": "&{Text186}",
                    "ActionTitle_3": "&{Text187}",
                    "ActionDescription_3": "&{Text188}",
                    "ActionTitle_4": "&{Text189}",
                    "ActionDescription_4": "&{Text190}",
                    "ToastMessage": "&{Text191}",
                    "EncodedInputValue": "${MainTXNCurentTXNDatadatahash}",
                    "DecodedResultVariable": "MainTXNCurentTXNDatadatahashDecoded",
                    "InformationStorageKey": "&{Text192}",
                    "DecodeKeyName": "&{Text192}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 40,
                "SegmentNo": segPoe + 7,
                "FrameID": 7,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "TextComparison",
                  "SubActionArguments": {
                    "StepNo": numPoe + 40,
                    "SegmentNo": segPoe + 7,
                    "FrameID": 7,
                    "FrameTitle": "&{Text180}",
                    "ActionTitle": "&{Text181}",
                    "ActionDescription": "&{Text182}",
                    "FrameTitle_1": "&{Text183}",
                    "ActionTitle_1": "&{Text184}",
                    "ActionDescription_1": "&{Text185}",
                    "FrameTitle_2": "&{Text186}",
                    "ActionTitle_2": "&{Text187}",
                    "ActionDescription_2": "&{Text188}",
                    "FrameTitle_3": "&{Text189}",
                    "ActionTitle_3": "&{Text190}",
                    "ActionDescription_3": "&{Text191}",
                    "ToastMessage": "&{Text192}",
                    "InputKeyName": "The base64 decoded Datahash values from the transactions.",
                    "InputValue": "[{\"title\": \"Datahashes from the Traceability Data and Blockchain transaction\", \"t1\": \"${data_hash}\", \"t2\": \"${MainTXNCurentTXNDatadatahashDecoded}\"}]"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 41,
                "SegmentNo": segPoe + 7,
                "FrameID": 7,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "TextComparison",
                  "SubActionArguments": {
                    "StepNo": numPoe + 41,
                    "SegmentNo": segPoe + 7,
                    "FrameID": 7,
                    "FrameTitle": "&{Text193}",
                    "ActionTitle": "&{Text194}",
                    "ActionDescription": "&{Text195}",
                    "FrameTitle_1": "&{Text196}",
                    "ActionTitle_1": "&{Text197}",
                    "ActionDescription_1": "&{Text198}",
                    "FrameTitle_2": "&{Text199}",
                    "ActionTitle_2": "&{Text200}",
                    "ActionDescription_2": "&{Text201}",
                    "FrameTitle_3": "&{Text202}",
                    "ActionTitle_3": "&{Text203}",
                    "ActionDescription_3": "&{Text204}",
                    "ToastMessage": "&{Text205}",
                    "InputKeyName": "The base64 decoded identifer values from the transactions.",
                    "InputValue": "[{\"title\": \"Identifier from the Traceability Data and Blockchain transaction\", \"t1\": \"${Identifier}\", \"t2\": \"${MainTXNCurentTXNDataIdentifierDecoded}\"}]"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPoe + 42,
                "SegmentNo": segPoe + 8,
                "FrameID": 8,
                "FrameTitle": "&{Text206}",
                "PathID":`poe-${node.Id}-Final`,
              },
              "Action": {
                "ActionTitle": "&{Text207}",
                "ActionDescription": "&{Text208}",
                "ActionType": "BrowserScreen",
                "ActionParameters": {
                  "ExternalURL": "",
                  "EncodedData": "false",
                  "InnerHTML": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n {visibility: hidden;}\r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/checked.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal;font-size:20px; line-height:18px; margin:3px; color:#098260; text-align: center; letter-spacing:0.20em; text-transform:uppercase;\">\r\n Verification Completed Successfully!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0;font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\"><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2;font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF;text-transform: uppercase; background-color: #333333\">PROOF OF EXISTENCE</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\">Batch ID</span></strong></p></th><td scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal;text-align: start; color:#000000;\">\r\n${TDPIdentifier}\r\n</p></td></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal;word-break:break-word;\"><strong><span class=\"size-14\">Transaction Hash from Field Officer</span></strong></p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal;word-break:break-word;\">\r\n ${var_currenttxn}\r\n </p></td></tr><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal;word-break:break-word;\"><strong><span class=\"size-14\">Data Hash From Tracified</span></strong></p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal;word-break:break-word;\">\r\n ${data_hash}\r\n </p></td></tr><tr> <td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal;word-break:break-word;\"><strong><span class=\"size-14\">Data Hash From Blockchain</span></strong></p></td> <td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal;word-break:break-word;\">\r\n${MainTXNCurentTXNDatadatahashDecoded}\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "InnerHTMLError": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center mt-2\"><center><img src=\"../../../../assets/img/cancel.png\" style=\"width:50px; margin-top:5px;\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#F15249; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Failed!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF EXISTENCE</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\">Batch ID</span></strong></p></th><td scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal;text-align: start; color:#000000;\">\r\n${TDPIdentifier}\r\n</p></td></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal;word-break:break-word;\"><strong><span class=\"size-14\">Transaction Hash from Field Officer</span></strong></p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal;word-break:break-word;\">\r\n ${var_currenttxn}\r\n </p></td></tr><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal;word-break:break-word;\"><strong><span class=\"size-14\">Data Hash From Tracified</span></strong></p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal;word-break:break-word;\">\r\n ${data_hash}\r\n </p></td></tr><tr> <td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal;word-break:break-word;\"><strong><span class=\"size-14\">Data Hash From Blockchain</span></strong></p></td> <td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal;word-break:break-word;\">\r\n${MainTXNCurentTXNDatadatahashDecoded}\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "PageURL": "&{Text123}",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "Compare": {
                    "t1": "MainTXNCurentTXNDatadatahashDecoded",
                    "t2": "data_hash",
                    "t3": "MainTXNCurentTXNDataIdentifierDecoded",
                    "t4": "Identifier"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage1": "&{Text209}",
                "ToastPosition1": [
                  "6%",
                  "80%"
                ],
                "ActionDuration": 10
              }
            },
          ]
          let poeLang=[
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 1,
              "Languages": {
                "Text0": {
                  "ja": "ステップ1-TDPデータの取得",
                  "en": "Step 1 - Retrieve Traceability Data Data"
                },
                "Text1": {
                  "ja": "TDPデータの要求",
                  "en": "Request Traceability Data Data"
                },
                "Text2": {
                  "ja": "現在のTDP",
                  "en": "Current Traceability Data"
                },
                "Text3": {
                  "ja": "Tracified GatewayからTDPデータを取得",
                  "en": "Retrieve Traceability Data data from Tracified Gateway."
                },
                "Text4": {
                  "ja": "ステップ1-TDPデータの取得",
                  "en": "Step 1 - Retrieve Traceability Data Data"
                },
                "Text5": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "Text6": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "Text7": {
                  "ja": "ステップ1-TDPデータの取得",
                  "en": "Step 1 - Retrieve Traceability Data Data"
                },
                "Text8": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text9": {
                  "ja": "トランザクションデータをJSONにフォーマット(Javascriptオブジェクト記法)",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 2,
              "Languages": {
                "Text10": {
                  "ja": "TDP識別子の選択",
                  "en": "Select Traceability Data identifier"
                },
                "Text11": {
                  "ja": "TDP詳細から識別子を選択",
                  "en": "Select the Traceability Data identifier from Traceability Data details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 3,
              "Languages": {
                  "Text12": {
                    "ja":"TDPの詳細からの識別子",
                  "en": "TDP identifier from the Traceability Data details"
                },
                  "Text13": {
                    "ja":"識別子をハイライト表示",
                  "en": "Highlight the TDP Identifier"
                },
                  "Text14": {
                    "ja":"TDP詳細から識別子を選択",
                    "en": "Select the TDP identifier from the Traceability Data details"
                  },
                "Text15": {
                    "ja":"TDP詳細から識別子を選択",
                  "en": "Select the TDP identifier from the Traceability Data details"
                },
                "Text16": {
                  "ja": "TDP詳細から識別子を選択",
                  "en": "Select the TDP identifier from the Traceability Data details"
                },
                "Text17": {
                  "ja": "識別子をハイライト表示",
                  "en": "Highlight the value of TDP Identifier"
                },
                "Text18": {
                  "ja": "TDP詳細から識別子を選択",
                  "en": "Select the TDP identifier value from the Traceability Data details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 4,
              "Languages": {
                "Text19": {
                  "ja": "Traceability Data 識別子の保存",
                  "en": "Save Traceability Data Identifier"
                },
                "Text20": {
                  "ja": "将来の使用のために識別子の値を保存する",
                  "en": "Save the Identifier value for future usage."
                },
                "Text21": {
                  "ja": "TDP識別子",
                  "en": "Traceability Data Identifier"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 5,
              "Languages": {
                "Text22": {
                  "ja": "Traceability Data の選択",
                  "en": "Select base64 encoded Traceability Data"
                },
                "Text23": {
                  "ja": "TDPの詳細からデータハッシュを選択",
                  "en": "Select the base64 encoded Traceability Data from Traceability Data details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 6,
              "Languages": {
                "Text24": {
                  "ja": "TDPの詳細からダータハッシュ",
                  "en": "Traceability Data from the base64 encoded Traceability Data details"
                },
                "Text25": {
                  "ja": "ダータハッシュをハイライト表示",
                  "en": "Highlight the base64 encoded Traceability Data "
                },
                "Text26": {
                  "ja": "TDPの詳細からデータハッシュを選択",
                  "en": "Select the base64 encoded Traceability Data from the Traceability Data details"
                },
                "Text27": {
                  "ja": "TDPの詳細からデータハッシュを選択",
                  "en": "Select the base64 encoded Traceability Data from the Traceability Data details"
                },
                "Text28": {
                  "ja": "TDPデータハッシュのハイライト",
                  "en": "Highlight the base64 encoded Traceability Data value"
                },
                "Text29": {
                  "ja": "TDPの詳細からデータハッシュを選択",
                  "en": "Select the base64 encoded Traceability Data value from the Traceability Data details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 7,
              "Languages": {
                "Text30": {
                  "ja": "TDPデータハッシュの保存",
                  "en": "Save base64 encoded Traceability Data"
                },
                "Text31": {
                  "ja": "将来の使用のためにデータハッシュ値の保存",
                  "en": "Save base64 encoded Traceability Data value for future usage."
                },
                "Text32": {
                  "ja": "Traceability Data データハッシュ",
                  "en": "base64 encoded Traceability Data "
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 8,
              "Languages": {
                "Text33": {
                  "ja": "Traceability Data Txn Hashを選択",
                  "en": "Select Traceability Data Txn Hash"
                },
                "Text34": {
                  "ja": "TDPの詳細からTxn Hashを選択",
                  "en": "Select the Txn Hash from Traceability Data details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 9,
              "Languages": {
                "Text35": {
                  "ja": "Txn Hashのハイライト",
                  "en": "Highlight the Txn Hash"
                },
                "Text36": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the txn Hash from the Traceability Data details"
                },
                "Text37": {
                  "ja": "Traceability Data Txn Hashをハイライト",
                  "en": "Highlight the Traceability Data Txn Hash"
                },
                "Text38": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the txn Hash from the Traceability Data details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 10,
              "Languages": {
                "Text39": {
                  "ja": "Traceability Data Txn Hashを保存",
                  "en": "Save Traceability Data Txn Hash"
                },
                "Text40": {
                  "ja": "将来の使用のためにTxn Hashの値を保存",
                  "en": "Save Txn Hash value for future usage."
                },
                "Text41": {
                  "ja": "Traceability Data Txn Hash",
                  "en": "Traceability Data Txn Hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 11,
              "Languages": {
                "Text42": {
                  "ja": "Traceability Data Txn Hashを選択",
                  "en": "Select Traceability Data ID"
                },
                "Text43": {
                  "ja": "TDPの詳細からTxn Hashを選択",
                  "en": "Select the TDP ID from Traceability Data details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 12,
              "Languages": {
                "Text44": {
                  "ja": "Txn Hashのハイライト",
                  "en": "Highlight the Tracicebility Data ID"
                },
                "Text45": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the Traceability Data ID from the Traceability Data details"
                },
                "Text46": {
                  "ja": "Traceability Data Txn Hashをハイライト",
                  "en": "Highlight the Traceability Data ID"
                },
                "Text47": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the Traceability Data ID from the Traceability Data details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 13,
              "Languages": {
                "Text48": {
                  "ja": "Traceability Data Txn Hashを保存",
                  "en": "Save Traceability Data Traceability Data ID"
                },
                "Text49": {
                  "ja": "将来の使用のためにTxn Hashの値を保存",
                  "en": "Save Traceability Data ID value for future usage."
                },
                "Text50": {
                  "ja": "Traceability Data ID",
                  "en": "Traceability Data ID"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 14,
              "Languages": {
                "Text51": {
                  "ja": "Traceability Data Txn Hashを選択",
                  "en": "Select Traceability Profile ID"
                },
                "Text52": {
                  "ja": "TDPの詳細からTxn Hashを選択",
                  "en": "Select the Profile ID from Traceability Data details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 15,
              "Languages": {
                "Text53": {
                  "ja": "Txn Hashのハイライト",
                  "en": "Highlight the Profile ID"
                },
                "Text54": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the Profile ID from the Traceability Data details"
                },
                "Text55": {
                  "ja": "Traceability Data Txn Hashをハイライト",
                  "en": "Highlight the Proflie ID"
                },
                "Text56": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the Profile ID from the Traceability Data details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 16,
              "Languages": {
                "Text57": {
                  "ja": "Traceability Data Txn Hashを保存",
                  "en": "Save Traceability Data Profile ID"
                },
                "Text58": {
                  "ja": "将来の使用のためにTxn Hashの値を保存",
                  "en": "Save Profile ID value for future usage."
                },
                "Text59": {
                  "ja": "Traceability Data Profile ID",
                  "en": "Traceability Data Profile ID"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 17,
              "Languages": {
                "Text60": {
                  "ja": "Traceability Data Txn Hashを選択",
                  "en": "Select the Identifier."
                },
                "Text61": {
                  "ja": "TDPの詳細からTxn Hashを選択",
                  "en": "Select the Identifier from Traceability Data details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 18,
              "Languages": {
                "Text62": {
                  "ja": "Txn Hashのハイライト",
                  "en": "Highlight the Identifier."
                },
                "Text63": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the Identifier from the Traceability Data details."
                },
                "Text64": {
                  "ja": "Traceability Data Txn Hashをハイライト",
                  "en": "Highlight the Identifier."
                },
                "Text65": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the Identifier from the Traceability Data details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 19,
              "Languages": {
                "Text66": {
                  "ja": "Traceability Data Txn Hashを保存",
                  "en": "Save the Identifier"
                },
                "Text67": {
                  "ja": "将来の使用のためにTxn Hashの値を保存",
                  "en": "Save Identifier value for future usage."
                },
                "Text68": {
                  "ja": "Traceability Data Identifier",
                  "en": "Traceability Data Identifier"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 20,
              "Languages": {
                "Text69": {
                  "ja": "Traceability Data Txn Hashを選択",
                  "en": "Select the Map Identifier."
                },
                "Text70": {
                  "ja": "TDPの詳細からTxn Hashを選択",
                  "en": "Select the Map Identifier from Traceability Data details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo":numPoe + 21,
              "Languages": {
                "Text71": {
                  "ja": "Txn Hashのハイライト",
                  "en": "Highlight the Map Identifier."
                },
                "Text72": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the Map Identifier from the Traceability Data details."
                },
                "Text73": {
                  "ja": "Traceability Data Txn Hashをハイライト",
                  "en": "Highlight the Map Identifier."
                },
                "Text74": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the Map Identifier from the Traceability Data details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 22,
              "Languages": {
                "Text75": {
                  "ja": "Traceability Data Txn Hashを保存",
                  "en": "Save the Map Identifier"
                },
                "Text76": {
                  "ja": "将来の使用のためにTxn Hashの値を保存",
                  "en": "Save Map Identifier value for future usage."
                },
                "Text77": {
                  "ja": "Traceability Data Map Identifier",
                  "en": "Traceability Data Map Identifier"
                }
              }
            },
           {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 23,
              "Languages": {
                "Text212": {
                  "ja": "ステップ 2 - トレーサビリティ データのデコード",
                  "en": "Step 2 - Decode Traceability Data"
                },
                "Text213": {
                  "ja": "base64デコードのサイトを読み込む",
                  "en": "Load the base64 decode website"
                },
                "Text214": {
                  "ja": "Base64 でエンコードされたトレーサビリティ データをデコードする",
                  "en": "Decode the base64 encoded Traceability Data"
                },
                "Text215": {
                  "ja": "Base64 でエンコードされたトレーサビリティ データを入力",
                  "en": "Input base64 encoded Traceability Data"
                },
                "Text216": {
                  "ja": "Base64 でエンコードされたトレーサビリティ データを入力します",
                  "en": "Input the base64 encoded Traceability Data"
                },
                "Text217": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click decode button"
                },
                "Text218": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text219": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "Text220": {
                  "ja": "デコードされたトレーサビリティ データの出力を取得します",
                  "en": "Get the output of the decoded Traceability Data"
                },
                "Text221": {
                  "ja": "デコードされた値を情報ストレージに保存します",
                  "en": "Save the decoded value in information storage"
                },
                "Text222": {
                  "ja": "デコードされたトレーサビリティ データを将来の使用のために保存します。",
                  "en": "Save the decoded Traceability Data for future usage."
                },
                "Text223": {
                  "ja": "トレーサビリティデータ（デコード済み）",
                  "en": "Traceability Data (decoded)"
                },
                "Text224": {
                  "ja": "デコードされたトレーサビリティ データ",
                  "en": "Decoded Traceability Data"
                }
              }
            },
            {
              "SegmentNo": segPoe + 3,
              "StepNo": numPoe + 24,
              "Languages": {
                "Text210": {
                  "ja": "ステップ 3 - Base64 でエンコードされたデータとトレーサビリティ データ識別子を結合します。",
                  "en": "Step 3 - Combine Base64 encoded data and Traceability Data Identifier."
                },
                "Text211": {
                  "ja": "Base64 でエンコードされたデータとゲートウェイから受信したトレーサビリティ データ識別子が結合されます。",
                  "en": "Base64 encoded data and the Traceability Data Identifier received from the gateway are being combined."
                },
                "Text225": {
                  "ja": "ステップ 3 - Base64 でエンコードされたデータとトレーサビリティ データ識別子を結合します。",
                  "en": "Step 3 - Combine Base64 encoded data and Traceability Data Identifier."
                }
              }
            },
            {
              "SegmentNo": segPoe + 3,
              "StepNo": numPoe + 25,
              "Languages": {
                "Text78": {
                  "ja": "ステップ１５ - 現在のTXNをデコード",
                  "en": "Step 4 - Genarate Data Hash"
                },
                "Text79": {
                  "ja": "base64デコードのサイトを読み込む",
                  "en": "Load the SHA256 converter website."
                },
                "Text80": {
                  "ja": "Base64でエンコードされたCurrent TXNハッシュをデコードする",
                  "en": "Genarate Data Hash"
                },
                "Text81": {
                  "ja": "Base64でエンコードされた現在のTXNハッシュを入力",
                  "en": "Input base64 encoded Data Hash and Traceability Data Identifer."
                },
                "Text82": {
                  "ja": "Base64でエンコードされたCurrent TXNハッシュを入力する",
                  "en": "Input base64 encoded Data Hash and Traceability Data Identifer."
                },
                "Text83": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the Hash button."
                },
                "Text84": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the Hash button."
                },
                "Text85": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View SHA256 converted Hash."
                },
                "Text86": {
                  "ja": "デコードされた現在のTXNハッシュの出力を取得",
                  "en": "Get the SHA256 converted Hash."
                },
                "Text87": {
                  "ja": "デコードした値を情報ストレージに保存",
                  "en": "Save the SHA256 converted Hash in the informatio storage."
                },
                "Text88": {
                  "ja": "将来の使用のためにデコードされたCurrent TXNハッシュを保存",
                  "en": "Save the SHA256 converted Hash for future usage."
                },
                "Text89": {
                  "ja": "現TXNハッシュ（デコード済み）",
                  "en": "Genarated Data Hash"
                },
                "Text90": {
                  "ja": "デコードされた現在のTXNハッシュ",
                  "en": "Genarated Data Hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 4,
              "StepNo": numPoe + 26,
              "Languages": {
                "Text91": {
                  "ja": "ステップ５ーTDPトランザクションの取得",
                  "en": "Step 5 - Retrieve Traceability Data Transaction"
                },
                "Text92": {
                  "ja": "ステラホライズンAPIをリクエスト",
                  "en": "Request Stellar Horizon API"
                },
                "Text93": {
                  "ja": "ステラブロックチェーンから現在の取引を取得",
                  "en": "Retrieve the current transaction from Stellar Blockchain."
                },
                "Text94": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "Text95": {
                  "ja": "トランザクションのレスポンスデータを保存",
                  "en": "Save the response data of the transaction"
                },
                "Text96": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text97": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 4,
              "StepNo": numPoe + 27,
              "Languages": {
                "Text98": {
                  "ja": "Current TXNハッシュの選択",
                  "en": "Select Current TXN Hash"
                },
                "Text99": {
                  "ja": "トランザクションの詳細からCurrent TXNハッシュ（base64エンコード）を選択",
                  "en": "Select the Current TXN Hash (base64 encoded) from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 4,
              "StepNo": numPoe + 28,
              "Languages": {
                "Text100": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュをハイライト",
                  "en": "Highlight the encoded Current TXN Hash from the transaction details"
                },
                "Text101": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュを選択",
                  "en": "Select the encoded Current TXN Hash from the transaction details"
                },
                "Text102": {
                  "ja": "トランザクションの詳細から、エンコードされたCurrent TXNハッシュ値をハイライト",
                  "en": "Highlight the encoded Current TXN Hash value from the transaction details"
                },
                "Text103": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュ値を選択",
                  "en": "Select the encoded Current TXN Hash value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 4,
              "StepNo": numPoe + 29,
              "Languages": {
                "Text104": {
                  "ja": "Base64エンコードされたCurrent TXNの保存",
                  "en": "Save Base64 Encoded Current TXN"
                },
                "Text105": {
                  "ja": "将来の使用のためにBase64でエンコードされたCurrent TXNハッシュ値を保存",
                  "en": "Save the base64 encoded Current TXN Hash value for future usage."
                },
                "Text106": {
                  "ja": "Current TXN (ベース64)",
                  "en": "Current TXN (base64)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 30,
              "Languages": {
                "Text107": {
                  "ja": "ステップ 6 - 現在のTXNをデコード",
                  "en": "Step 6 - Decode Current TXN"
                },
                "Text108": {
                  "ja": "base64デコードのサイトを読み込む",
                  "en": "Load the base64 decode website"
                },
                "Text109": {
                  "ja": "Base64でエンコードされたCurrent TXNハッシュをデコードする",
                  "en": "Decode the base64 encoded Current TXN Hash"
                },
                "Text110": {
                  "ja": "Base64でエンコードされた現在のTXNハッシュを入力",
                  "en": "Input base64 encoded current txn hash"
                },
                "Text111": {
                  "ja": "Base64でエンコードされたCurrent TXNハッシュを入力する",
                  "en": "Input the base64 encoded Current TXN Hash"
                },
                "Text112": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click decode button"
                },
                "Text113": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text114": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "Text115": {
                  "ja": "デコードされた現在のTXNハッシュの出力を取得",
                  "en": "Get the output of the decoded current txn hash"
                },
                "Text116": {
                  "ja": "デコードした値を情報ストレージに保存",
                  "en": "Save the decoded value in information storage"
                },
                "Text117": {
                  "ja": "将来の使用のためにデコードされたCurrent TXNハッシュを保存",
                  "en": "Save the decoded Current TXN Hash for future usage."
                },
                "Text118": {
                  "ja": "現TXNハッシュ（デコード済み）",
                  "en": "Current txn Hash (decoded)"
                },
                "Text119": {
                  "ja": "デコードされた現在のTXNハッシュ",
                  "en": "Decoded current txn hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 6,
              "StepNo": numPoe + 31,
              "Languages": {
                "Text120": {
                  "ja": "ステップ7ー現在の取引の取得",
                  "en": "Step 7 - Retrieve Current Transaction"
                },
                "Text121": {
                  "ja": "ゲートウェイトランザクションの現在のトランザクション",
                  "en": "current transaction of the gateway transaction"
                },
                "Text122": {
                  "ja": "ステラホライズンAPIをリクエスト",
                  "en": "Request Stellar Horizon API"
                },
                "Text123": {
                  "ja": "ゲートウェイトランザクションの現在のトランザクションをStellar Blockchainから取得",
                  "en": "Retrieve the current transaction of the gateway transaction from Stellar Blockchain."
                },
                "Text124": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "Text125": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "Text126": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text127": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 7,
              "StepNo": numPoe + 32,
              "Languages": {
                "Text128": {
                  "ja": "Base64 Encoded Current Txn ID を選択",
                  "en": "Select Base64 Encoded Current Txn Identifier"
                },
                "Text129": {
                  "ja": "トランザクションの詳細から、エンコードされたcurrent Txn Identifierを選択",
                  "en": "Select the encoded current Txn Identifier from the transaction details."
                },
                "Text130": {
                  "ja": "フォーマットメタデータ",
                  "en": "Format Meta Data"
                }
              }
            },
            {
              "SegmentNo": segPoe + 7,
              "StepNo": numPoe + 33,
              "Languages": {
                "Text131": {
                  "ja": "トランザクションの詳細からエンコードされたIdentifierをハイライト",
                  "en": "Highlight the encoded Identifier from the transaction details"
                },
                "Text132": {
                  "ja": "トランザクションの詳細から、エンコードされたIdentifierの値を選択",
                  "en": "Select the encoded Identifier value from the transaction details"
                },
                "Text133": {
                  "ja": "テスト",
                  "en": "test"
                },
                "Text134": {
                  "ja": "トランザクションの詳細からMainTXNCurrent TXNDataIdentifierをハイライト",
                  "en": "Highlight the MainTXNCurrent TXNDataIdentifier from the transaction details"
                },
                "Text135": {
                  "ja": "トランザクションの詳細から、エンコードされたIdentifierの値を選択",
                  "en": "Select the encoded Identifier value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 7,
              "StepNo": numPoe + 34,
              "Languages": {
                "Text136": {
                  "ja": "Base64エンコードされたCurrent TXNの保存",
                  "en": "Save Base64 Encoded Current Txn Identifier"
                },
                "Text137": {
                  "ja": "将来の使用のためにbase64 エンコードされた Identifier 値を保存",
                  "en": "Save the base64 encoded Identifier value for future usage."
                },
                "Text138": {
                  "ja": "情報ストレージ",
                  "en": "InformationStorage"
                },
                "Text140": {
                  "ja": "ID (base64)",
                  "en": "Identifier (base64)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 7,
              "StepNo": numPoe + 35,
              "Languages": {
                "Text141": {
                  "ja": "ステップ8ー現在のTXNIDのデコード",
                  "en": "Step 8 - Decode Current TXN Identifier"
                },
                "Text142": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "Text143": {
                  "ja": "base64 でエンコードされた Current TXN IDをデコード",
                  "en": "Decode the base64 encoded Current TXN Identifier"
                },
                "Text144": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "Text145": {
                  "ja": "Base64 でエンコードされた Current TXN IDを入力",
                  "en": "Input the base64 encoded Current TXN Identifier"
                },
                "Text146": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the Decode Button"
                },
                "Text147": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text148": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "Text149": {
                  "ja": "デコードしたCurrent TXN　IDの出力を取得",
                  "en": "Get the output of the decoded Current TXN Identifier"
                },
                "Text150": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "Text151": {
                  "ja": "将来の使用のためにデコードされたCurrent TXN　IDを保存",
                  "en": "Save the decoded Current TXN Identifier for future usage."
                },
                "Text152": {
                  "ja": "Current TXN　ID",
                  "en": "Current TXN Identifier"
                },
                "Text153": {
                  "ja": "デコードされた Current TXN ID",
                  "en": "Decoded Current TXN Identifier"
                }
              }
            },
            {
              "SegmentNo": segPoe + 7,
              "StepNo": numPoe + 36,
              "Languages": {
                "Text154": {
                  "ja": "Base64EncodeされたData Hashを選択",
                  "en": "Select Base64 Encoded Data Hash"
                },
                "Text155": {
                  "ja": "トランザクションの詳細からエンコードされたデータハッシュを選択",
                  "en": "Select the encoded Data Hash from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 7,
              "StepNo": numPoe + 37,
              "Languages": {
                "Text160": {
                  "ja": "データハッシュをハイライト",
                  "en": "Highlight the Data Hash"
                },
                "Text161": {
                  "ja": "トランザクションの詳細からエンコードされたデータハッシュを選択",
                  "en": "Select the encoded Data Hash from the transaction details."
                },
                "Text162": {
                  "ja": "Main TXN Current TXNデータハッシュをハイライト",
                  "en": "Highlight the Main TXN Current TXN Data Data Hash"
                },
                "Text163": {
                  "ja": "トランザクションの詳細からエンコードされたデータハッシュの値を選択",
                  "en": "Select the encoded Data Hash value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 7,
              "StepNo": numPoe + 38,
              "Languages": {
                "Text164": {
                  "ja": "Base64Encodeされたデータハッシュの保存",
                  "en": "Save Base64 Encoded Data Hash"
                },
                "Text165": {
                  "ja": "将来の使用のためにbase64でエンコードされたデータハッシュの値を保存",
                  "en": "Save the base64 encoded Data Hash value for future usage."
                },
                "Text166": {
                  "ja": "Current TXN データハッシュ（base64）。",
                  "en": "Current TXN Data Hash (base64)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 7,
              "StepNo": numPoe + 39,
              "Languages": {
                "Text167": {
                  "ja": "ステップ9－現在のTXNデータハッシュのデコード",
                  "en": "Step 9 - Decode Current TXN Data Hash"
                },
                "Text168": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "Text169": {
                  "ja": "Base64でエンコードされたCurrent TXNのData Hashをデコード",
                  "en": "Decode the base64 encoded Current TXN Data Hash"
                },
                "Text170": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "Text171": {
                  "ja": "Base64でエンコードされたCurrent TXN データハッシュを入力",
                  "en": "Input the base64 encoded Current TXN Data Hash"
                },
                "Text172": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text173": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text174": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "Text175": {
                  "ja": "デコードされたCurrent TXNの出力を取得する データハッシュ",
                  "en": "Get the output of the decoded Current TXN Data Hash"
                },
                "Text176": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "Text177": {
                  "ja": "将来の使用のためにデコードされたCurrent TXNデータハッシュ",
                  "en": "Save the decoded Current TXN Data Hash for future usage."
                },
                "Text178": {
                  "ja": "デコードされたCurrent TXN データハッシュ",
                  "en": "Decoded Current TXN Data Hash"
                },
                "Text179": {
                  "ja": "Current TXN データハッシュ",
                  "en": "CurrentTXN data hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 7,
              "StepNo": numPoe + 40,
              "Languages": {
                "Text180": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Compare Data Hash"
                },
                "Text181": {
                  "ja": "オンラインテキスト比較のWebページ",
                  "en": "Online Text Comparison Webpage"
                },
                "Text182": {
                  "ja": "オンラインテキスト比較のウェブページを読み込む",
                  "en": "Load the online text comparison webpage"
                },
                "Text183": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Compare Data Hash"
                },
                "Text184": {
                  "ja": "入力の比較値",
                  "en": "Input comparison values"
                },
                "Text185": {
                  "ja": "トランザクションからBase64デコードされたデータハッシュ値を入力",
                  "en": "Input the base64 decoded Data Hash values from the transactions."
                },
                "Text186": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Step 10 - Compare Data Hash"
                },
                "Text187": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "Text188": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "Text189": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Step 10 - Compare Data Hash"
                },
                "Text190": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "Text191": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "Text192": {
                  "ja": "比較結果",
                  "en": "Comparison Result"
                }
              }
            },
            
            {
              "SegmentNo": segPoe + 7,
              "StepNo": numPoe + 41,
              "Languages": {
                "Text193": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Compare Identifier"
                },
                "Text194": {
                  "ja": "オンラインテキスト比較のWebページ",
                  "en": "Online Text Comparison Webpage"
                },
                "Text195": {
                  "ja": "オンラインテキスト比較のウェブページを読み込む",
                  "en": "Load the online text comparison webpage"
                },
                "Text196": {
                  "ja": "ステップ１１－IDの比較",
                  "en": "Step 11 - Compare Identifier"
                },
                "Text197": {
                  "ja": "比較値の入力",
                  "en": "Input comparison values"
                },
                "Text198": {
                  "ja": "トランザクションからBase64デコードされたデータハッシュ値を入力",
                  "en": "Input the identifier value from the transactions."
                },
                "Text199": {
                  "ja": "ステップ１１－IDの比較",
                  "en": "Step 11 - Compare Identifier"
                },
                "Text200": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "Text201": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "Text202": {
                  "ja": "ステップ１１－IDの比較",
                  "en": "Step 11 - Compare Identifier"
                },
                "Text203": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "Text204": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "Text205": {
                  "ja": "比較結果",
                  "en": "Comparison Result"
                }
              }
            },
            {
              "SegmentNo": segPoe + 8,
              "StepNo": numPoe + 42,
              "Languages": {
                "Text206": {
                  "ja": "ステップ１2－検証の概要",
                  "en": "Step 12 - Verification Summary"
                },
                "Text207": {
                  "ja": "検証の概要",
                  "en": "Verification Summary"
                },
                "Text208": {
                  "ja": "検証の概要についてー存在の証明",
                  "en": "about: Verification Summary - PROOF OF THE EXISTENCE"
                },
                "Text209": {
                  "ja": "検証は正常に終了",
                  "en": "Verification Completed Successfully"
                }
              }
            }
          ]
          this.pocProofJson.Header.Segments.push(...poeSegments)
          this.pocProofJson.Steps.push(...poeSteps)
          this.pocLangJson.Actions.push(...poeLang)
          segPoe = segPoe + 8
          numPoe = numPoe + 42
          break;
        case "pobl":
          let segPobl = this.pocProofJson.Header.Segments[this.pocProofJson.Header.Segments.length - 1].NO
          let numPobl = this.pocProofJson.Steps[this.pocProofJson.Steps.length - 1].StepHeader.StepNo
          let poblSegments = [
            {
              "NO": segPobl + 1,
              "Name": "&{SegName18}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPobl + 2,
              "Name": "&{SegName19}",
              "Source": ""
            },
            {
              "NO": segPobl + 3,
              "Name": "&{SegName20}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPobl + 4,
              "Name": "&{SegName21}",
              "Source": ""
            },
            {
              "NO": segPobl + 5,
              "Name": "&{SegName22}",
              "Source": ""
            },
            {
              "NO": segPobl + 6,
              "Name": "&{SegName23}",
              "Source": ""
            },
            {
              "NO": segPobl + 7,
              "Name": "&{SegName24}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPobl + 8,
              "Name": "&{SegName25}",
              "Source": ""
            },
            {
              "NO": segPobl + 9,
              "Name": "&{SegName26}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPobl + 10,
              "Name": "&{SegName27}",
              "Source": ""
            },
            {
              "NO": segPobl + 11,
              "Name": "&{SegName28}",
              "Source": ""
            },
            {
              "NO": segPobl + 12,
              "Name": "&{SegName29}",
              "Source": ""
            },
            {
              "NO": segPobl + 13,
              "Name": "&{SegName30}",
              "Source": ""
            },
            {
              "NO": segPobl + 14,
              "Name": "&{SegName31}",
              "Source": ""
            }
          ]
          let poblSteps = [
            {
              "StepHeader": {
                "StepNo": numPobl + 1,
                "SegmentNo": segPobl + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl0}",
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "StellarOperationViewer",
                  "SubActionArguments": {
                    "StepNo": numPobl + 1,
                    "SegmentNo": segPobl + 1,
                    "FrameID": 1,
                    "FrameTitle": "&{TextPobl1}",
                    "ActionTitle": "&{TextPobl2}",
                    "ActionDescription": "&{TextPobl3}",
                    "PathID": `pobl-${node.PoblTDP.current}-${node.PoblTDP.previous}`,
                    "ActionTitle_1": "&{TextPobl4}",
                    "ActionDescription_1": "&{TextPobl5}",
                    "ActionTitle_2": "&{TextPobl6}",
                    "ActionDescription_2": "&{TextPobl7}",
                    "TXNHash": node.TrustLinks[0],
                    "OperationName": "current transaction",
                    "ResponseVariable": "MainTXNDataString",
                    "JSONResultVariable": "MainTXNData",
                    "StartedProofType": "POBL",
                    "TrustLinks": [node.PoblTDP.current, node.PoblTDP.previous],
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 2,
                "SegmentNo": segPobl + 2,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl8}",
                "ActionDescription": "&{TextPobl9}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNCurentTXNHash",
                "MetaData": [
                  "MainTXNData",
                  "CurrentTXN",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 2
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 3,
                "SegmentNo": segPobl + 2,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPobl + 10,
                    "SegmentNo": segPobl + 2,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPobl10}",
                    "ActionDescription": "&{TextPobl11}",
                    "ActionTitle_1": "&{TextPobl12}",
                    "ActionDescription_1": "&{TextPobl13}",
                    "OperationKey": "CurrentTXN",
                    "OperationValue": "MainTXNCurentTXNHash",
                    "OperationKeyName": "encoded CurrentTXN Hash from the transaction details",
                    "OperationValueName": "encoded CurrentTXN Hash from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 4,
                "SegmentNo": segPobl + 2,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl14}",
                "ActionDescription": "&{TextPobl15}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPobl211}",
                      "Value": "${MainTXNCurentTXNHash}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 5,
                "SegmentNo": segPobl + 2,
                "FrameID": 2,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPobl + 5,
                    "SegmentNo": segPobl + 2,
                    "FrameID": 2,
                    "FrameTitle": "&{TextPobl16}",
                    "ActionTitle": "&{TextPobl17}",
                    "ActionDescription": "&{TextPobl18}",
                    "ActionTitle_1": "&{TextPobl19}",
                    "ActionDescription_1": "&{TextPobl20}",
                    "ActionTitle_2": "&{TextPobl21}",
                    "ActionDescription_2": "&{TextPobl22}",
                    "ActionTitle_3": "&{TextPobl23}",
                    "ActionDescription_3": "&{TextPobl24}",
                    "ActionTitle_4": "&{TextPobl25}",
                    "ActionDescription_4": "&{TextPobl26}",
                    "ToastMessage": "&{TextPobl27}",
                    "DecodeKeyName": "&{TextPobl237}",
                    "EncodedInputValue": "${MainTXNCurentTXNHash}",
                    "DecodedResultVariable": "var_currenttxn",
                    "InformationStorageKey": "&{TextPobl226}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 6,
                "SegmentNo": segPobl + 2,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl250}",
                "ActionDescription": "&{TextPobl251}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNMergeID",
                "MetaData": ["MainTXNData", "MergeID", false, "value"]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 2
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 7,
                "SegmentNo": segPobl + 2,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPobl + 7,
                    "SegmentNo": segPobl + 2,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPobl252}",
                    "ActionDescription": "&{TextPobl253}",
                    "ActionTitle_1": "&{TextPobl254}",
                    "ActionDescription_1": "&{TextPobl255}",
                    "OperationKey": "MergeID",
                    "OperationValue": "MainTXNMergeID",
                    "OperationKeyName": "encoded Merge Id Hash from the transaction details",
                    "OperationValueName": "encoded Merge ID Hash from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 8,
                "SegmentNo": segPobl + 2,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl256}",
                "ActionDescription": "&{TextPobl257}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "body",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPobl258}",
                      "Value": "${MainTXNMergeID}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 9,
                "SegmentNo": segPobl + 2,
                "FrameID": 2,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPobl + 9,
                    "SegmentNo": segPobl + 2,
                    "FrameID": 2,
                    "FrameTitle": "&{TextPobl259}",
                    "ActionTitle":"&{TextPobl260}",
                    "ActionDescription":"&{TextPobl261}",
                    "ActionTitle_1":"&{TextPobl262}",
                    "ActionDescription_1":"&{TextPobl263}",
                    "ActionTitle_2":"&{TextPobl264}",
                    "ActionDescription_2":"&{TextPobl265}",
                    "ActionTitle_3":"&{TextPobl266}",
                    "ActionDescription_3":"&{TextPobl267}",
                    "ActionTitle_4":"&{TextPobl268}",
                    "ActionDescription_4":"&{TextPobl269}",
                    "ToastMessage":"&{TextPobl270}",
                    "DecodeKeyName": "MergeID Hash",
                    "EncodedInputValue": "${MainTXNMergeID}",
                    "DecodedResultVariable": "MergeIDhasheDecoded",
                    "InformationStorageKey": "&{TextPobl271}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 10,
                "SegmentNo": segPobl + 3,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "StellarOperationViewer",
                  "SubActionArguments": {
                    "StepNo": numPobl + 10,
                    "SegmentNo": segPobl + 2,
                    "FrameID": 3,
                    "FrameTitle": "&{TextPobl28}",
                    "ActionTitle": "&{TextPobl29}",
                    "ActionDescription": "&{TextPobl30}",
                    "PathID":"",
                    "ActionTitle_1": "&{TextPobl31}",
                    "ActionDescription_1": "&{TextPobl32}",
                    "ActionTitle_2": "&{TextPobl33}",
                    "ActionDescription_2": "&{TextPobl34}",
                    "TXNHash": "${var_currenttxn}",
                    "OperationName": "current transaction of the gateway transaction",
                    "ResponseVariable": "MainTXNCurentTXNDataString",
                    "JSONResultVariable": "MainTXNCurentTXNData",
                    "StartedProofType": "",
                    "TrustLinks": []
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 11,
                "SegmentNo": segPobl + 4,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl35}",
                "ActionDescription": "&{TextPobl36}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNCurentTXNDataIdentifier",
                "MetaData": [
                  "MainTXNCurentTXNData",
                  "identifier",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 12,
                "SegmentNo": segPobl + 4,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPobl + 12,
                    "SegmentNo": segPobl + 4,
                    "FrameID": 3,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPobl37}",
                    "ActionDescription": "&{TextPobl38}",
                    "ActionTitle_1": "&{TextPobl39}",
                    "ActionDescription_1": "&{TextPobl40}",
                    "OperationKey": "identifier",
                    "OperationValue": "MainTXNCurentTXNDataIdentifier",
                    "OperationKeyName": "encoded Identifier from the transaction details",
                    "OperationValueName": "encoded Identifier value from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 13,
                "SegmentNo": segPobl + 4,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl41}",
                "ActionDescription": "&{TextPobl42}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPobl212}",
                      "Value": "${MainTXNCurentTXNDataIdentifier}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 14,
                "SegmentNo": segPobl + 4,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPobl + 14,
                    "SegmentNo": segPobl + 4,
                    "FrameID": 4,
                    "FrameTitle": "&{TextPobl43}",
                    "ActionTitle": "&{TextPobl44}",
                    "ActionDescription": "&{TextPobl45}",
                    "ActionTitle_1": "&{TextPobl46}",
                    "ActionDescription_1": "&{TextPobl47}",
                    "ActionTitle_2": "&{TextPobl48}",
                    "ActionDescription_2": "&{TextPobl49}",
                    "ActionTitle_3": "&{TextPobl50}",
                    "ActionDescription_3": "&{TextPobl51}",
                    "ActionTitle_4": "&{TextPobl52}",
                    "ActionDescription_4": "&{TextPobl53}",
                    "ToastMessage": "&{TextPobl54}",
                    "DecodeKeyName": "&{TextPobl238}",
                    "EncodedInputValue": "${MainTXNCurentTXNDataIdentifier}",
                    "DecodedResultVariable": "MainTXNCurentTXNDataIdentifierDecoded",
                    "InformationStorageKey": "&{TextPobl227}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 15,
                "SegmentNo": segPobl + 5,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl55}",
                "ActionDescription": "&{TextPobl56}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNCurentTXNDataProductId",
                "MetaData": [
                  "MainTXNCurentTXNData",
                  "productId",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 16,
                "SegmentNo": segPobl + 5,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPobl + 16,
                    "SegmentNo": segPobl + 5,
                    "FrameID": 3,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPobl57}",
                    "ActionDescription": "&{TextPobl58}",
                    "ActionTitle_1": "&{TextPobl59}",
                    "ActionDescription_1": "&{TextPobl60}",
                    "OperationKey": "productId",
                    "OperationValue": "MainTXNCurentTXNDataProductId",
                    "OperationKeyName": "encoded ProductID from the transaction details",
                    "OperationValueName": "encoded ProductID value from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 17,
                "SegmentNo": segPobl + 5,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl60}",
                "ActionDescription": "&{TextPobl61}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPobl213}",
                      "Value": "${MainTXNCurentTXNDataProductId}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 18,
                "SegmentNo": segPobl + 5,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPobl + 18,
                    "SegmentNo": segPobl + 5,
                    "FrameID": 3,
                    "FrameTitle": "&{TextPobl62}",
                    "ActionTitle": "&{TextPobl63}",
                    "ActionDescription": "&{TextPobl64}",
                    "ActionTitle_1": "&{TextPobl65}",
                    "ActionDescription_1": "&{TextPobl66}",
                    "ActionTitle_2": "&{TextPobl67}",
                    "ActionDescription_2": "&{TextPobl68}",
                    "ActionTitle_3": "&{TextPobl69}",
                    "ActionDescription_3": "&{TextPobl70}",
                    "ActionTitle_4": "&{TextPobl71}",
                    "ActionDescription_4": "&{TextPobl72}",
                    "ToastMessage": "&{TextPobl73}",
                    "DecodeKeyName": "&{TextPobl239}",
                    "EncodedInputValue": "${MainTXNCurentTXNDataProductId}",
                    "DecodedResultVariable": "MainTXNCurentTXNDataProductIdDecoded",
                    "InformationStorageKey": "&{TextPobl228}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 19,
                "SegmentNo": segPobl + 6,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl74}",
                "ActionDescription": "&{TextPobl75}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNPreviousTXN",
                "MetaData": [
                  "MainTXNData",
                  "PreviousTXN",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 20,
                "SegmentNo": segPobl + 6,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPobl + 20,
                    "SegmentNo": segPobl + 5,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPobl76}",
                    "ActionDescription": "&{TextPobl77}",
                    "ActionTitle_1": "&{TextPobl78}",
                    "ActionDescription_1": "&{TextPobl79}",
                    "OperationKey": "PreviousTXN",
                    "OperationValue": "MainTXNPreviousTXN",
                    "OperationKeyName": "encoded PreviousTXN Hash from the transaction details.",
                    "OperationValueName": "encoded PreviousTXN Hash value from the transaction details."
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 21,
                "SegmentNo": segPobl + 6,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl80}",
                "ActionDescription": "&{TextPobl81}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPobl214}",
                      "Value": "${MainTXNPreviousTXN}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 22,
                "SegmentNo": segPobl + 6,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPobl + 22,
                    "SegmentNo": segPobl + 6,
                    "FrameID": 1,
                    "FrameTitle": "&{TextPobl82}",
                    "ActionTitle": "&{TextPobl83}",
                    "ActionDescription": "&{TextPobl84}",
                    "ActionTitle_1": "&{TextPobl85}",
                    "ActionDescription_1": "&{TextPobl86}",
                    "ActionTitle_2": "&{TextPobl87}",
                    "ActionDescription_2": "&{TextPobl88}",
                    "ActionTitle_3": "&{TextPobl89}",
                    "ActionDescription_3": "&{TextPobl90}",
                    "ActionTitle_4": "&{TextPobl91}",
                    "ActionDescription_4": "&{TextPobl92}",
                    "ToastMessage": "&{TextPobl93}",
                    "DecodeKeyName": "&{TextPobl240}",
                    "EncodedInputValue": "${MainTXNPreviousTXN}",
                    "DecodedResultVariable": "MainTXNPreviousTXNDecoded",
                    "InformationStorageKey": "&{TextPobl229}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 23,
                "SegmentNo": segPobl + 7,
                "FrameID": 8,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "StellarOperationViewer",
                  "SubActionArguments": {
                    "StepNo": numPobl + 23,
                    "SegmentNo": segPobl + 7,
                    "FrameID": 8,
                    "FrameTitle": "&{TextPobl94}",
                    "ActionTitle": "&{TextPobl95}",
                    "ActionDescription": "&{TextPobl96}",
                    "PathID":"",
                    "ActionTitle_1": "&{TextPobl97}",
                    "ActionDescription_1": "&{TextPobl98}",
                    "ActionTitle_2": "&{TextPobl99}",
                    "ActionDescription_2": "&{TextPobl100}",
                    "TXNHash": "${MainTXNPreviousTXNDecoded}",
                    "OperationName": "Backlink transaction from Stellar Blockchain.",
                    "ResponseVariable": "MainTXNPreviousTXNDataString",
                    "JSONResultVariable": "MainTXNPreviousTXNData",
                    "StartedProofType": "",
                    "TrustLinks": []
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 24,
                "SegmentNo": segPobl + 8,
                "FrameID": 8,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl101}",
                "ActionDescription": "&{TextPobl102}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNPreviousTXNCurrentTXNHash",
                "MetaData": [
                  "MainTXNPreviousTXNData",
                  "CurrentTXN",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 25,
                "SegmentNo": segPobl + 8,
                "FrameID": 8,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPobl + 25,
                    "SegmentNo": segPobl + 8,
                    "FrameID": 8,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPobl103}",
                    "ActionDescription": "&{TextPobl104}",
                    "ActionTitle_1": "&{TextPobl105}",
                    "ActionDescription_1": "&{TextPobl106}",
                    "OperationKey": "CurrentTXN",
                    "OperationValue": "MainTXNPreviousTXNCurrentTXNHash",
                    "OperationKeyName": "encoded CurrentTXN Hash of the Backlink transaction from the transaction details.",
                    "OperationValueName": "encoded CurrentTXN Hash of the Backlink transaction from the transaction details."
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 26,
                "SegmentNo": segPobl + 8,
                "FrameID": 8,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl107}",
                "ActionDescription": "&{TextPobl108}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "GivenDataToStorageData": {
                    "Type": "poblOfPoc",
                    "Key": "&{TextPobl215}",
                    "Value": node.TrustLinks[1]
                  },
                  "StorageData": [
                    {
                      "Key": "&{TextPobl216}",
                      "Value": "${MainTXNPreviousTXNCurrentTXNHash}"
                    }
                  ]
                },
                "ActionResultVariable": "ExpectedPreviousTxnHash",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 27,
                "SegmentNo": segPobl + 8,
                "FrameID": 9,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPobl + 27,
                    "SegmentNo": segPobl + 8,
                    "FrameID": 9,
                    "FrameTitle": "&{TextPobl109}",
                    "ActionTitle": "&{TextPobl110}",
                    "ActionDescription": "&{TextPobl111}",
                    "ActionTitle_1": "&{TextPobl112}",
                    "ActionDescription_1": "&{TextPobl113}",
                    "ActionTitle_2": "&{TextPobl114}",
                    "ActionDescription_2": "&{TextPobl115}",
                    "ActionTitle_3": "&{TextPobl116}",
                    "ActionDescription_3": "&{TextPobl117}",
                    "ActionTitle_4": "&{TextPobl118}",
                    "ActionDescription_4": "&{TextPobl119}",
                    "ToastMessage": "&{TextPobl120}",
                    "DecodeKeyName": "&{TextPobl241}",
                    "EncodedInputValue": "${MainTXNPreviousTXNCurrentTXNHash}",
                    "DecodedResultVariable": "MainTXNPreviousTXNCurrentTXNHashDecoded",
                    "InformationStorageKey": "&{TextPobl230}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 28,
                "SegmentNo": segPobl + 9,
                "FrameID": 10,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "StellarOperationViewer",
                  "SubActionArguments": {
                    "StepNo": numPobl + 28,
                    "SegmentNo": segPobl + 9,
                    "FrameID": 10,
                    "FrameTitle": "&{TextPobl121}",
                    "ActionTitle": "&{TextPobl122}",
                    "ActionDescription": "&{TextPobl123}",
                    "PathID":"",
                    "ActionTitle_1": "&{TextPobl124}",
                    "ActionDescription_1": "&{TextPobl125}",
                    "ActionTitle_2": "&{TextPobl126}",
                    "ActionDescription_2": "&{TextPobl127}",
                    "TXNHash": "${MainTXNPreviousTXNCurrentTXNHashDecoded}",
                    "OperationName": "current transaction of the backlink transaction",
                    "ResponseVariable": "MainTXNPreviousTXNCurrentTXNDataString",
                    "JSONResultVariable": "MainTXNPreviousTXNCurrentTXNData",
                    "StartedProofType": "",
                    "TrustLinks": []
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 29,
                "SegmentNo": segPobl + 10,
                "FrameID": 10,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl128}",
                "ActionDescription": "&{TextPobl129}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNPreviousTXNCurrentTXNDataIdentifier",
                "MetaData": [
                  "MainTXNPreviousTXNCurrentTXNData",
                  "identifier",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 30,
                "SegmentNo": segPobl + 10,
                "FrameID": 10,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPobl + 30,
                    "SegmentNo": segPobl + 10,
                    "FrameID": 10,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPobl130}",
                    "ActionDescription": "&{TextPobl131}",
                    "ActionTitle_1": "&{TextPobl132}",
                    "ActionDescription_1": "&{TextPobl133}",
                    "OperationKey": "identifier",
                    "OperationValue": "MainTXNPreviousTXNCurrentTXNDataIdentifier",
                    "OperationKeyName": "encoded Identifier from the transaction details",
                    "OperationValueName": "encoded Identifier value from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 31,
                "SegmentNo": segPobl + 10,
                "FrameID": 10,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl134}",
                "ActionDescription": "&{TextPobl135}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPobl217}",
                      "Value": "${MainTXNPreviousTXNCurrentTXNDataIdentifier}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 32,
                "SegmentNo": segPobl + 10,
                "FrameID": 11,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPobl + 32,
                    "SegmentNo": segPobl + 10,
                    "FrameID": 11,
                    "FrameTitle": "&{TextPobl136}",
                    "ActionTitle": "&{TextPobl137}",
                    "ActionDescription": "&{TextPobl138}",
                    "ActionTitle_1": "&{TextPobl139}",
                    "ActionDescription_1": "&{TextPobl140}",
                    "ActionTitle_2": "&{TextPobl141}",
                    "ActionDescription_2": "&{TextPobl142}",
                    "ActionTitle_3": "&{TextPobl143}",
                    "ActionDescription_3": "&{TextPobl144}",
                    "ActionTitle_4": "&{TextPobl145}",
                    "ActionDescription_4": "&{TextPobl146}",
                    "ToastMessage": "&{TextPobl147}",
                    "DecodeKeyName": "&{TextPobl242}",
                    "EncodedInputValue": "${MainTXNPreviousTXNCurrentTXNDataIdentifier}",
                    "DecodedResultVariable": "MainTXNPreviousTXNCurrentTXNDataIdentifierDecoded",
                    "InformationStorageKey": "&{TextPobl231}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 33,
                "SegmentNo": segPobl + 11,
                "FrameID": 10,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl148}",
                "ActionDescription": "&{TextPobl149}",
                "ActionType": "FormatMetaData",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "jsonValueObjectPicker",
                  "StorageData": []
                },
                "ActionResultVariable": "MainTXNPreviousTXNCurrentTXNDataProductID",
                "MetaData": [
                  "MainTXNPreviousTXNCurrentTXNData",
                  "productId",
                  false,
                  "value"
                ]
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 34,
                "SegmentNo": segPobl + 11,
                "FrameID": 10,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "KeyValueHighlighter",
                  "SubActionArguments": {
                    "StepNo": numPobl + 34,
                    "SegmentNo": segPobl + 11,
                    "FrameID": 10,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPobl150}",
                    "ActionDescription": "&{TextPobl151}",
                    "ActionTitle_1": "&{TextPobl152}",
                    "ActionDescription_1": "&{TextPobl153}",
                    "OperationKey": "productId",
                    "OperationValue": "MainTXNPreviousTXNCurrentTXNDataProductID",
                    "OperationKeyName": "encoded ProductID from the transaction details",
                    "OperationValueName": "encoded ProductID value from the transaction details"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 35,
                "SegmentNo": segPobl + 11,
                "FrameID": 10,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPobl154}",
                "ActionDescription": "&{TextPobl155}",
                "ActionType": "InformationStorage",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": 0,
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": true,
                  "SelectiveTextIndex": 0,
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [
                    {
                      "Key": "&{TextPobl218}",
                      "Value": "${MainTXNPreviousTXNCurrentTXNDataProductID}"
                    }
                  ]
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 30
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 36,
                "SegmentNo": segPobl + 11,
                "FrameID": 11,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "OnlineToolsDecoder",
                  "SubActionArguments": {
                    "StepNo": numPobl + 36,
                    "SegmentNo": segPobl + 11,
                    "FrameID": 11,
                    "FrameTitle": "&{TextPobl156}",
                    "ActionTitle": "&{TextPobl157}",
                    "ActionDescription": "&{TextPobl158}",
                    "ActionTitle_1": "&{TextPobl15}",
                    "ActionDescription_1": "&{TextPobl19}",
                    "ActionTitle_2": "&{TextPobl160}",
                    "ActionDescription_2": "&{TextPobl161}",
                    "ActionTitle_3": "&{TextPobl162}",
                    "ActionDescription_3": "&{TextPobl163}",
                    "ActionTitle_4": "&{TextPobl164}",
                    "ActionDescription_4": "&{TextPobl165}",
                    "ToastMessage": "&{TextPobl166}",
                    "DecodeKeyName": "&{TextPobl245}",
                    "EncodedInputValue": "${MainTXNPreviousTXNCurrentTXNDataProductID}",
                    "DecodedResultVariable": "MainTXNPreviousTXNCurrentTXNDataProductIDDecoded",
                    "InformationStorageKey": "&{TextPobl232}"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 37,
                "SegmentNo": segPobl + 12,
                "FrameID": 12,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "TextComparison",
                  "SubActionArguments": {
                    "StepNo": numPobl + 37,
                    "SegmentNo": segPobl + 12,
                    "FrameID": 7,
                    "FrameTitle": "&{TextPobl168}",
                    "ActionTitle": "&{TextPobl169}",
                    "ActionDescription": "&{TextPobl170}",
                    "FrameTitle_1": "&{TextPobl168}",
                    "ActionTitle_1": "&{TextPobl171}",
                    "ActionDescription_1": "&{TextPobl172}",
                    "FrameTitle_2": "&{TextPobl168}",
                    "ActionTitle_2": "&{TextPobl173}",
                    "ActionDescription_2": "&{TextPobl174}",
                    "FrameTitle_3": "&{TextPobl168}",
                    "ActionTitle_3": "&{TextPobl175}",
                    "ActionDescription_3": "&{TextPobl176}",
                    "ToastMessage": "&{TextPobl177}",
                    "InputKeyName": "the base64 decoded Identifier values from the transactions.",
                    "InputValue": "[{\"title\": \"Identifiers from the Main transaction and Backlink transaction\", \"t1\": \"${MainTXNCurentTXNDataIdentifierDecoded}\", \"t2\": \"${MainTXNPreviousTXNCurrentTXNDataIdentifierDecoded}\"}]"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 38,
                "SegmentNo": segPobl + 13,
                "FrameID": 12,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "TextComparison",
                  "SubActionArguments": {
                    "StepNo": numPobl + 38,
                    "SegmentNo": segPobl + 13,
                    "FrameID": 7,
                    "FrameTitle": "&{TextPobl168}",
                    "ActionTitle": "&{TextPobl169}",
                    "ActionDescription": "&{TextPobl170}",
                    "FrameTitle_1": "&{TextPobl168}",
                    "ActionTitle_1": "&{TextPobl171}",
                    "ActionDescription_1": "&{TextPobl172}",
                    "FrameTitle_2": "&{TextPobl168}",
                    "ActionTitle_2": "&{TextPobl173}",
                    "ActionDescription_2": "&{TextPobl174}",
                    "FrameTitle_3": "&{TextPobl168}",
                    "ActionTitle_3": "&{TextPobl175}",
                    "ActionDescription_3": "&{TextPobl176}",
                    "ToastMessage": "&{TextPobl177}",
                    "InputKeyName": "the base64 decoded Identifier values from the transactions.",
                    "InputValue": "[{\"title\": \" Merge ID   hash from main transaction & backlink transaction\", \"t1\": \"${MergeIDhasheDecoded}\", \"t2\": \"${ExpectedPreviousTxnHash}\"}]"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 38,
                "SegmentNo": segPobl + 13,
                "FrameID": 12,
                "FrameTitle": ""
              },
              "Action": {
                "ActionDescription": "",
                "ActionType": "MultiStepAction",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "ActionConfigurationID": "TextComparison",
                  "SubActionArguments": {
                    "StepNo": numPobl + 38,
                    "SegmentNo": segPobl + 13,
                    "FrameID": 12,
                    "FrameTitle": "&{TextPobl168}",
                    "ActionTitle": "&{TextPobl169}",
                    "ActionDescription": "&{TextPobl170}",
                    "FrameTitle_1": "&{TextPobl168}",
                    "ActionTitle_1": "&{TextPobl171}",
                    "ActionDescription_1": "&{TextPobl172}",
                    "FrameTitle_2": "&{TextPobl168}",
                    "ActionTitle_2": "&{TextPobl173}",
                    "ActionDescription_2": "&{TextPobl174}",
                    "FrameTitle_3": "&{TextPobl168}",
                    "ActionTitle_3": "&{TextPobl175}",
                    "ActionDescription_3": "&{TextPobl176}",
                    "ToastMessage": "&{TextPobl177}",
                    "InputKeyName": "the base64 decoded Identifier values from the transactions.",
                    "InputValue": "[{\"title\": \"Previous Transaction hash from main transaction & backlink transaction\", \"t1\": \"${MainTXNPreviousTXNDecoded}\", \"t2\": \"${ExpectedPreviousTxnHash}\"}]"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage": "",
                "ToastPosition": null,
                "ActionDuration": 10
              }
            },
            {
              "StepHeader": {
                "StepNo": numPobl + 39,
                "SegmentNo": segPobl + 14,
                "FrameID": 13,
                "FrameTitle": "&{TextPobl178}",
                "PathID": `pobl-${node.PoblTDP.current}-${node.PoblTDP.previous}-Final`
              },
              "Action": {
                "ActionTitle": "&{TextPobl179}",
                "ActionDescription": "&{TextPobl179}",
                "ActionType": "BrowserScreen",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/checked.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#098260; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Completed Successfully!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF BACKLINK</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Current Traceability Data Transaction Hash</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Previous Traceability Data Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n${var_currenttxn}\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n ${MainTXNPreviousTXNCurrentTXNHashDecoded}\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "InnerHTMLError": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/cancel.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#F15249; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Failed!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF BACKLINK</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Current Traceability Data Transaction Hash</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Previous Traceability Data Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n${var_currenttxn}\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n ${MainTXNPreviousTXNCurrentTXNHashDecoded}\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "PageURL": "&{TextPobl181}",
                  "Query": "",
                  "QueryIndex": "",
                  "YOffset": "",
                  "XOffset": "",
                  "ElAttributeName": "",
                  "ElAttributeValue": "",
                  "ElAttributeValueReplace": "",
                  "ElProperty": "",
                  "ElPropertyValue": "",
                  "ElFunction": "",
                  "ElFunctionArguments": "",
                  "SelectiveText": "",
                  "CaseSensitivity": "",
                  "SelectiveTextIndex": "",
                  "CSS": "",
                  "FormatType": "",
                  "StorageData": [],
                  "Compare": {
                    "blockchainValue1": "MainTXNPreviousTXNDecoded",
                    "blockchainValue2":"MergeIDhasheDecoded",
                    "expectedValue1": "ExpectedPreviousTxnHash"
                  }
                },
                "ActionResultVariable": "",
                "MetaData": []
              },
              "Customizations": {
                "PointerData": "",
                "ScrollToPointer": false,
                "FrameAutoScroll": true,
                "FrameScrollBars": "",
                "ToastMessage1": "&{TextPobl235}",
                "ToastPosition1": [
                  "6%",
                  "80%"
                ],
                "ActionDuration": 10
              }
            }
          ]
          let poblLang = [
            {
              "SegmentNo": segPobl + 1,
              "StepNo": numPobl + 1,
              "Languages": {
                "TextPobl0": {
                  "ja": "現在のトランザクションの取得",
                  "en": "Retrieve Current Transaction"
                },
                "TextPobl1": {
                  "ja": "ステップ１ー現在のトランザクションの取得",
                  "en": "Step 1 - Retrieve Current Transaction"
                },
                "TextPobl2": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar HorizonAPI"
                },
                "TextPobl3": {
                  "ja": "ステラブロックチェーンから現在のトランザクションを取得",
                  "en": "Retrieve the current transaction from Stellar Blockchain."
                },
                "TextPobl4": {
                  "ja": "APIレスポンスの保存",
                  "en": "Save API Response"
                },
                "TextPobl5": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "TextPobl6": {
                  "ja": "応答形式（JSON）",
                  "en": "Format Response (JSON)"
                },
                "TextPobl7": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 2,
              "Languages": {
                "TextPobl8": {
                  "ja": "CurrentTXNハッシュの抽出",
                  "en": "Extract CurrentTXN Hash"
                },
                "TextPobl9": {
                  "ja": "トランザクションの詳細から、CurrentTXN Hash (base64 encoded)を選択",
                  "en": "Select the CurrentTXN Hash (base64 encoded) from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 3,
              "Languages": {
                "TextPobl10": {
                  "ja": "現在のTXNをハイライト表示",
                  "en": "Highlight the CurrentTXN"
                },
                "TextPobl11": {
                  "ja": "トランザクションの詳細からエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the encoded CurrentTXN Hash from the transaction details"
                },
                "TextPobl12": {
                  "ja": "MainTXNCurrentTXNHashをハイライト表示",
                  "en": "Highlight the MainTXNCurrentTXNHash"
                },
                "TextPobl13": {
                  "ja": "トランザクションの詳細からエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the encoded CurrentTXN Hash from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 4,
              "Languages": {
                "TextPobl14": {
                  "ja": "Base64エンコードされたCurrentTXNを保存",
                  "en": "Save Base64Encoded CurrentTXN"
                },
                "TextPobl15": {
                  "ja": "Base64でエンコードされたCurrentTXNハッシュ値を将来の使用のために保存",
                  "en": "Save the base64 encoded CurrentTXN Hash value for future usage."
                },
                "TextPobl211": {
                  "ja": "TXN2 CurrentTXN (base64)",
                  "en": "TXN2 CurrentTXN (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 5,
              "Languages": {
                "TextPobl16": {
                  "ja": "ステップ２－現在のTXNをデコードする",
                  "en": "Step 2 - Decode CurrentTXN"
                },
                "TextPobl17": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "TextPobl18": {
                  "ja": "Base64でエンコードされたCurrentTXNハッシュをデコード",
                  "en": "Decode the base64 encoded CurrentTXN Hash"
                },
                "TextPobl19": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "TextPobl20": {
                  "ja": "Base64でエンコードされたCurrentTXNハッシュの入力",
                  "en": "Input the base64 encoded CurrentTXN Hash"
                },
                "TextPobl21": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPobl22": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPobl23": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "TextPobl24": {
                  "ja": "デコードされたCurrentTXNハッシュの出力を得る",
                  "en": "Get the output of the decoded CurrentTXN Hash"
                },
                "TextPobl25": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "TextPobl26": {
                  "ja": "将来の使用のためにデコードされたCurrentTXNハッシュを保存",
                  "en": "Save the decoded CurrentTXN Hash for future usage"
                },
                "TextPobl27": {
                  "ja": "デコードされたCurrentTXNハッシュ",
                  "en": "Decoded CurrentTXN Hash"
                },
                "TextPobl226": {
                  "ja": "TXN2 CurrentTXN",
                  "en": "TXN2 CurrentTXN"
                },
                "TextPobl237": {
                  "ja": "CurrentTXN Hash",
                  "en": "CurrentTXN Hash"
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 6,
              "Languages": {
                "TextPobl250": {
                  "ja": "CurrentTXNハッシュの抽出",
                  "en": "Extract Merge Id Hash"
                },
                "TextPobl251": {
                  "ja": "トランザクションの詳細から、CurrentTXN Hash (base64 encoded)を選択",
                  "en": "Select the Merge ID Hash (base64 encoded) from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 7,
              "Languages": {
                "TextPobl252": {
                  "ja": "現在のTXNをハイライト表示",
                  "en": "Highlight the Merge ID"
                },
                "TextPobl253": {
                  "ja": "トランザクションの詳細からエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the  Merge Id  from the transaction details"
                },
                "TextPobl254": {
                  "ja": "MainTXNCurrentTXNHashをハイライト表示",
                  "en": "Highlight the Merge Id Hash"
                },
                "TextPobl255": {
                  "ja": "トランザクションの詳細からエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the encoded Merge Id Hash from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 8,
              "Languages": {
                "TextPobl256": {
                  "ja": "Base64エンコードされたCurrentTXNを保存",
                  "en": "Save Base64Encoded Merge Id"
                },
                "TextPobl257": {
                  "ja": "Base64でエンコードされたCurrentTXNハッシュ値を将来の使用のために保存",
                  "en": "Save the base64 encoded Merge Id Hash value for future usage."
                },
                "TextPobl258": {
                  "ja": "Merge Id (base64)",
                  "en": "Merge Id (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 9,
              "Languages": {
                "TextPobl259": {
                  "ja": "ステップ２－現在のTXNをデコードする",
                  "en": "Step 2 - Decode Merge Id"
                },
                "TextPobl260": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "TextPobl261": {
                  "ja": "Base64でエンコードされたCurrentTXNハッシュをデコード",
                  "en": "Decode the base64 encoded Merge Id Hash"
                },
                "TextPobl262": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "TextPobl263": {
                  "ja": "Base64でエンコードされたCurrentTXNハッシュの入力",
                  "en": "Input the base64 encoded Merge Id Hash"
                },
                "TextPobl264": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPobl265": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPobl266": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "TextPobl267": {
                  "ja": "デコードされたCurrentTXNハッシュの出力を得る",
                  "en": "Get the output of the decoded Merge Id Hash"
                },
                "TextPobl268": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "TextPobl269": {
                  "ja": "将来の使用のためにデコードされたCurrentTXNハッシュを保存",
                  "en": "Save the decoded Merge Id Hash for future usage"
                },
                "TextPobl270": {
                  "ja": "デコードされたCurrentTXNハッシュ",
                  "en": "Decoded Merge Id Hash"
                },
                "TextPobl271": {
                  "ja": "Merge Id",
                  "en": "Merge Id"
                }
              }
            },
            {
              "SegmentNo": segPobl + 3,
              "StepNo": numPobl + 10,
              "Languages": {
                "TextPobl28": {
                  "ja": "ステップ３－現在のトランザクションの取得",
                  "en": "Step 3 - Retrieve Current Transaction"
                },
                "TextPobl29": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar HorizonAPI"
                },
                "TextPobl30": {
                  "ja": "ゲートウェイトランザクションの現在のトランザクションをStellar Blockchainから取得",
                  "en": "Retrieve the current transaction of the gateway transaction from Stellar Blockchain."
                },
                "TextPobl31": {
                  "ja": "APIレスポンス保存",
                  "en": "Save API Response"
                },
                "TextPobl32": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "TextPobl33": {
                  "ja": "応答形式（JSON）",
                  "en": "Format Response (JSON)"
                },
                "TextPobl34": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 4,
              "StepNo": numPobl + 11,
              "Languages": {
                "TextPobl35": {
                  "ja": "Base64EncodedのIDを選択",
                  "en": "Select Base64Encoded Identifier"
                },
                "TextPobl36": {
                  "ja": "トランザクションの詳細から、エンコードされたIDを選択",
                  "en": "Select the encoded Identifier from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 4,
              "StepNo": numPobl + 12,
              "Languages": {
                "TextPobl37": {
                  "ja": "IDをハイライト表示",
                  "en": "Highlight the identifier"
                },
                "TextPobl38": {
                  "ja": "トランザクションの詳細からエンコードされたIDを選択",
                  "en": "Select the encoded identifier from the transaction details"
                },
                "TextPobl39": {
                  "ja": "MainTXNCurrentTXNDataIdentifierをハイライト表示",
                  "en": "Highlight the MainTXNCurrentTXNDataIdentifier"
                },
                "TextPobl40": {
                  "ja": "トランザクションの詳細から、エンコードされたIDの値を選択",
                  "en": "Select the encoded Identifier value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 4,
              "StepNo": numPobl + 13,
              "Languages": {
                "TextPobl41": {
                  "ja": "Base64EncodeされたIDの保存",
                  "en": "Save Base64Encoded Identifier"
                },
                "TextPobl42": {
                  "ja": "将来の使用のために、base64 エンコードされた ID 値を保存",
                  "en": "Save the base64 encoded Identifier value for future usage."
                },
                "TextPobl212": {
                  "ja": "ID(base64)",
                  "en": "Identifier (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 4,
              "StepNo": numPobl + 14,
              "Languages": {
                "TextPobl43": {
                  "ja": "ステップ４－MainTXN IDのデコード",
                  "en": "Step 4 - Decode MainTXN Identifier"
                },
                "TextPobl44": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "TextPobl45": {
                  "ja": "base64 でエンコードされた MainTXN IDをデコード",
                  "en": "Decode the base64 encoded MainTXN Identifier"
                },
                "TextPobl46": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "TextPobl47": {
                  "ja": "MainTXN IDを base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded MainTXN Identifier"
                },
                "TextPobl48": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPobl49": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPobl50": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "TextPobl51": {
                  "ja": "デコードされたMainTXNIDの出力を得る",
                  "en": "Get the output of the decoded MainTXN Identifier"
                },
                "TextPobl52": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "TextPobl53": {
                  "ja": "将来の使用のためにデコードされたMainTXNIDを保存",
                  "en": "Save the decoded MainTXN Identifier for future usage"
                },
                "TextPobl54": {
                  "ja": "デコードされたMainTXN　ID",
                  "en": "Decoded MainTXN Identifier"
                },
                "TextPobl227": {
                  "ja": "ID",
                  "en": "Identifier"
                },
                "TextPobl238": {
                  "ja": "MainTXN Identifier",
                  "en": "MainTXN Identifier"
                }
              }
            },
            {
              "SegmentNo": segPobl + 5,
              "StepNo": numPobl + 15,
              "Languages": {
                "TextPobl55": {
                  "ja": "Base64EncodedのProductIDを選択",
                  "en": "Select Base64Encoded ProductID"
                },
                "TextPobl56": {
                  "ja": "トランザクションの詳細から、エンコードされたプロダクトIDを選択",
                  "en": "Select the encoded Product ID from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 5,
              "StepNo": numPobl + 16,
              "Languages": {
                "TextPobl57": {
                  "ja": "productIdをハイライト表示",
                  "en": "Highlight the productId"
                },
                "TextPobl58": {
                  "ja": "トランザクションの詳細から、エンコードされたProductIDを選択",
                  "en": "Select the encoded ProductID from the transaction details"
                },
                "TextPobl59": {
                  "ja": "MainTXNCurentTXNDataProductIdをハイライト表示",
                  "en": "Highlight the MainTXNCurentTXNDataProductId"
                },
                "TextPobl40": {
                  "ja": "トランザクションの詳細から、エンコードされたProductIDの値を選択",
                  "en": "Select the encoded ProductID value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 5,
              "StepNo": numPobl + 17,
              "Languages": {
                "TextPobl60": {
                  "ja": "「Base64EncodedのProductIDを保存",
                  "en": "Save Base64Encoded ProductID"
                },
                "TextPobl61": {
                  "ja": "将来の使用のために、Base64 エンコードされた ProductID 値を保存",
                  "en": "Save the base64 encoded ProductID value for future usage."
                },
                "TextPobl213": {
                  "ja": "プロダクトID (base64)",
                  "en": "Product ID (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 5,
              "StepNo": numPobl + 18,
              "Languages": {
                "TextPobl62": {
                  "ja": "ステップー５ーMainTXN ProductIDのデコード",
                  "en": "Step 5 - Decode MainTXN ProductID"
                },
                "TextPobl63": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "TextPobl64": {
                  "ja": "MainTXN ProductIDをbase64エンコードしたものをデコード",
                  "en": "Decode the base64 encoded MainTXN ProductID"
                },
                "TextPobl65": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "TextPobl66": {
                  "ja": "Base64 でエンコードされた MainTXN ProductID を入力",
                  "en": "Input the base64 encoded MainTXN ProductID"
                },
                "TextPobl67": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPobl68": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPobl69": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "TextPobl70": {
                  "ja": "デコードされたMainTXNの出力を取得する ProductID",
                  "en": "Get the output of the decoded MainTXN ProductID"
                },
                "TextPobl71": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "TextPobl72": {
                  "ja": "デコードされたMainTXN ProductIDを将来の使用のために保存",
                  "en": "Save the decoded MainTXN ProductID for future usage"
                },
                "TextPobl73": {
                  "ja": "デコードされたMainTXN ProductID",
                  "en": "Decoded MainTXN ProductID"
                },
                "TextPobl228": {
                  "ja": "プロダクトID",
                  "en": "ProductID"
                },
                "TextPobl239": {
                  "ja": "Main TXN Product ID",
                  "en": "Main TXN Product ID"
                }
              }
            },
            {
              "SegmentNo": segPobl + 6,
              "StepNo": numPobl + 19,
              "Languages": {
                "TextPobl74": {
                  "ja": "Base64EncodedのPreviousTXNを選択",
                  "en": "Select Base64Encoded PreviousTXN"
                },
                "TextPobl75": {
                  "ja": "トランザクションの詳細から、エンコードされたPreviousTXN Hash値を選択",
                  "en": "Select the encoded PreviousTXN Hash value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 6,
              "StepNo": numPobl + 20,
              "Languages": {
                "TextPobl76": {
                  "ja": "前のTXNをハイライト表示",
                  "en": "Highlight the PreviousTXN"
                },
                "TextPobl77": {
                  "ja": "トランザクションの詳細から、エンコードされたPreviousTXNハッシュを選択",
                  "en": "Select the encoded PreviousTXN Hash from the transaction details."
                },
                "TextPobl78": {
                  "ja": "MainTXNPreviousTXNをハイライト表示",
                  "en": "Highlight the MainTXNPreviousTXN"
                },
                "TextPobl79": {
                  "ja": "トランザクションの詳細から、エンコードされたPreviousTXN Hash値を選択",
                  "en": "Select the encoded PreviousTXN Hash value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 6,
              "StepNo": numPobl + 21,
              "Languages": {
                "TextPobl80": {
                  "ja": "Base64Encoded で保存 PreviousTXN",
                  "en": "Save Base64Encoded PreviousTXN"
                },
                "TextPobl81": {
                  "ja": "将来の使用のためにBase64エンコードされたPrevious TXNハッシュ値を保存",
                  "en": "Save the base64 encoded Previous TXN Hash value for future usage."
                },
                "TextPobl214": {
                  "ja": "PreviousTXNハッシュ（base64）",
                  "en": "PreviousTXN Hash (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 6,
              "StepNo": numPobl + 22,
              "Languages": {
                "TextPobl82": {
                  "ja": "ステップ５ーMainTXN のデコード 前のハッシュ",
                  "en": "Step 5 - Decode MainTXN Previous hash"
                },
                "TextPobl83": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "TextPobl84": {
                  "ja": "base64 でエンコードされた MainTXN の前ハッシュをデコード",
                  "en": "Decode the base64 encoded MainTXN Previous hash"
                },
                "TextPobl85": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "TextPobl86": {
                  "ja": "MainTXN の前ハッシュを base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded MainTXN Previous hash"
                },
                "TextPobl87": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPobl88": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPobl89": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "TextPobl90": {
                  "ja": "デコードされたMainTXNの出力を取得する 前のハッシュ",
                  "en": "Get the output of the decoded MainTXN Previous hash"
                },
                "TextPobl91": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "TextPobl92": {
                  "ja": "将来の使用のためにデコードされたMainTXN前のハッシュを保存",
                  "en": "Save the decoded MainTXN Previous hash for future usage"
                },
                "TextPobl93": {
                  "ja": "デコードされたMainTXN 前のハッシュ",
                  "en": "Decoded MainTXN Previous hash"
                },
                "TextPobl229": {
                  "ja": "前のTXNハッシュ",
                  "en": "PreviousTXN Hash"
                },
                "TextPobl240": {
                  "ja": "Main TXN Previous hash",
                  "en": "Main TXN Previous hash"
                }
              }
            },
            {
              "SegmentNo": segPobl + 7,
              "StepNo": numPobl + 23,
              "Languages": {
                "TextPobl94": {
                  "ja": "ステップ７－バックリンクのトランザクションを取得",
                  "en": "Step 7 - Retrieve Backlink Transaction"
                },
                "TextPobl95": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar HorizonAPI"
                },
                "TextPobl96": {
                  "ja": "ステラブロックチェーンからBackLinkトランザクションを取得",
                  "en": "Retrieve the BackLink transaction from Stellar Blockchain."
                },
                "TextPobl97": {
                  "ja": "APIレスポンス保存",
                  "en": "Save API Response"
                },
                "TextPobl98": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "TextPobl99": {
                  "ja": "応答形式（JSON）",
                  "en": "Format Response (JSON)"
                },
                "TextPobl100": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 8,
              "StepNo": numPobl + 24,
              "Languages": {
                "TextPobl101": {
                  "ja": "Base64EncodedのCurrentTXNを選択",
                  "en": "Select Base64Encoded CurrentTXN"
                },
                "TextPobl102": {
                  "ja": "トランザクションの詳細から、BacklinkトランザクションのエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the encoded CurrentTXN Hash of the Backlink transaction from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 8,
              "StepNo": numPobl + 25,
              "Languages": {
                "TextPobl103": {
                  "ja": "現在のTXNをハイライト表示",
                  "en": "Highlight the CurrentTXN"
                },
                "TextPobl104": {
                  "ja": "トランザクションの詳細から、BacklinkトランザクションのエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the encoded CurrentTXN Hash of the Backlink transaction from the transaction details."
                },
                "TextPobl105": {
                  "ja": "MainTXNPreviousTXNCurrentTXNHashをハイライト表示",
                  "en": "Highlight the MainTXNPreviousTXNCurrentTXNHash"
                },
                "TextPobl106": {
                  "ja": "トランザクションの詳細から、BacklinkトランザクションのエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the encoded CurrentTXN Hash of the Backlink transaction from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 8,
              "StepNo": numPobl + 26,
              "Languages": {
                "TextPobl107": {
                  "ja": "Base64エンコードされたCurrentTXNを保存",
                  "en": "Save Base64Encoded CurrentTXN"
                },
                "TextPobl108": {
                  "ja": "将来使用のためにPreviuos TXN を base64 でエンコードした CurrentTXN Hash 値を保存",
                  "en": "Save the base64 encoded CurrentTXN Hash value of the Previuos TXN for future usage."
                },
                "TextPobl216": {
                  "ja": "CurentTXNHash (base64)",
                  "en": "CurentTXNHash (base64)"
                },
                "TextPobl215": {
                  "ja": "Expected Backlink Hash",
                  "en": "Expected Backlink Hash"
                }
              }
            },
            {
              "SegmentNo": segPobl + 8,
              "StepNo": numPobl + 27,
              "Languages": {
                "TextPobl109": {
                  "ja": "ステップ９ーデコード PreviousTXN CurentTXN ハッシュ",
                  "en": "Step 9 - Decode PreviousTXN CurentTXN Hash"
                },
                "TextPobl110": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "TextPobl111": {
                  "ja": "base64 でエンコードされた MainTXN IDをデコード",
                  "en": "Decode the base64 encoded MainTXN Identifier"
                },
                "TextPobl112": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "TextPobl113": {
                  "ja": "MainTXN IDを base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded MainTXN Identifier"
                },
                "TextPobl114": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPobl115": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPobl116": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "TextPobl117": {
                  "ja": "デコードされたMainTXNIDの出力を得る",
                  "en": "Get the output of the decoded MainTXN Identifier"
                },
                "TextPobl118": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "TextPobl119": {
                  "ja": "将来の使用のためにデコードされたMainTXNIDを保存",
                  "en": "Save the decoded MainTXN Identifier for future usage"
                },
                "TextPobl120": {
                  "ja": "デコードされたMainTXN　ID",
                  "en": "Decoded MainTXN Identifier"
                },
                "TextPobl230": {
                  "ja": "現在のTXNHash",
                  "en": "CurrentTXNHash"
                },
                "TextPobl241": {
                  "ja": "Main TXN Identifier",
                  "en": "Main TXN Identifier"
                }
              }
            },
            {
              "SegmentNo": segPobl + 9,
              "StepNo": numPobl + 28,
              "Languages": {
                "TextPobl121": {
                  "ja": "ステップ１０－バックリンクの現在のトランザクションを取得",
                  "en": "Step 10 - Retrieve Backlink Current Transaction"
                },
                "TextPobl122": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar HorizonAPI"
                },
                "TextPobl123": {
                  "ja": "バックリンクトランザクションの現在のトランザクシ内容をStellar Blockchainから取得",
                  "en": "Retrieve the current transaction of the backlink transaction from Stellar Blockchain"
                },
                "TextPobl124": {
                  "ja": "APIレスポンス保存",
                  "en": "Save API Response"
                },
                "TextPobl125": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "TextPobl126": {
                  "ja": "応答形式（JSON）",
                  "en": "Format Response (JSON)"
                },
                "TextPobl127": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 10,
              "StepNo": numPobl + 29,
              "Languages": {
                "TextPobl128": {
                  "ja": "Base64EncodedのIDを選択",
                  "en": "Select Base64Encoded Identifier"
                },
                "TextPobl129": {
                  "ja": "トランザクションの詳細から、エンコードされたIDを選択",
                  "en": "Select the encoded Identifier from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 10,
              "StepNo": numPobl + 30,
              "Languages": {
                "TextPobl130": {
                  "ja": "IDをハイライト表示",
                  "en": "Highlight the identifier"
                },
                "TextPobl131": {
                  "ja": "トランザクションの詳細からエンコードされた識別子を選択",
                  "en": "Select the encoded Identifier from the transaction details"
                },
                "TextPobl132": {
                  "ja": "MainTXNPreviousTXNCurrentTXNDataIdentifier をハイライト表示",
                  "en": "Highlight the MainTXNPreviousTXNCurrentTXNDataIdentifier"
                },
                "TextPobl133": {
                  "ja": "トランザクションの詳細から、エンコードされたIDの値を選択",
                  "en": "Select the encoded Identifier value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 10,
              "StepNo": numPobl + 31,
              "Languages": {
                "TextPobl134": {
                  "ja": "Base64EncodeされたIDの保存",
                  "en": "Save Base64Encoded Identifier"
                },
                "TextPobl135": {
                  "ja": "将来の使用のために、Base64 でエンコードされた PreviousTX の Identifier 値を保存",
                  "en": "Save the base64 encoded Identifier value of the PreviousTX for future usage."
                },
                "TextPobl217": {
                  "ja": "ID(base64)",
                  "en": "Identifier (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 10,
              "StepNo": numPobl + 32,
              "Languages": {
                "TextPobl136": {
                  "ja": "ステップ１１－PreviousTXN の CurrentTXN のIDをデコード",
                  "en": "Step 11 - Decode PreviousTXN's CurrentTXN's Identifier"
                },
                "TextPobl137": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "TextPobl138": {
                  "ja": "Base64 でエンコードされた PreviousTXN と CurrentTXNの ID をデコード",
                  "en": "Decode the base64 encoded PreviousTXN's CurrentTXN' Identifier"
                },
                "TextPobl139": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "TextPobl140": {
                  "ja": "PreviousTXNとCurrentTXNのID を base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded PreviousTXN's CurrentTXN' Identifier"
                },
                "TextPobl141": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPobl142": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPobl143": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "TextPobl144": {
                  "ja": "PreviousTXNとCurrentTXNのIDをエンコードした出力を取得",
                  "en": "Get the output of the decoded PreviousTXN's CurrentTXN' Identifier"
                },
                "TextPobl145": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "TextPobl146": {
                  "ja": "将来使用のデコードされたPreviousTXNとCurrentTXNのID保存する",
                  "en": "Save the decoded PreviousTXN's CurrentTXN' Identifier for future usage"
                },
                "TextPobl147": {
                  "ja": "デコードされたPreTXNとCurrentTXNのID",
                  "en": "Decoded PreviousTXN's CurrentTXN' Identifier"
                },
                "TextPobl231": {
                  "ja": "デコードされたPreviousTXNとCurrentTXNのID",
                  "en": "Decoded PreviousTXN's CurrentTXN' Identifier"
                },
                "TextPobl242": {
                  "ja": "PreviousTXN の CurrentTXN' 識別子",
                  "en": "Previous TXN's CurrentTXN' Identifier"
                }
              }
            },
            {
              "SegmentNo": segPobl + 11,
              "StepNo": numPobl + 33,
              "Languages": {
                "TextPobl148": {
                  "ja": "Base64EncodedのProductIDを選択",
                  "en": "Select Base64Encoded ProductID"
                },
                "TextPobl149": {
                  "ja": "トランザクションの詳細から、エンコードされたプロダクトIDを選択",
                  "en": "Select the encoded Product ID from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 11,
              "StepNo": numPobl + 34,
              "Languages": {
                "TextPobl150": {
                  "ja": "productIdをハイライト表示",
                  "en": "Highlight the productId"
                },
                "TextPobl151": {
                  "ja": "トランザクションの詳細から、エンコードされたProductIDを選択",
                  "en": "Select the encoded ProductID from the transaction details"
                },
                "TextPobl152": {
                  "ja": "MainTXNPreviousTXNCurrentTXNDataProductIDをハイライト表示",
                  "en": "Highlight the MainTXNPreviousTXNCurrentTXNDataProductID"
                },
                "TextPobl153": {
                  "ja": "トランザクションの詳細から、エンコードされたProductIDの値を選択",
                  "en": "Select the encoded ProductID value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 11,
              "StepNo": numPobl + 35,
              "Languages": {
                "TextPobl154": {
                  "ja": "「Base64EncodedのProductIDを保存",
                  "en": "Save Base64Encoded ProductID"
                },
                "TextPobl155": {
                  "ja": "将来の使用のために、Base64 エンコードされた ProductID 値を保存",
                  "en": "Save the base64 encoded ProductID value for future usage."
                },
                "TextPobl218": {
                  "ja": "プロダクトID (base64)",
                  "en": "Product ID (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 11,
              "StepNo": numPobl + 36,
              "Languages": {
                "TextPobl156": {
                  "ja": "ステップ１２－PreviousTXNとCurrentTXN の ProductID をデコード",
                  "en": "Step 12 - Decode PreviousTXN's CurrentTXN's ProductID"
                },
                "TextPobl157": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "TextPobl158": {
                  "ja": "Base64 でエンコードされた PreviousTXNとCurrentTXN の ProductID をデコード",
                  "en": "Decode the base64 encoded PreviousTXN's CurrentTXN's ProductID"
                },
                "TextPobl159": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "TextPobl160": {
                  "ja": "PreviousTXNとCurrentTXNのProductID を base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded PreviousTXN's CurrentTXN's ProductID"
                },
                "TextPobl161": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPobl162": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPobl163": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "TextPobl164": {
                  "ja": "PreviousTXNとCurrentTXNのProductID をデコードした出力を取得",
                  "en": "Get the output of the decoded PreviousTXN's CurrentTXN's ProductID"
                },
                "TextPobl165": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "TextPobl166": {
                  "ja": "将来使用のためにデコードされたPreviousTXNとCurrentTXNのProductIDを保存",
                  "en": "Save the decoded PreviousTXN's CurrentTXN's ProductID for future usage"
                },
                "TextPobl167": {
                  "ja": "デコードされたPreviousTXNのCurrentTXNのProductID",
                  "en": "Decoded PreviousTXN's CurrentTXN's ProductID"
                },
                "TextPobl232": {
                  "ja": "プロダクトID",
                  "en": "ProductID"
                },
                "TextPobl245": {
                  "ja": "PreviousTXN の CurrentTXN の ProductID",
                  "en": "Previous TXN's CurrentTXN's ProductID"
                }
              }
            },
            {
              "SegmentNo": segPobl + 12,
              "StepNo": numPobl + 37,
              "Languages": {
                "TextPobl168": {
                  "ja": "ステップ１３－",
                  "en": "Step 13 - base64でエンコードしたIDを比較"
                },
                "TextPobl169": {
                  "ja": "オンラインテキスト比較Webページ",
                  "en": "Online TextComparison Webpage"
                },
                "TextPobl170": {
                  "ja": "オンラインテキスト比較のウェブページを読み込む",
                  "en": "Load the online text comparison webpage"
                },
                "TextPobl171": {
                  "ja": "入力の比較値",
                  "en": "Input comparison values"
                },
                "TextPobl172": {
                  "ja": "トランザクションからBase64デコードされたIDの値を入力",
                  "en": "Input the base64 decoded Identifier values from the transactions."
                },
                "TextPobl173": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click compare button"
                },
                "TextPobl174": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "TextPobl175": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to result"
                },
                "TextPobl176": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "TextPobl177": {
                  "ja": "比較結果",
                  "en": "Comparison result."
                }
              }
            },
            {
              "SegmentNo": segPobl + 13,
              "StepNo": numPobl + 38,
              "Languages": {
                "TextPobl168": {
                  "ja": "ステップ１３－",
                  "en": "Step 13 - base64でエンコードしたIDを比較"
                },
                "TextPobl169": {
                  "ja": "オンラインテキスト比較Webページ",
                  "en": "Online TextComparison Webpage"
                },
                "TextPobl170": {
                  "ja": "オンラインテキスト比較のウェブページを読み込む",
                  "en": "Load the online text comparison webpage"
                },
                "TextPobl171": {
                  "ja": "入力の比較値",
                  "en": "Input comparison values"
                },
                "TextPobl172": {
                  "ja": "トランザクションからBase64デコードされたIDの値を入力",
                  "en": "Input the base64 decoded Identifier values from the transactions."
                },
                "TextPobl173": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click compare button"
                },
                "TextPobl174": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "TextPobl175": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to result"
                },
                "TextPobl176": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "TextPobl177": {
                  "ja": "比較結果",
                  "en": "Comparison result."
                }
              }
            },
            {
              "SegmentNo": segPobl + 14,
              "StepNo": numPobl + 39,
              "Languages": {
                "TextPobl178": {
                  "ja": "ステップ１４－検証概要",
                  "en": "Step 14 - Verification Summary"
                },
                "TextPobl179": {
                  "ja": "検証概要",
                  "en": "Verification Summary"
                },
                "TextPobl235": {
                  "ja": "検証は正常に終了",
                  "en": "Verification Completed Successfully"
                },
                "TextPobl181": {
                  "ja": "検証の概要 - PROOF OF THE BACKLINK",
                  "en": "about: Verification Summary - PROOF OF THE BACKLINK"
                }
              }
            }
          ]
          this.pocProofJson.Header.Segments.push(...poblSegments)
          this.pocProofJson.Steps.push(...poblSteps)
          this.pocLangJson.Actions.push(...poblLang)
          segPobl = segPobl + 14
          numPobl = numPobl + 39
          break;
        default:
          break;
      }
    })
    let segPocSummary = this.pocProofJson.Header.Segments[this.pocProofJson.Header.Segments.length - 1].NO
    let POCSummaryNo = this.pocProofJson.Steps[this.pocProofJson.Steps.length - 1].StepHeader.StepNo
    let pocSummarySegment = [
      {
        "NO": segPocSummary + 1,
        "Name": "&{SegName30}",
        "Source": ""
      }
    ]
    let POCSummaryStep = [
      {
        "StepHeader": {
          "StepNo": POCSummaryNo + 1,
          "SegmentNo": segPocSummary + 1,
          "FrameID": 13,
          "FrameTitle": "&{TextPoc178}"
        },
        "Action": {
          "ActionTitle": "&{TextPoc179}",
          "ActionDescription": "&{TextPoc179}",
          "ActionType": "BrowserScreen",
          "ActionParameters": {
            "ExternalURL": "",
            "InnerHTMLPOC": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/checked.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#098260; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Completed Successfully!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF CONTINUITY</b></center></p></div></center></div></div><div class=\"p-2\"></div></div></body></html>",
            "InnerHTMLPOCError": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/cancel.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#F15249; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Failed!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF CONTINUITY</b></center></p></div></center></div></div><div class=\"p-2\"></div></div></body></html>",
            "InnerHTMLPOCNotCompelete": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/cancel.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#F15249; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Not Yet Completed!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF CONTINUITY</b></center></p></div></center></div></div><div class=\"p-2\"></div></div></body></html>",
            "PageURL": "&{TextPoc181}",
            "Query": "",
            "QueryIndex": "",
            "YOffset": "",
            "XOffset": "",
            "ElAttributeName": "",
            "ElAttributeValue": "",
            "ElAttributeValueReplace": "",
            "ElProperty": "",
            "ElPropertyValue": "",
            "ElFunction": "",
            "ElFunctionArguments": "",
            "SelectiveText": "",
            "CaseSensitivity": "",
            "SelectiveTextIndex": "",
            "CSS": "",
            "FormatType": "",
            "StorageData": [{
              "CompareType":"POC"
            }
            ],
            "Compare":{
              "t1":"POCEND"
            }
          },
          "ActionResultVariable": "",
          "MetaData": []
        },
        "Customizations": {
          "PointerData": "",
          "ScrollToPointer": false,
          "FrameAutoScroll": true,
          "FrameScrollBars": "",
          "ToastMessage1": "&{TextPoc235}",
          "ToastPosition1": [
            "6%",
            "80%"
          ],
          "ActionDuration": 10
        }
      }
    ]
    let PocSummaryLang = [
      {
        "SegmentNo": segPocSummary + 1,
        "StepNo": POCSummaryNo + 1,
        "Languages": {
          "TextPoc178": {
            "ja": "ステップ１４－検証概要",
            "en": "Step 14 - Verification Summary"
          },
          "TextPoc179": {
            "ja": "検証概要",
            "en": "Verification Summary"
          },
          "TextPoc235": {
            "ja": "検証は正常に終了",
            "en": "Verification Completed Successfully"
          },
          "TextPoc181": {
            "ja": "検証の概要 - PROOF OF THE BACKLINK",
            "en": "about: Verification Summary - PROOF OF THE BACKLINK"
          }
        }
      }
    ]
    this.pocProofJson.Header.Segments.push(...pocSummarySegment)
    this.pocProofJson.Steps.push(...POCSummaryStep)
    this.pocLangJson.Actions.push(...PocSummaryLang)
    segPocSummary = segPocSummary + 1
    POCSummaryNo = POCSummaryNo + 1
    let pocResponse = {
      pocLangJson: this.pocLangJson,
      pocProofJson: this.pocProofJson
    }
    return pocResponse
  }

  async createPOCOrder(pocNode): Promise<any> {
    const txnHash = pocNode.TxnHash; // Get the TxnHash value to search for
    // Iterate over the keys (node IDs) in the Nodes object
    for (const nodeId in pocNode.Nodes) {
      const node = pocNode.Nodes[nodeId]; // Get the node object for this ID
      const trustLinks = node.TrustLinks || []; // Get the TrustLinks array, or an empty array if it's null
      const parents = node.Parents || [];
      // Check if the TrustLinks array contains the desired TxnHash value
      if (trustLinks.includes(txnHash)) {
        if (this.orderedNodes.includes(pocNode.Nodes[nodeId])) {
        } else {
          if (node.Data.TxnType == '0' || node.Data.TxnType == '2') {
            this.orderedNodes.push(pocNode.Nodes[nodeId]); // If so, add the LastTxnHash value to the orderedNodes array
            // loop through the parents 
          }

        }

        await this.checkParentsAndPush(pocNode, parents, trustLinks[0], node.Id)
      }
    }
    
    this.TotalProofCount= this.orderedNodes.length;
    return new Promise((resolve, reject) => { resolve(this.orderedNodes) })
  }

  async checkParentsAndPush(pocNode: any, parents: string[], trustLink: any, id: string) {
    if (!!parents && parents.length !== 0) {
      for (const parent of parents) {
        for (const nodeId in pocNode.Nodes) {
          if (nodeId === parent) {
            const node = pocNode.Nodes[nodeId]; // Get the node object for this ID
            const trustLinks = node.TrustLinks || []; // Get the TrustLinks array, or an empty array if it's null
            const existingBacklink = this.findExistingBacklink(id, parent);
            if (!existingBacklink) {
              const backLinkNode = {
                "Id": "backlink",
                "Data": {
                  "TxnType": "pobl",
                  "Identifier":pocNode.Nodes[id].Data.Identifier,
                  "Batch": pocNode.Nodes[id].Data.ProductName,
                  "Stage":pocNode.Nodes[id].Data.CurrentStage,
                  "Identifier2":pocNode.Nodes[parent].Data.Identifier,
                  "Batch2": pocNode.Nodes[parent].Data.ProductName,
                  "Stage2":pocNode.Nodes[parent].Data.CurrentStage,
                  "TXNTypeNo":pocNode.Nodes[id].Data.TxnType 
                },
                "Parents": null,
                "Children": null,
                "Siblings": null,
                "TrustLinks": [trustLink, trustLinks[0]],
                "PoblTDP": { current: id, previous: parent }
              };
              
              if (!this.orderedNodes.includes(backLinkNode)) {
                this.orderedNodes.push(backLinkNode);
              }
            }
            
            if (!this.orderedNodes.includes(node)) {
              if(node.Data.TxnType=='0'||node.Data.TxnType=='2'){
                this.orderedNodes.push(node);
              }}
            
            if (!!node.Parents && node.Parents.length !== 0) {
              await this.checkParentsAndPush(pocNode, node.Parents, trustLinks[0], nodeId);
            
            }
          }
        }
      }
    }
  }
  
  findExistingBacklink(currentId: string, previousId: string): any {
    for (const node of this.orderedNodes) {
      if (node.Id === "backlink" && node.PoblTDP.current === currentId && node.PoblTDP.previous === previousId) {
        return node;
      }
    }
    return null;
  }

  getTotalOrderedNodesCount(): number {
    return this.orderedNodes.length;
  }
  
  getAlltheProofsOPOC(): any{
    const allproofs: any[] = this.orderedNodes.map((proof) => {
      if (proof.Data.TxnType == "pobl") {
        return {
          ProofType: this.commonServices.getProofName(proof.Data.TxnType),
          ID:`arrow-`+ proof.PoblTDP.current+`-`+ proof.PoblTDP.previous,
          BatchID:proof.Data.Identifier,
          Batch:this.commonServices.decodeFromBase64(proof.Data.Batch),
          Stage:proof.Data.Stage,
          BatchID2:proof.Data.Identifier2,
          Batch2:this.commonServices.decodeFromBase64(proof.Data.Batch2),
          Stage2:proof.Data.Stage2,
          TransactionType:this.commonServices.getTransactionByType(proof.Data.TXNTypeNo)
        };
      } else {
        return {
          ProofType: this.commonServices.getProofNameByType(proof.Data.TxnType),
          ID: `node-`+ proof.Data.TxnHash,
          BatchID:proof.Data.Identifier,
          Batch: this.commonServices.decodeFromBase64(proof.Data.ProductName),
          Stage:proof.Data.CurrentStage,
          TransactionType:this.commonServices.getTransactionByType(proof.Data.TXNTypeNo)
        };
      }
    });
    return allproofs;
  }
  getObjectById(id: string, arr: any[]): any | null {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].Id === id) {
        return arr[i];
      }
    }
    return null; // Return null if no matching object is found
  }

  extractSteps(jsonData: any, startStepNo: number, endStepNo: number): any[] {
    const steps = jsonData.Steps;
    const starts = jsonData.Steps[startStepNo].StepHeader.StepNo;
    const ends = jsonData.Steps[endStepNo].StepHeader.StepNo;
    const extractedSteps = [];

    for (const step of steps) {
      const stepNo = step.StepHeader.StepNo;
      if (stepNo >= starts && stepNo <= ends) {
        extractedSteps.push(step);
      }
    }
    return extractedSteps;
  }
}
