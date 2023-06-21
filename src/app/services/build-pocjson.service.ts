import { ComponentRef, Injectable } from '@angular/core';
import { PocGraphViewComponent } from '../features/proof-verification/components/poc-graph-view/poc-graph-view.component';

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
        "ja": "ブロックチェーントランザクションを取得",
        "en": "Retrieve blockchain transaction"
      },
      "SegName12": {
        "ja": "Current TXN ハッシュのデコード",
        "en": "Decode Current TXN Hash"
      },
      "SegName13": {
        "ja": "ブロックチェーンCurrent TXNの取得",
        "en": "Retrieve blockchain Current TXN"
      },
      "SegName14": {
        "ja": "比較",
        "en": "Comparison"
      },
      "SegName15": {
        "ja": "概要",
        "en": "POE Summary"
      },
      "SegName16": {
        "ja": "ステラ・トランザクションを取得",
        "en": "GET Stellar Transaction"
      },
      "SegName17": {
        "ja": "現在のTXNHashをデコード",
        "en": "Decode Current TXN Hash and Merge ID"
      },
      "SegName18": {
        "ja": "現在のトランザクションを取得",
        "en": "GET Current Transaction"
      },
      "SegName19": {
        "ja": "IDを解読",
        "en": "Decode Identifier"
      },
      "SegName20": {
        "ja": "プロダクトIDを解読",
        "en": "Decode Product ID"
      },
      "SegName21": {
        "ja": "バックリンクTXNHashの解読",
        "en": "Decode Backlink TXNHash"
      },
      "SegName22": {
        "ja": "バックリンクトランザクションの取得",
        "en": "GET Backlink Transaction"
      },
      "SegName23": {
        "ja": "現在のトランザクションのデコード",
        "en": "Decode Current Transaction"
      },
      "SegName24": {
        "ja": "現在のトランザクションを取得",
        "en": "GET Current Transaction"
      },
      "SegName25": {
        "ja": "IDをデコード",
        "en": "Decode Identifier"
      },
      "SegName26": {
        "ja": "プロダクトIDを解読",
        "en": "Decode Product ID"
      },
      "SegName27": {
        "ja": "比較",
        "en": "Comparison"
      },
      "SegName28": {
        "ja": "比較",
        "en": "Comparison"
      },
      "SegName29": {
        "ja": "概要",
        "en": "Summary"
      },
      "SegName30": {
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
  constructor() { }

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
                "FrameTitle": "&{TextPog102}"
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
          let variabelofPoe = 1;
          let poeSegments = [
            {
              "NO": segPoe + 1,
              "Name": "&{SegName10}",
              "Source": "../../../../assets/img/database.png"
            },
            {
              "NO": segPoe + 2,
              "Name": "&{SegName11}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPoe + 3,
              "Name": "&{SegName12}",
              "Source": ""
            },
            {
              "NO": segPoe + 4,
              "Name": "&{SegName13}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPoe + 5,
              "Name": "&{SegName14}",
              "Source": ""
            },
            {
              "NO": segPoe + 6,
              "Name": "&{SegName15}",
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
                    "FrameTitle": "&{TextPoe0}",
                    "ActionTitle": "&{TextPoe149}",
                    "ActionDescription": "&{TextPoe2}",
                    "PathID":`poe-${node.Id}`,
                    "FrameTitle_1": "&{TextPoe3}",
                    "ActionTitle_1": "&{TextPoe4}",
                    "ActionDescription_1": "&{TextPoe5}",
                    "FrameTitle_2": "&{TextPoe6}",
                    "ActionTitle_2": "&{TextPoe7}",
                    "ActionDescription_2": "&{TextPoe8}",
                    "TXNHash": node.TrustLinks[0],
                    "OperationName": "&{TextPoe1}",
                    "ResponseVariable": `MainTDPDataStringPOE${variabelofPoe}`,
                    "JSONResultVariable": `MainTDPDataPOE${variabelofPoe}`,
                    "StartedProofType": "POE",
                    "TrustLinks": [node.Id],
                  },
                },
                "ActionResultVariable": "",
                "MetaData": [],
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
                "ActionTitle": "&{TextPoe9}",
                "ActionDescription": "&{TextPoe10}",
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
                "ActionResultVariable": `TDPIdentifierPOE${variabelofPoe}`,
                "MetaData": [
                  `MainTDPDataPOE${variabelofPoe}`,
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
                    "ActionTitle": "&{TextPoe12}",
                    "ActionDescription": "&{TextPoe13}",
                    "FrameTitle_1": "&{TextPoe14}",
                    "ActionTitle_1": "&{TextPoe15}",
                    "ActionDescription_1": "&{TextPoe16}",
                    "OperationKey": "Identifier",
                    "OperationValue": `TDPIdentifierPOE${variabelofPoe}`,
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
                "StepNo": numPoe + 4,
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPoe17}",
                "ActionDescription": "&{TextPoe18}",
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
                      "Key": "&{TextPoe205}",
                      "Value": `\${TDPIdentifierPOE${variabelofPoe}}`
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
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPoe20}",
                "ActionDescription": "&{TextPoe21}",
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
                "ActionResultVariable": `TDPDatahashPOE${variabelofPoe}`,
                "MetaData": [
                  `MainTDPDataPOE${variabelofPoe}`,
                  "DataHash"
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
                    "ActionTitle": "&{TextPoe23}",
                    "ActionDescription": "&{TextPoe24}",
                    "FrameTitle_1": "&{TextPoe25}",
                    "ActionTitle_1": "&{TextPoe26}",
                    "ActionDescription_1": "&{TextPoe27}",
                    "OperationKey": "DataHash",
                    "OperationValue": `TDPDatahashPOE${variabelofPoe}`,
                    "OperationKeyName": "Datahash from the Traceability Data details",
                    "OperationValueName": "Datahash from the Traceability Data details"
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
                "ActionTitle": "&{TextPoe28}",
                "ActionDescription": "&{TextPoe29}",
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
                      "Key": "&{TextPoe206}",
                      "Value": `\${TDPDatahashPOE${variabelofPoe}}`,
                      "CompareType": "notEmpty",
                      "CompareValue": "",
                      "Error": "Cannot find the datahash from Tracifed for the given transaction"
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
                "SegmentNo": segPoe + 2,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPoe31}",
                "ActionDescription": "&{TextPoe32}",
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
                "ActionResultVariable": `TDPTxnhashPOE${variabelofPoe}`,
                "MetaData": [
                  `MainTDPDataPOE${variabelofPoe}`,
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
                "SegmentNo": segPoe + 2,
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
                    "SegmentNo": segPoe + 2,
                    "FrameID": 1,
                    "ActionTitle": "&{TextPoe34}",
                    "ActionDescription": "&{TextPoe35}",
                    "ActionTitle_1": "&{TextPoe37}",
                    "ActionDescription_1": "&{TextPoe38}",
                    "OperationKey": "Txnhash",
                    "OperationValue": `TDPTxnhashPOE${variabelofPoe}`,
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
                "SegmentNo": segPoe + 2,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPoe39}",
                "ActionDescription": "&{TextPoe40}",
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
                      "Key": "&{TextPoe207}",
                      "Value": `\${TDPTxnhashPOE${variabelofPoe}}`
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
                "SegmentNo": segPoe + 2,
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
                    "StepNo": numPoe + 11,
                    "SegmentNo": segPoe + 2,
                    "FrameID": 2,
                    "FrameTitle": "&{TextPoe42}",
                    "ActionTitle": "&{TextPoe43}",
                    "ActionDescription": "&{TextPoe44}",
                    "PathID":"",
                    "ActionTitle_1": "&{TextPoe45}",
                    "ActionDescription_1": "&{TextPoe46}",
                    "SegmentSource_1": "../../../../assets/img/blockchain2.png",
                    "ActionTitle_2": "&{TextPoe47}",
                    "ActionDescription_2": "&{TextPoe48}",
                    "SegmentSource_2": "../../../../assets/img/blockchain2.png",
                    "TXNHash": node.TrustLinks[0],
                    "ResponseVariable": `MainTXNDataStringPOE${variabelofPoe}`,
                    "OperationName": "current transaction",
                    "JSONResultVariable": `MainTXNDataPOE${variabelofPoe}`,
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
                "StepNo": numPoe + 12,
                "SegmentNo": segPoe + 2,
                "FrameID": 2,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPoe49}",
                "ActionDescription": "&{TextPoe50}",
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
                "ActionResultVariable": `MainTXNCurentTXNHashPOE${variabelofPoe}`,
                "MetaData": [
                  `MainTXNDataPOE${variabelofPoe}`,
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
                "StepNo": numPoe + 13,
                "SegmentNo": segPoe + 2,
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
                    "StepNo": numPoe + 13,
                    "SegmentNo": segPoe + 2,
                    "FrameID": 2,
                    "ActionTitle": "&{TextPoe51}",
                    "ActionDescription": "&{TextPoe52}",
                    "ActionTitle_1": "&{TextPoe53}",
                    "ActionDescription_1": "&{TextPoe54}",
                    "OperationKey": "CurrentTXN",
                    "OperationValue": `MainTXNCurentTXNHashPOE${variabelofPoe}`,
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
                "StepNo": numPoe + 14,
                "SegmentNo": segPoe + 3,
                "FrameID": 2,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPoe55}",
                "ActionDescription": "&{TextPoe56}",
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
                      "Key": "&{TextPoe208}",
                      "Value": `\${MainTXNCurentTXNHashPOE${variabelofPoe}}`
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
                "StepNo": numPoe + 15,
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
                    "StepNo": numPoe + 15,
                    "SegmentNo": segPoe + 3,
                    "FrameID": 3,
                    "FrameTitle": "&{TextPoe58}",
                    "ActionTitle": "&{TextPoe59}",
                    "ActionDescription": "&{TextPoe60}",
                    "ActionTitle_1": "&{TextPoe61}",
                    "ActionDescription_1": "&{TextPoe62}",
                    "ActionTitle_2": "&{TextPoe63}",
                    "ActionDescription_2": "&{TextPoe64}",
                    "ActionTitle_3": "&{TextPoe65}",
                    "ActionDescription_3": "&{TextPoe66}",
                    "ActionTitle_4": "&{TextPoe67}",
                    "ActionDescription_4": "&{TextPoe68}",
                    "InformationStorageKey": "&{TextPoe223}",
                    "ToastMessage": "&{TextPoe70}",
                    "EncodedInputValue": `\${MainTXNCurentTXNHashPOE${variabelofPoe}}`,
                    "DecodedResultVariable": `var_currenttxnPOE${variabelofPoe}`
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
                "SegmentNo": segPoe + 4,
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
                    "StepNo": numPoe + 16,
                    "SegmentNo": segPoe + 4,
                    "FrameID": 4,
                    "ActionTitle": "&{TextPoe73}",
                    "ActionDescription": "&{TextPoe74}",
                    "PathID":"",
                    "ActionTitle_1": "&{TextPoe76}",
                    "ActionDescription_1": "&{TextPoe77}",
                    "SegmentSource_1": "../../../../assets/img/blockchain2.png",
                    "ActionTitle_2": "&{TextPoe125}",
                    "ActionDescription_2": "&{TextPoe125}",
                    "SegmentSource_2": "../../../../assets/img/blockchain2.png",
                    "FrameTitle": "&{TextPoe71}",
                    "TXNHash": `\${var_currenttxnPOE${variabelofPoe}}`,
                    "OperationName": "&{TextPoe72}",
                    "ResponseVariable": `MainTXNCurentTXNDataStringPOE${variabelofPoe}`,
                    "JSONResultVariable": `MainTXNCurentTXNDataPOE${variabelofPoe}`,
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
                "StepNo": numPoe + 17,
                "SegmentNo": segPoe + 5,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPoe78}",
                "ActionDescription": "&{TextPoe79}",
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
                "ActionResultVariable": `MainTXNCurentTXNDataIdentifierPOE${variabelofPoe}`,
                "MetaData": [
                  `MainTXNCurentTXNDataPOE${variabelofPoe}`,
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
                "StepNo": numPoe + 18,
                "SegmentNo": segPoe + 5,
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
                    "StepNo": numPoe + 18,
                    "SegmentNo": segPoe + 5,
                    "FrameID": 4,
                    "FrameTitle": "",
                    "ActionTitle": "&{TextPoe81}",
                    "ActionDescription": "&{TextPoe82}",
                    "FrameTitle_1": "&{TextPoe83}",
                    "ActionTitle_1": "&{TextPoe84}",
                    "ActionDescription_1": "&{TextPoe85}",
                    "OperationKey": "identifier",
                    "OperationValue": `MainTXNCurentTXNDataIdentifierPOE${variabelofPoe}`,
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
                "StepNo": numPoe + 19,
                "SegmentNo": segPoe + 5,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPoe87}",
                "ActionDescription": "&{TextPoe88}",
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
                      "Key": "&{TextPoe209}",
                      "Value": `\${MainTXNCurentTXNDataIdentifierPOE${variabelofPoe}}`
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
                "SegmentNo": segPoe + 5,
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
                    "StepNo": numPoe + 20,
                    "SegmentNo": segPoe + 5,
                    "FrameID": 5,
                    "FrameTitle": "&{TextPoe90}",
                    "ActionTitle": "&{TextPoe91}",
                    "ActionDescription": "&{TextPoe92}",
                    "ActionTitle_1": "&{TextPoe93}",
                    "ActionDescription_1": "&{TextPoe94}",
                    "ActionTitle_2": "&{TextPoe95}",
                    "ActionDescription_2": "&{TextPoe127}",
                    "ActionTitle_3": "&{TextPoe128}",
                    "ActionDescription_3": "&{TextPoe129}",
                    "ActionTitle_4": "&{TextPoe130}",
                    "ActionDescription_4": "&{TextPoe131}",
                    "InformationStorageKey": "&{TextPoe224}",
                    "ToastMessage": "&{TextPoe133}",
                    "DecodeKeyName": "&{TextPoe246}",
                    "EncodedInputValue": `\${MainTXNCurentTXNDataIdentifierPOE${variabelofPoe}}`,
                    "DecodedResultVariable": `MainTXNCurentTXNDataIdentifierDecodedPOE${variabelofPoe}`
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
                "StepNo": numPoe + 21,
                "SegmentNo": segPoe + 5,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPoe96}",
                "ActionDescription": "&{TextPoe97}",
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
                "ActionResultVariable": `MainTXNCurentTXNDatadatahashPOE${variabelofPoe}`,
                "MetaData": [
                  `MainTXNCurentTXNDataPOE${variabelofPoe}`,
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
                "StepNo": numPoe + 22,
                "SegmentNo": segPoe + 5,
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
                    "StepNo": numPoe + 22,
                    "SegmentNo": segPoe + 5,
                    "FrameID": 4,
                    "ActionTitle": "&{TextPoe100}",
                    "ActionDescription": "&{TextPoe101}",
                    "ActionTitle_1": "&{TextPoe300}",
                    "ActionDescription_1": "&{TextPoe103}",
                    "OperationKey": "dataHash",
                    "OperationValue": `MainTXNCurentTXNDatadatahashPOE${variabelofPoe}`,
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
                "StepNo": numPoe + 23,
                "SegmentNo": segPoe + 5,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{TextPoe106}",
                "ActionDescription": "&{TextPoe107}",
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
                      "Key": "&{TextPoe210}",
                      "Value": `\${MainTXNCurentTXNDatadatahashPOE${variabelofPoe}}`
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
                "StepNo": numPoe + 24,
                "SegmentNo": segPoe + 5,
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
                    "StepNo": numPoe + 24,
                    "SegmentNo": segPoe + 5,
                    "FrameID": 6,
                    "FrameTitle": "&{TextPoe110}",
                    "ActionTitle": "&{TextPoe111}",
                    "ActionDescription": "&{TextPoe112}",
                    "ActionTitle_1": "&{TextPoe113}",
                    "ActionDescription_1": "&{TextPoe134}",
                    "ActionTitle_2": "&{TextPoe135}",
                    "ActionDescription_2": "&{TextPoe136}",
                    "ActionTitle_3": "&{TextPoe137}",
                    "ActionDescription_3": "&{TextPoe138}",
                    "ActionTitle_4": "&{TextPoe139}",
                    "ActionDescription_4": "&{TextPoe140}",
                    "ToastMessage": "&{TextPoe141}",
                    "EncodedInputValue": `\${MainTXNCurentTXNDatadatahashPOE${variabelofPoe}}`,
                    "DecodedResultVariable": `MainTXNCurentTXNDatadatahashDecodedPOE${variabelofPoe}`,
                    "InformationStorageKey": "&{TextPoe225}",
                    "DecodeKeyName": "&{TextPoe247}"
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
                "StepNo": numPoe + 25,
                "SegmentNo": segPoe + 5,
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
                    "StepNo": numPoe + 25,
                    "SegmentNo": segPoe + 5,
                    "FrameID": 7,
                    "FrameTitle": "&{TextPoe115}",
                    "ActionTitle": "&{TextPoe116}",
                    "ActionDescription": "&{TextPoe117}",
                    "FrameTitle_1": "&{TextPoe118}",
                    "ActionTitle_1": "&{TextPoe119}",
                    "ActionDescription_1": "&{TextPoe142}",
                    "FrameTitle_2": "&{TextPoe143}",
                    "ActionTitle_2": "&{TextPoe144}",
                    "ActionDescription_2": "&{TextPoe145}",
                    "FrameTitle_3": "&{TextPoe146}",
                    "ActionTitle_3": "&{TextPoe147}",
                    "ActionDescription_3": "&{TextPoe148}",
                    "ToastMessage": "&{TextPoe154}",
                    "InputKeyName": "the base64 decoded Datahash values from the transactions.",
                    "InputValue": "[{\"title\": \"Identifiers from the Traceability Data and Blockchain transaction\", \"t1\": \"`\${MainTXNCurentTXNDatadatahashPOE\${variableOfPoe}}`\", \"t2\": \"`\${TDPDatahash${varibleofPoe}}`\"}]"
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
                "SegmentNo": segPoe + 6,
                "FrameID": 8,
                "FrameTitle": "&{TextPoe120}"
              },
              "Action": {
                "ActionTitle": "&{TextPoe121}",
                "ActionDescription": "&{TextPoe121}",
                "ActionType": "BrowserScreen",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/checked.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#098260; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Completed Successfully!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF EXISTENCE</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Identifier</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n\${TDPIdentifierPOE\${variabelofPoe}}\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n \${var_currenttxnPOE\${variabelofPoe}}\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "InnerHTMLError": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center mt-2\"><center><img src=\"../../../../assets/img/cancel.png\" style=\"width:50px; margin-top:5px;\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#F15249; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Failed!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF EXISTENCE</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Identifier</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n\${TDPIdentifierPOE\${variabelofPoe}}\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n \${var_currenttxnPOE\${variabelofPoe}}\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "PageURL": "&{TextPoe123}",
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
                    "t2": "TDPDatahash"
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
                "ToastMessage1": "&{TextPoe234}",
                "ToastPosition1": [
                  "6%",
                  "80%"
                ],
                "ActionDuration": 10
              }
            },
          ]
          let poeLang = [
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 1,
              "Languages": {
                "TextPoe0": {
                  "ja": "ステップ1-TDPデータの取得",
                  "en": "Step 1 - Retrieve Traceability Data Data"
                },
                "TextPoe149": {
                  "ja": "TDPデータ要求",
                  "en": "Request Traceability Data Data"
                },
                "TextPoe1": {
                  "ja": "現在のTDP",
                  "en": "Current Traceability Data"
                },
                "TextPoe2": {
                  "ja": "Tracified GatewayからTDPデータを取得",
                  "en": "Retrieve Traceability Data data from Tracified Gateway."
                },
                "TextPoe3": {
                  "ja": "ステップ1-TDPデータの取得",
                  "en": "Step 1 - Retrieve Traceability Data Data"
                },
                "TextPoe4": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "TextPoe5": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "TextPoe6": {
                  "ja": "ステップ1-TDPデータの取得",
                  "en": "Step 1 - Retrieve Traceability Data Data"
                },
                "TextPoe7": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "TextPoe8": {
                  "ja": "トランザクションデータをJSONにフォーマット(Javascriptオブジェクト記法)",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 2,
              "Languages": {
                "TextPoe9": {
                  "ja": "TDP識別子の選択",
                  "en": "Select Traceability Data identifier"
                },
                "TextPoe10": {
                  "ja": "TDP詳細から識別子を選択",
                  "en": "Select the identifier from Traceability Data details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 3,
              "Languages": {
                "TextPoe11": {
                  "ja": "TDPの詳細からの識別子",
                  "en": "identifier from the Traceability Data details"
                },
                "TextPoe12": {
                  "ja": "識別子をハイライト表示",
                  "en": "Highlight the Identifier"
                },
                "TextPoe13": {
                  "ja": "TDP詳細から識別子を選択",
                  "en": "Select the identifier from the Traceability Data details"
                },
                "TextPoe14": {
                  "ja": "テスト",
                  "en": "test"
                },
                "TextPoe15": {
                  "ja": "識別子をハイライト表示",
                  "en": "Highlight the TDPIdentifier"
                },
                "TextPoe16": {
                  "ja": "TDP詳細から識別子を選択",
                  "en": "Select the identifier from the Traceability Data details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 4,
              "Languages": {
                "TextPoe17": {
                  "ja": "Traceability Data 識別子の保存",
                  "en": "Save Traceability Data Identifier"
                },
                "TextPoe18": {
                  "ja": "将来の使用のために識別子の値を保存する",
                  "en": "Save the Identifier value for future usage."
                },
                "TextPoe205": {
                  "ja": "TDP識別子",
                  "en": "Traceability Data Identifier"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 5,
              "Languages": {
                "TextPoe20": {
                  "ja": "Traceability Data Data Hashの選択",
                  "en": "Select Traceability Data Data Hash"
                },
                "TextPoe21": {
                  "ja": "TDPの詳細からデータハッシュを選択",
                  "en": "Select the Data Hash from Traceability Data details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 6,
              "Languages": {
                "TextPoe22": {
                  "ja": "TDPの詳細からダータハッシュ",
                  "en": "Data Hash from the Traceability Data details"
                },
                "TextPoe23": {
                  "ja": "ダータハッシュをハイライト表示",
                  "en": "Highlight the Data Hash"
                },
                "TextPoe24": {
                  "ja": "TDPの詳細からデータハッシュを選択",
                  "en": "Select the Data Hash from the Traceability Data details"
                },
                "TextPoe25": {
                  "ja": "テスト",
                  "en": "test"
                },
                "TextPoe26": {
                  "ja": "TDPデータハッシュのハイライト",
                  "en": "Highlight the Traceability Data Data Hash"
                },
                "TextPoe27": {
                  "ja": "TDPの詳細からデータハッシュを選択",
                  "en": "Select the Data Hash from the Traceability Data details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 7,
              "Languages": {
                "TextPoe28": {
                  "ja": "TDPデータハッシュの保存",
                  "en": "Save Traceability Data Data Hash"
                },
                "TextPoe29": {
                  "ja": "将来の使用のためにデータハッシュ値の保存",
                  "en": "Save Data Hash value for future usage."
                },
                "TextPoe206": {
                  "ja": "Traceability Data データハッシュ",
                  "en": "Traceability Data Data Hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 8,
              "Languages": {
                "TextPoe31": {
                  "ja": "Traceability Data Txn Hashを選択",
                  "en": "Select Traceability Data Txn Hash"
                },
                "TextPoe32": {
                  "ja": "TDPの詳細からTxn Hashを選択",
                  "en": "Select the Txn Hash from Traceability Data details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 9,
              "Languages": {
                "TextPoe34": {
                  "ja": "Txn Hashのハイライト",
                  "en": "Highlight the Txn Hash"
                },
                "TextPoe35": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the txn Hash from the Traceability Data details"
                },
                "TextPoe37": {
                  "ja": "Traceability Data Txn Hashをハイライト",
                  "en": "Highlight the Traceability Data Txn Hash"
                },
                "TextPoe38": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the txn Hash from the Traceability Data details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 10,
              "Languages": {
                "TextPoe39": {
                  "ja": "Traceability Data Txn Hashを保存",
                  "en": "Save Traceability Data Txn Hash"
                },
                "TextPoe40": {
                  "ja": "将来の使用のためにTxn Hashの値を保存",
                  "en": "Save Txn Hash value for future usage."
                },
                "TextPoe207": {
                  "ja": "Traceability Data Txn Hash",
                  "en": "Traceability Data Txn Hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 11,
              "Languages": {
                "TextPoe42": {
                  "ja": "ステップ５ーTDPトランザクションの取得",
                  "en": "Step 5 - Retrieve Traceability Data Transaction"
                },
                "TextPoe43": {
                  "ja": "ステラホライズンAPIをリクエスト",
                  "en": "Request Stellar Horizon API"
                },
                "TextPoe44": {
                  "ja": "ステラブロックチェーンから現在の取引を取得",
                  "en": "Retrieve the current transaction from Stellar Blockchain."
                },
                "TextPoe45": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "TextPoe46": {
                  "ja": "トランザクションのレスポンスデータを保存",
                  "en": "Save the response data of the transaction"
                },
                "TextPoe47": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "TextPoe48": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 12,
              "Languages": {
                "TextPoe49": {
                  "ja": "Current TXNハッシュの選択",
                  "en": "Select Current TXN Hash"
                },
                "TextPoe50": {
                  "ja": "トランザクションの詳細からCurrent TXNハッシュ（base64エンコード）を選択",
                  "en": "Select the Current TXN Hash (base64 encoded) from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 13,
              "Languages": {
                "TextPoe51": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュをハイライト",
                  "en": "Highlight the encoded Current TXN Hash from the transaction details"
                },
                "TextPoe52": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュを選択",
                  "en": "Select the encoded Current TXN Hash from the transaction details"
                },
                "TextPoe53": {
                  "ja": "トランザクションの詳細から、エンコードされたCurrent TXNハッシュ値をハイライト",
                  "en": "Highlight the encoded Current TXN Hash value from the transaction details"
                },
                "TextPoe54": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュ値を選択",
                  "en": "Select the encoded Current TXN Hash value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 3,
              "StepNo": numPoe + 14,
              "Languages": {
                "TextPoe55": {
                  "ja": "Base64エンコードされたCurrent TXNの保存",
                  "en": "Save Base64 Encoded Current TXN"
                },
                "TextPoe56": {
                  "ja": "将来の使用のためにBase64でエンコードされたCurrent TXNハッシュ値を保存",
                  "en": "Save the base64 encoded Current TXN Hash value for future usage."
                },
                "TextPoe208": {
                  "ja": "Current TXN (ベース64)",
                  "en": "Current TXN (base64)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 3,
              "StepNo": numPoe + 15,
              "Languages": {
                "TextPoe58": {
                  "ja": "ステップ１５ - 現在のTXNをデコード",
                  "en": "Step 15 - Decode Current TXN"
                },
                "TextPoe59": {
                  "ja": "base64デコードのサイトを読み込む",
                  "en": "Load the base64 decode website"
                },
                "TextPoe60": {
                  "ja": "Base64でエンコードされたCurrent TXNハッシュをデコードする",
                  "en": "Decode the base64 encoded Current TXN Hash"
                },
                "TextPoe61": {
                  "ja": "Base64でエンコードされた現在のTXNハッシュを入力",
                  "en": "Input base64 encoded current txn hash"
                },
                "TextPoe62": {
                  "ja": "Base64でエンコードされたCurrent TXNハッシュを入力する",
                  "en": "Input the base64 encoded Current TXN Hash"
                },
                "TextPoe63": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click decode button"
                },
                "TextPoe64": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPoe65": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "TextPoe66": {
                  "ja": "デコードされた現在のTXNハッシュの出力を取得",
                  "en": "Get the output of the decoded current txn hash"
                },
                "TextPoe67": {
                  "ja": "デコードした値を情報ストレージに保存",
                  "en": "Save the decoded value in information storage"
                },
                "TextPoe68": {
                  "ja": "将来の使用のためにデコードされたCurrent TXNハッシュを保存",
                  "en": "Save the decoded Current TXN Hash for future usage."
                },
                "TextPoe223": {
                  "ja": "現TXNハッシュ（デコード済み）",
                  "en": "Current txn Hash (decoded)"
                },
                "TextPoe70": {
                  "ja": "デコードされた現在のTXNハッシュ",
                  "en": "Decoded current txn hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 4,
              "StepNo": numPoe + 16,
              "Languages": {
                "TextPoe71": {
                  "ja": "ステップ１６ー現在の取引の取得",
                  "en": "Step 16 - Retrieve Current Transaction"
                },
                "TextPoe72": {
                  "ja": "ゲートウェイトランザクションの現在のトランザクション",
                  "en": "current transaction of the gateway transaction"
                },
                "TextPoe73": {
                  "ja": "ステラホライズンAPIをリクエスト",
                  "en": "Request Stellar Horizon API"
                },
                "TextPoe74": {
                  "ja": "ゲートウェイトランザクションの現在のトランザクションをStellar Blockchainから取得",
                  "en": "Retrieve the current transaction of the gateway transaction from Stellar Blockchain."
                },
                "TextPoe76": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "TextPoe77": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "TextPoe125": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "TextPoe126": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 17,
              "Languages": {
                "TextPoe78": {
                  "ja": "Base64 Encoded Current Txn 識別子 を選択",
                  "en": "Select Base64 Encoded Current Txn Identifier"
                },
                "TextPoe79": {
                  "ja": "トランザクションの詳細から、エンコードされたcurrent Txn Identifierを選択",
                  "en": "Select the encoded current Txn Identifier from the transaction details."
                },
                "TextPoe80": {
                  "ja": "フォーマットメタデータ",
                  "en": "Format Meta Data"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 18,
              "Languages": {
                "TextPoe81": {
                  "ja": "トランザクションの詳細からエンコードされたIdentifierをハイライト",
                  "en": "Highlight the encoded Identifier from the transaction details"
                },
                "TextPoe82": {
                  "ja": "トランザクションの詳細から、エンコードされたIdentifierの値を選択",
                  "en": "Select the encoded Identifier value from the transaction details"
                },
                "TextPoe83": {
                  "ja": "テスト",
                  "en": "test"
                },
                "TextPoe84": {
                  "ja": "トランザクションの詳細からMainTXNCurrent TXNDataIdentifierをハイライト",
                  "en": "Highlight the MainTXNCurrent TXNDataIdentifier from the transaction details"
                },
                "TextPoe85": {
                  "ja": "トランザクションの詳細から、エンコードされたIdentifierの値を選択",
                  "en": "Select the encoded Identifier value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 19,
              "Languages": {
                "TextPoe87": {
                  "ja": "Base64エンコードされたCurrent TXNの保存",
                  "en": "Save Base64 Encoded Current Txn Identifier"
                },
                "TextPoe88": {
                  "ja": "将来の使用のためにbase64 エンコードされた Identifier 値を保存",
                  "en": "Save the base64 encoded Identifier value for future usage."
                },
                "TextPoe89": {
                  "ja": "情報ストレージ",
                  "en": "InformationStorage"
                },
                "TextPoe209": {
                  "ja": "識別子 (base64)",
                  "en": "Identifier (base64)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 20,
              "Languages": {
                "TextPoe90": {
                  "ja": "ステップ５ー現在のTXN識別子のデコード",
                  "en": "Step 5 - Decode Current TXN Identifier"
                },
                "TextPoe91": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "TextPoe92": {
                  "ja": "base64 でエンコードされた Current TXN 識別子をデコード",
                  "en": "Decode the base64 encoded Current TXN Identifier"
                },
                "TextPoe93": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "TextPoe94": {
                  "ja": "Base64 でエンコードされた Current TXN 識別子を入力",
                  "en": "Input the base64 encoded Current TXN Identifier"
                },
                "TextPoe95": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the Decode Button"
                },
                "TextPoe127": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPoe128": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "TextPoe129": {
                  "ja": "デコードしたCurrent TXN識別子の出力を取得",
                  "en": "Get the output of the decoded Current TXN Identifier"
                },
                "TextPoe130": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "TextPoe131": {
                  "ja": "将来の使用のためにデコードされたCurrent TXN識別子を保存",
                  "en": "Save the decoded Current TXN Identifier for future usage."
                },
                "TextPoe224": {
                  "ja": "Current TXN識別子",
                  "en": "Current TXN Identifier"
                },
                "TextPoe133": {
                  "ja": "デコードされた Current TXN 識別子",
                  "en": "Decoded Current TXN Identifier"
                },
                "TextPoe246": {
                  "ja": "Current TXN識別子",
                  "en": "Current TXN Identifier"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 21,
              "Languages": {
                "TextPoe96": {
                  "ja": "Base64EncodeされたData Hashを選択",
                  "en": "Select Base64 Encoded Data Hash"
                },
                "TextPoe97": {
                  "ja": "トランザクションの詳細からエンコードされたデータハッシュを選択",
                  "en": "Select the encoded Data Hash from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 22,
              "Languages": {
                "TextPoe100": {
                  "ja": "データハッシュをハイライト",
                  "en": "Highlight the Data Hash"
                },
                "TextPoe101": {
                  "ja": "トランザクションの詳細からエンコードされたデータハッシュを選択",
                  "en": "Select the encoded Data Hash from the transaction details."
                },
                "TextPoe300": {
                  "ja": "Main TXN Current TXNデータハッシュをハイライト",
                  "en": "Highlight the Main TXN Current TXN Data Data Hash"
                },
                "TextPoe103": {
                  "ja": "トランザクションの詳細からエンコードされたデータハッシュの値を選択",
                  "en": "Select the encoded Data Hash value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 23,
              "Languages": {
                "TextPoe106": {
                  "ja": "Base64Encodeされたデータハッシュの保存",
                  "en": "Save Base64 Encoded Data Hash"
                },
                "TextPoe107": {
                  "ja": "将来の使用のためにbase64でエンコードされたデータハッシュの値を保存",
                  "en": "Save the base64 encoded Data Hash value for future usage."
                },
                "TextPoe210": {
                  "ja": "Current TXN データハッシュ（base64）。",
                  "en": "Current TXN Data Hash (base64)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 24,
              "Languages": {
                "TextPoe110": {
                  "ja": "ステップ９－現在のTXNデータハッシュのデコード",
                  "en": "Step 9 - Decode Current TXN Data Hash"
                },
                "TextPoe111": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "TextPoe112": {
                  "ja": "Base64でエンコードされたCurrent TXNのData Hashをデコード",
                  "en": "Decode the base64 encoded Current TXN Data Hash"
                },
                "TextPoe113": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "TextPoe134": {
                  "ja": "Base64でエンコードされたCurrent TXN データハッシュを入力",
                  "en": "Input the base64 encoded Current TXN Data Hash"
                },
                "TextPoe135": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "TextPoe136": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "TextPoe137": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "TextPoe138": {
                  "ja": "デコードされたCurrent TXNの出力を取得する データハッシュ",
                  "en": "Get the output of the decoded Current TXN Data Hash"
                },
                "TextPoe139": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "TextPoe140": {
                  "ja": "将来の使用のためにデコードされたCurrent TXNデータハッシュ",
                  "en": "Save the decoded Current TXN Data Hash for future usage."
                },
                "TextPoe141": {
                  "ja": "デコードされたCurrent TXN データハッシュ",
                  "en": "Decoded Current TXN Data Hash"
                },
                "TextPoe225": {
                  "ja": "Current TXN データハッシュ",
                  "en": "CurrentTXN data hash"
                },
                "TextPoe247": {
                  "ja": "Current TXN データハッシュ",
                  "en": "CurrentTXN data hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 25,
              "Languages": {
                "TextPoe115": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Step 10 - Compare Data Hash"
                },
                "TextPoe116": {
                  "ja": "オンラインテキスト比較のWebページ",
                  "en": "Online Text Comparison Webpage"
                },
                "TextPoe117": {
                  "ja": "オンラインテキスト比較のウェブページを読み込む",
                  "en": "Load the online text comparison webpage"
                },
                "TextPoe118": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Step 10 - Compare Data Hash"
                },
                "TextPoe119": {
                  "ja": "入力の比較値",
                  "en": "Input comparison values"
                },
                "TextPoe142": {
                  "ja": "トランザクションからBase64デコードされたデータハッシュ値を入力",
                  "en": "Input the base64 decoded Data Hash values from the transactions."
                },
                "TextPoe143": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Step 10 - Compare Data Hash"
                },
                "TextPoe144": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "TextPoe145": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "TextPoe146": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Step 10 - Compare Data Hash"
                },
                "TextPoe147": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "TextPoe148": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "TextPoe154": {
                  "ja": "klll",
                  "en": "Comparison Result"
                }
              }
            },
            {
              "SegmentNo": segPoe + 6,
              "StepNo": numPoe + 26,
              "Languages": {
                "TextPoe120": {
                  "ja": "ステップ１１－検証の概要",
                  "en": "Step 11 - Verification Summary"
                },
                "TextPoe121": {
                  "ja": "検証の概要",
                  "en": "Verification Summary"
                },
                "TextPoe123": {
                  "ja": "検証の概要についてー存在の証明",
                  "en": "about: Verification Summary - PROOF OF THE EXISTENCE"
                },
                "TextPoe234": {
                  "ja": "検証は正常に終了",
                  "en": "Verification Completed Successfully"
                }
              }
            }
          ]
          this.pocProofJson.Header.Segments.push(...poeSegments)
          this.pocProofJson.Steps.push(...poeSteps)
          this.pocLangJson.Actions.push(...poeLang)
          segPoe = segPoe + 6
          numPoe = numPoe + 26
          variabelofPoe = variabelofPoe + 1
          break;
        case "pobl":
          let segPobl = this.pocProofJson.Header.Segments[this.pocProofJson.Header.Segments.length - 1].NO
          let numPobl = this.pocProofJson.Steps[this.pocProofJson.Steps.length - 1].StepHeader.StepNo
          let variabelOfPobl = 1;
          let poblSegments = [
            {
              "NO": segPobl + 1,
              "Name": "&{SegName16}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPobl + 2,
              "Name": "&{SegName17}",
              "Source": ""
            },
            {
              "NO": segPobl + 3,
              "Name": "&{SegName18}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPobl + 4,
              "Name": "&{SegName19}",
              "Source": ""
            },
            {
              "NO": segPobl + 5,
              "Name": "&{SegName20}",
              "Source": ""
            },
            {
              "NO": segPobl + 6,
              "Name": "&{SegName21}",
              "Source": ""
            },
            {
              "NO": segPobl + 7,
              "Name": "&{SegName22}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPobl + 8,
              "Name": "&{SegName23}",
              "Source": ""
            },
            {
              "NO": segPobl + 9,
              "Name": "&{SegName24}",
              "Source": "../../../../assets/img/blockchain2.png"
            },
            {
              "NO": segPobl + 10,
              "Name": "&{SegName25}",
              "Source": ""
            },
            {
              "NO": segPobl + 11,
              "Name": "&{SegName26}",
              "Source": ""
            },
            {
              "NO": segPobl + 12,
              "Name": "&{SegName27}",
              "Source": ""
            },
            {
              "NO": segPobl + 13,
              "Name": "&{SegName28}",
              "Source": ""
            },
            {
              "NO": segPobl + 14,
              "Name": "&{SegName29}",
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
                    "ResponseVariable": `MainTXNDataString${variabelOfPobl}`,
                    "JSONResultVariable": `MainTXNData${variabelOfPobl}`,
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
                "ActionResultVariable": `MainTXNCurentTXNHash${variabelOfPobl}`,
                "MetaData": [
                  `MainTXNData${variabelOfPobl}`,
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
                    "OperationValue": `MainTXNCurentTXNHash${variabelOfPobl}`,
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
                      "Value": `\${MainTXNCurentTXNHash${variabelOfPobl}}`
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
                    "EncodedInputValue": `\${MainTXNCurentTXNHash${variabelOfPobl}}`,
                    "DecodedResultVariable": `var_currenttxn${variabelOfPobl}`,
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
                "ActionResultVariable": `MainTXNMergeID${variabelOfPobl}`,
                "MetaData": [`MainTXNData${variabelOfPobl}`, "MergeID", false, "value"]
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
                    "OperationValue": `MainTXNMergeID${variabelOfPobl}`,
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
                      "Value": `\${MainTXNMergeID${variabelOfPobl}}`
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
                    "EncodedInputValue": `\${MainTXNMergeID${variabelOfPobl}}`,
                    "DecodedResultVariable": `MergeIDhasheDecoded${variabelOfPobl}`,
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
                    "TXNHash": `\${var_currenttxn${variabelOfPobl}}`,
                    "OperationName": "current transaction of the gateway transaction",
                    "ResponseVariable": `MainTXNCurentTXNDataString${variabelOfPobl}`,
                    "JSONResultVariable": `MainTXNCurentTXNData${variabelOfPobl}`,
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
                "ActionResultVariable": `MainTXNCurentTXNDataIdentifier${variabelOfPobl}`,
                "MetaData": [
                  `MainTXNCurentTXNData${variabelOfPobl}`,
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
                    "OperationValue": `MainTXNCurentTXNDataIdentifier${variabelOfPobl}`,
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
                      "Value": `\${MainTXNCurentTXNDataIdentifier${variabelOfPobl}}`
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
                    "EncodedInputValue": `\${MainTXNCurentTXNDataIdentifier${variabelOfPobl}}`,
                    "DecodedResultVariable": `MainTXNCurentTXNDataIdentifierDecoded${variabelOfPobl}`,
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
                "ActionResultVariable": `MainTXNCurentTXNDataProductId${variabelOfPobl}`,
                "MetaData": [
                  `MainTXNCurentTXNData${variabelOfPobl}`,
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
                    "OperationValue": `MainTXNCurentTXNDataProductId${variabelOfPobl}`,
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
                      "Value": `\${MainTXNCurentTXNDataProductId${variabelOfPobl}}`
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
                    "EncodedInputValue": `\${MainTXNCurentTXNDataProductId}${variabelOfPobl}`,
                    "DecodedResultVariable": `MainTXNCurentTXNDataProductIdDecoded${variabelOfPobl}`,
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
                "ActionResultVariable": `MainTXNPreviousTXN${variabelOfPobl}`,
                "MetaData": [
                  `MainTXNData${variabelOfPobl}`,
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
                    "OperationValue": `MainTXNPreviousTXN${variabelOfPobl}`,
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
                      "Value": `\${MainTXNPreviousTXN${variabelOfPobl}}`
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
                    "EncodedInputValue": `\${MainTXNPreviousTXN${variabelOfPobl}}`,
                    "DecodedResultVariable": `MainTXNPreviousTXNDecoded${variabelOfPobl}`,
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
                    "TXNHash": `\${MainTXNPreviousTXNDecoded${variabelOfPobl}}`,
                    "OperationName": "Backlink transaction from Stellar Blockchain.",
                    "ResponseVariable": `MainTXNPreviousTXNDataString${variabelOfPobl}`,
                    "JSONResultVariable": `MainTXNPreviousTXNData${variabelOfPobl}`,
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
                "ActionResultVariable": `MainTXNPreviousTXNCurrentTXNHash${variabelOfPobl}`,
                "MetaData": [
                  `MainTXNPreviousTXNData${variabelOfPobl}`,
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
                    "OperationValue": `MainTXNPreviousTXNCurrentTXNHash${variabelOfPobl}`,
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
                      "Value": `\${MainTXNPreviousTXNCurrentTXNHash${variabelOfPobl}}`
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
                    "EncodedInputValue": `\${MainTXNPreviousTXNCurrentTXNHash${variabelOfPobl}}`,
                    "DecodedResultVariable": `MainTXNPreviousTXNCurrentTXNHashDecoded${variabelOfPobl}`,
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
                    "TXNHash": `\${MainTXNPreviousTXNCurrentTXNHashDecoded${variabelOfPobl}}`,
                    "OperationName": "current transaction of the backlink transaction",
                    "ResponseVariable": `MainTXNPreviousTXNCurrentTXNDataString${variabelOfPobl}`,
                    "JSONResultVariable": `MainTXNPreviousTXNCurrentTXNData${variabelOfPobl}`,
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
                "ActionResultVariable": `MainTXNPreviousTXNCurrentTXNDataIdentifier${variabelOfPobl}`,
                "MetaData": [
                  `MainTXNPreviousTXNCurrentTXNData${variabelOfPobl}`,
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
                    "OperationValue": `MainTXNPreviousTXNCurrentTXNDataIdentifier${variabelOfPobl}`,
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
                      "Value": `\${MainTXNPreviousTXNCurrentTXNDataIdentifier${variabelOfPobl}}`
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
                    "EncodedInputValue": `\${MainTXNPreviousTXNCurrentTXNDataIdentifier${variabelOfPobl}}`,
                    "DecodedResultVariable": `MainTXNPreviousTXNCurrentTXNDataIdentifierDecoded${variabelOfPobl}`,
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
                "ActionResultVariable": `MainTXNPreviousTXNCurrentTXNDataProductID${variabelOfPobl}`,
                "MetaData": [
                  `MainTXNPreviousTXNCurrentTXNData${variabelOfPobl}`,
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
                    "OperationValue": `MainTXNPreviousTXNCurrentTXNDataProductID${variabelOfPobl}`,
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
                      "Value": `\${MainTXNPreviousTXNCurrentTXNDataProductID${variabelOfPobl}}`
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
                    "EncodedInputValue": `\${MainTXNPreviousTXNCurrentTXNDataProductID${variabelOfPobl}}`,
                    "DecodedResultVariable": `MainTXNPreviousTXNCurrentTXNDataProductIDDecoded${variabelOfPobl}`,
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
                    "InputValue": "[{\"title\": \"Identifiers from the Main transaction and Backlink transaction\", \"t1\": \`\${MainTXNCurentTXNDataIdentifierDecoded\${variabelOfPobl}}`\", \"t2\": \`\${MainTXNPreviousTXNCurrentTXNDataIdentifierDecoded\${variabelOfPobl}}\`}]"
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
                    "InputValue": "[{\"title\": \" Merge ID   hash from main transaction & backlink transaction\", \"t1\": \`\${MergeIDhasheDecoded\${variabelOfPobl}}\`, \"t2\": \`\${ExpectedPreviousTxnHash\${variabelOfPobl}}\`}]"
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
                    "InputValue": "[{\"title\": \"Previous Transaction hash from main transaction & backlink transaction\", \"t1\": \`\${MainTXNPreviousTXNDecoded}\${variabelOfPobl}\`, \"t2\": \`\${ExpectedPreviousTxnHash\${variabelOfPobl}}\`}]"
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
                "FrameTitle": "&{TextPobl178}"
              },
              "Action": {
                "ActionTitle": "&{TextPobl179}",
                "ActionDescription": "&{TextPobl179}",
                "ActionType": "BrowserScreen",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/checked.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#098260; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Completed Successfully!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF BACKLINK</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Current Traceability Data Transaction Hash</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Previous Traceability Data Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n\${var_currenttxn\${variabelOfPobl}}\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n \${MainTXNPreviousTXNCurrentTXNHashDecoded\${variabelOfPobl}}\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "InnerHTMLError": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/cancel.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#F15249; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Failed!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF BACKLINK</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Current Traceability Data Transaction Hash</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Previous Traceability Data Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n\${var_currenttxn\${variabelOfPobl}}\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n \${MainTXNPreviousTXNCurrentTXNHashDecoded\${variabelOfPobl}}\r\n </p></td></tr></tbody></table></div></div></body></html>",
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
                    "blockchainValue1": `MainTXNPreviousTXNDecoded${variabelOfPobl}`,
                    "blockchainValue2":`MergeIDhasheDecoded${variabelOfPobl}`,
                    "expectedValue1": `ExpectedPreviousTxnHash${variabelOfPobl}`
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
          variabelOfPobl = variabelOfPobl + 1 
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
            "StorageData": [],
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
          console.log("duplicate")
        } else {
          if (node.Data.TxnType == '0' || node.Data.TxnType == '2') {
            this.orderedNodes.push(pocNode.Nodes[nodeId]); // If so, add the LastTxnHash value to the orderedNodes array
            // loop through the parents 
          }

        }

        await this.checkParentsAndPush(pocNode, parents, trustLinks[0], node.Id)
      }
    }
    console.log("order",(this.orderedNodes));
    
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
  
  
}
