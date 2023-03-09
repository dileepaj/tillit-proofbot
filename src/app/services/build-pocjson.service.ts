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
          "Source": "../../../../assets/img/Group.png"
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
          "ActionTitle": "&{Text0}",
          "ActionDescription": "&{Text1}",
          "FrameTitle": "&{Text2}",
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
        "en": "Retrieve TDP Data"
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
        "en": "Decode Current TXNHash"
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
          "Text0": {
            "ja": "aa",
            "en": "Load Graph View"
          },
          "Text1": {
            "ja": "aa",
            "en": "Load the POC tree view "
          },
          "Text2": {
            "ja": "aa",
            "en": "Retrieve POC Tree View ."
          }
        }
      }


    ]
  }

  orderedNodes = []; // Initialize an empty array to hold the matching LastTxnHash values
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
              "Source": "../../../../assets/img/Group 6.png"
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
                "ActionTitle": "&{Text0}",
                "ActionDescription": "&{Text1}",
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
                    "FrameTitle": "&{Text2}",
                    "ActionTitle": "&{Text3}",
                    "ActionDescription": "&{Text4}",
                    "ActionTitle_1": "&{Text5}",
                    "ActionDescription_1": "&{Text6}",
                    "ActionTitle_2": "&{Text7}",
                    "ActionDescription_2": "&{Text8}",
                    "TXNHash": node.TrustLinks[0],
                    "OperationName": "current transaction",
                    "ResponseVariable": "MainTXNDataString",
                    "JSONResultVariable": "MainTXNData",
                    "StartedProofType":"POG",
                    "TrustLinks": [node.Id]
                    
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
                "ActionTitle": "&{Text9}",
                "ActionDescription": "&{Text10}",
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
                    "ActionTitle": "&{Text11}",
                    "ActionDescription": "&{Text12}",
                    "ActionTitle_1": "&{Text13}",
                    "ActionDescription_1": "&{Text14}",
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
                "ActionTitle": "&{Text15}",
                "ActionDescription": "&{Text16}",
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
                      "Key": "&{Text200}",
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
                    "FrameTitle": "&{Text17}",
                    "ActionTitle": "&{Text18}",
                    "ActionDescription": "&{Text19}",
                    "ActionTitle_1": "&{Text20}",
                    "ActionDescription_1": "&{Text21}",
                    "ActionTitle_2": "&{Text22}",
                    "ActionDescription_2": "&{Text23}",
                    "ActionTitle_3": "&{Text24}",
                    "ActionDescription_3": "&{Text25}",
                    "ActionTitle_4": "&{Text26}",
                    "ActionDescription_4": "&{Text27}",
                    "ToastMessage": "&{Text104}",
                    "DecodeKeyName": "&{Text236}",
                    "EncodedInputValue": "${MainTXNCurentTXNHash}",
                    "DecodedResultVariable": "var_currenttxn",
                    "InformationStorageKey": "&{Text219}"
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
                    "FrameTitle": "&{Text28}",
                    "ActionTitle": "&{Text29}",
                    "ActionDescription": "&{Text30}",
                    "ActionTitle_1": "&{Text31}",
                    "ActionDescription_1": "&{Text32}",
                    "ActionTitle_2": "&{Text33}",
                    "ActionDescription_2": "&{Text34}",
                    "TXNHash": "${var_currenttxn}",
                    "OperationName": "current transaction of the gateway transaction",
                    "ResponseVariable": "MainTXNCurentTXNDataString",
                    "JSONResultVariable": "MainTXNCurentTXNData",
                    "StartedProofType":"",
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
                "ActionTitle": "&{Text35}",
                "ActionDescription": "&{Text36}",
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
                    "ActionTitle": "&{Text37}",
                    "ActionDescription": "&{Text38}",
                    "ActionTitle_1": "&{Text39}",
                    "ActionDescription_1": "&{Text40}",
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
                "ActionTitle": "&{Text41}",
                "ActionDescription": "&{Text42}",
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
                      "Key": "&{Text201}",
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
                    "FrameTitle": "&{Text45}",
                    "ActionTitle": "&{Text46}",
                    "ActionDescription": "&{Text47}",
                    "ActionTitle_1": "&{Text48}",
                    "ActionDescription_1": "&{Text49}",
                    "ActionTitle_2": "&{Text50}",
                    "ActionDescription_2": "&{Text51}",
                    "ActionTitle_3": "&{Text52}",
                    "ActionDescription_3": "&{Text53}",
                    "ActionTitle_4": "&{Text54}",
                    "ActionDescription_4": "&{Text55}",
                    "ToastMessage": "&{Text105}",
                    "DecodeKeyName": "&{Text237}",
                    "EncodedInputValue": "${MainTXNCurentTXNDataIdentifier}",
                    "DecodedResultVariable": "MainTXNCurentTXNDataIdentifierDecoded",
                    "InformationStorageKey": "&{Text220}"
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
                "ActionTitle": "&{Text56}",
                "ActionDescription": "&{Text57}",
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
                    "ActionTitle": "&{Text58}",
                    "ActionDescription": "&{Text59}",
                    "ActionTitle_1": "&{Text60}",
                    "ActionDescription_1": "&{Text61}",
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
                "ActionTitle": "&{Text62}",
                "ActionDescription": "&{Text63}",
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
                      "Key": "&{Text202}",
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
                    "FrameTitle": "&{Text64}",
                    "ActionTitle": "&{Text65}",
                    "ActionDescription": "&{Text66}",
                    "ActionTitle_1": "&{Text67}",
                    "ActionDescription_1": "&{Text68}",
                    "ActionTitle_2": "&{Text69}",
                    "ActionDescription_2": "&{Text70}",
                    "ActionTitle_3": "&{Text71}",
                    "ActionDescription_3": "&{Text72}",
                    "ActionTitle_4": "&{Text73}",
                    "ActionDescription_4": "&{Text74}",
                    "ToastMessage": "&{Text106}",
                    "DecodeKeyName": "&{Text238}",
                    "EncodedInputValue": "${MainTXNCurentTXNDataProductId}",
                    "DecodedResultVariable": "MainTXNCurentTXNDataProductIdDecoded",
                    "InformationStorageKey": "&{Text221}"
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
                "ActionTitle": "&{Text75}",
                "ActionDescription": "&{Text76}",
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
                    "ActionTitle": "&{Text77}",
                    "ActionDescription": "&{Text78}",
                    "ActionTitle_1": "&{Text79}",
                    "ActionDescription_1": "&{Text80}",
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
                "ActionTitle": "&{Text81}",
                "ActionDescription": "&{Text82}",
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
                      "Key": "&{Text203}",
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
                "ActionTitle": "&{Text83}",
                "ActionDescription": "&{Text84}",
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
                    "ActionTitle": "&{Text85}",
                    "ActionDescription": "&{Text86}",
                    "ActionTitle_1": "&{Text87}",
                    "ActionDescription_1": "&{Text88}",
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
                "ActionTitle": "&{Text89}",
                "ActionDescription": "&{Text90}",
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
                      "Key": "&{Text204}",
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
                    "FrameTitle": "&{Text91}",
                    "ActionTitle": "&{Text92}",
                    "ActionDescription": "&{Text93}",
                    "ActionTitle_1": "&{Text94}",
                    "ActionDescription_1": "&{Text95}",
                    "ActionTitle_2": "&{Text96}",
                    "ActionDescription_2": "&{Text97}",
                    "ActionTitle_3": "&{Text98}",
                    "ActionDescription_3": "&{Text99}",
                    "ActionTitle_4": "&{Text100}",
                    "ActionDescription_4": "&{Text101}",
                    "ToastMessage": "&{Text107}",
                    "DecodeKeyName": "&{Text222}",
                    "EncodedInputValue": "${MainTXNTXType}",
                    "DecodedResultVariable": "MainTXNTXTypeDecoded",
                    "InformationStorageKey": "&{Text222}"
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
                "FrameTitle": "&{Text102}"
              },
              "Action": {
                "ActionTitle": "&{Text103}",
                "ActionDescription": "&{Text103}",
                "FrameTitle": "&{Text102}",
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
                "ToastMessage1": "&{Text233}",
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
                "Text0": {
                  "ja": "現在のトランザクションの取得",
                  "en": "Retrieve Current Transaction"
                },
                "Text1": {
                  "ja": "現在のトランザクションの取得",
                  "en": "Retrieve Current Transaction"
                },
                "Text2": {
                  "ja": "ステップ１ー現在のトランザクションの取得",
                  "en": "Step 1 - Retrieve Current Transaction"
                },
                "Text3": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar Horizon API"
                },
                "Text4": {
                  "ja": "ステラブロックチェーンから現在の取引を取得する",
                  "en": "Retrieve the current transaction from Stellar Blockchain."
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
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text8": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPog + 2,
              "StepNo": numPog + 2,
              "Languages": {
                "Text9": {
                  "ja": "Current TXNハッシュを抽出",
                  "en": "Extract Current TXN Hash"
                },
                "Text10": {
                  "ja": "トランザクションの詳細からCurrent TXNハッシュ（base64エンコード）を選択",
                  "en": "Select the Current TXN Hash (base64 encoded) from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 2,
              "StepNo": numPog + 3,
              "Languages": {
                "Text11": {
                  "ja": "現在のTXNをハイライト表示",
                  "en": "Highlight the Current TXN"
                },
                "Text12": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュを選択",
                  "en": "Select the encoded Current TXN Hash from the transaction details"
                },
                "Text13": {
                  "ja": "Main TXN Current TXN Hashをハイライト表示",
                  "en": "Highlight the Main TXN Current TXN Hash"
                },
                "Text14": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュを選択",
                  "en": "Select the encoded Current TXN Hash from the transaction details"
                },
                "Text219": {
                  "ja": "TXN2 CurrentTXN",
                  "en": "TXN2 CurrentTXN"
                },
                "Text115": {
                  "ja": "CurrentTXN ハッシュ",
                  "en": "CurrentTXN Hash"
                }
              }
            },
            {
              "SegmentNo": segPog + 2,
              "StepNo": numPog + 4,
              "Languages": {
                "Text15": {
                  "ja": "Base64エンコードされたCurrent TXNの保存",
                  "en": "Save Base64 Encoded Current TXN"
                },
                "Text16": {
                  "ja": "将来の使用にBase64でエンコードされたCurrent TXNハッシュ値を保存",
                  "en": "Save the base64 encoded Current TXN Hash value for future usage."
                },
                "Text200": {
                  "ja": "TXN2 CurrentTXN (base64)",
                  "en": "TXN2 CurrentTXN (base64)"
                }
              }
            },
            {
              "SegmentNo": segPog + 2,
              "StepNo": numPog + 5,
              "Languages": {
                "Text17": {
                  "ja": "ステップ２ーデコード Current TXN",
                  "en": "Step 2 - Decode Current TXN"
                },
                "Text18": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "Text19": {
                  "ja": "Base64でエンコードされたCurrent TXNのハッシュをデコード",
                  "en": "Decode the base64 encoded Current TXN Hash"
                },
                "Text20": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "Text21": {
                  "ja": "Base64でエンコードされたCurrent TXNハッシュを入力",
                  "en": "Input the base64 encoded Current TXN Hash"
                },
                "Text22": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text23": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text24": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "Text25": {
                  "ja": "デコードされたCurrent TXNハッシュの出力を取得",
                  "en": "Get the output of the decoded Current TXN Hash"
                },
                "Text26": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "Text27": {
                  "ja": "将来の使用のためにデコードされたCurrent TXNハッシュを保存",
                  "en": "Save the decoded Current TXN Hash for future usage."
                },
                "Text104": {
                  "ja": "デコードされたCurrent TXNハッシュ",
                  "en": "Decoded Current TXN Hash"
                },
                "Text236": {
                  "ja": "CurrentTXN Hash",
                  "en": "CurrentTXN Hash"
                }
              }
            },
            {
              "SegmentNo": segPog + 3,
              "StepNo": numPog + 6,
              "Languages": {
                "Text28": {
                  "ja": "ステップ３－現在のトランザクションの取得",
                  "en": "Step 3 - Retrieve Current Transaction"
                },
                "Text29": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar Horizon API"
                },
                "Text30": {
                  "ja": "ゲートウェイトランザクションの現在のトランザクションをステラブロックチェーンから取得",
                  "en": "Retrieve the current transaction of the gateway transaction from Stellar Blockchain."
                },
                "Text31": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "Text32": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "Text33": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text34": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPog + 4,
              "StepNo": numPog + 7,
              "Languages": {
                "Text35": {
                  "ja": "Base64 Encodedの識別子を選択",
                  "en": "Select Base64 Encoded Identifier"
                },
                "Text36": {
                  "ja": "トランザクションの詳細からエンコードされたIdentifierを選択",
                  "en": "Select the encoded Identifier from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 4,
              "StepNo": numPog + 8,
              "Languages": {
                "Text37": {
                  "ja": "識別子をハイライト表示",
                  "en": "Highlight the identifier."
                },
                "Text38": {
                  "ja": "トランザクションの詳細からエンコードされたIdentifierを選択",
                  "en": "Select the encoded Identifier from the transaction details."
                },
                "Text39": {
                  "ja": "Main TXN Current TXNDataIdentifierをハイライト表示",
                  "en": "Highlight the Main TXN Current TXNDataIdentifier."
                },
                "Text40": {
                  "ja": "トランザクションの詳細から、エンコードされた識別子の値を選択",
                  "en": "Select the encoded Identifier value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 4,
              "StepNo": numPog + 9,
              "Languages": {
                "Text41": {
                  "ja": "Base64Encodeされた識別子の保存",
                  "en": "Save Base64 Encoded Identifier"
                },
                "Text42": {
                  "ja": "将来の使用のために、base64 エンコードされた 識別子の 値を保存",
                  "en": "Save the base64 encoded Identifier value for future usage."
                },
                "Text201": {
                  "ja": "識別子 (base64)",
                  "en": "Identifier (base64)"
                }
              }
            },
            {
              "SegmentNo": segPog + 4,
              "StepNo": numPog + 10,
              "Languages": {
                "Text45": {
                  "ja": "ステップ４ーMain TXN 識別子のデコード",
                  "en": "Step 4 - Decode Main TXN Identifier"
                },
                "Text46": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "Text47": {
                  "ja": "base64でエンコードされたMain TXN識別子をデコード",
                  "en": "Decode the base64 encoded Main TXN Identifier"
                },
                "Text48": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "Text49": {
                  "ja": "Main TXN 識別子を base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded Main TXN Identifier"
                },
                "Text50": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text51": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text52": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "Text53": {
                  "ja": "デコードされたMain TXN識別子の出力を取得",
                  "en": "Get the output of the decoded Main TXN Identifier"
                },
                "Text54": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "Text55": {
                  "ja": "将来の使用のためにデコードされたMain TXN識別子を保存",
                  "en": "Save the decoded Main TXN Identifier for future usage."
                },
                "Text105": {
                  "ja": "デコードされたMainTXN識別子",
                  "en": "Decoded Main TXN Identifier"
                },
                "Text220": {
                  "ja": "識別子",
                  "en": "Identifier"
                },
                "Text117": {
                  "ja": "MainTXN識別子",
                  "en": "MainTXN Identifier"
                },
                "Text237": {
                  "ja": "MainTXN識別子",
                  "en": "Main TXN Identifier"
                }
              }
            },
            {
              "SegmentNo": segPog + 5,
              "StepNo": numPog + 11,
              "Languages": {
                "Text56": {
                  "ja": "Base64 EncodedのProduct IDを選択",
                  "en": "Select Base64 Encoded Product ID"
                },
                "Text57": {
                  "ja": "取引内容からエンコードされたプロダクトIDを選択",
                  "en": "Select the encoded Product ID from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 5,
              "StepNo": numPog + 12,
              "Languages": {
                "Text58": {
                  "ja": "product Id をハイライト表示",
                  "en": "Highlight the product Id"
                },
                "Text59": {
                  "ja": "取引内容からエンコードされたProduct IDを選択",
                  "en": "Select the encoded Product ID from the transaction details"
                },
                "Text60": {
                  "ja": "Main TXN Current TXN Data Product Idをハイライト表示",
                  "en": "Highlight the Main TXN Current TXN Data Product Id"
                },
                "Text61": {
                  "ja": "トランザクションの詳細から、エンコードされたProduct IDの値を選択",
                  "en": "Select the encoded Product ID value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPog + 5,
              "StepNo": numPog + 13,
              "Languages": {
                "Text62": {
                  "ja": "Base64EncodeされたProduct IDの保存",
                  "en": "Save Base64 Encoded Product ID"
                },
                "Text63": {
                  "ja": "将来の使用のために、Base64エンコードされたProduct IDの値を保存",
                  "en": "Save the base64 encoded Product ID value for future usage."
                },
                "Text202": {
                  "ja": "製品 ID (base64)",
                  "en": "Product ID (base64)"
                }
              }
            },
            {
              "SegmentNo": segPog + 6,
              "StepNo": numPog + 14,
              "Languages": {
                "Text64": {
                  "ja": "ステップー５Main TXN Product IDのデコード",
                  "en": "Step 5 - Decode Main TXN Product ID"
                },
                "Text65": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "Text66": {
                  "ja": "Main TXN Product ID を base64 でデコード",
                  "en": "Decode the base64 encoded Main TXN Product ID"
                },
                "Text67": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "Text68": {
                  "ja": "Main TXN Product ID を base64 でエンコードして入力",
                  "en": "Input the base64 encoded Main TXN Product ID"
                },
                "Text69": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text70": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text71": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "Text72": {
                  "ja": "デコードしたMain TXN Product IDの出力を取得",
                  "en": "Get the output of the decoded Main TXN Product ID"
                },
                "Text73": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "Text74": {
                  "ja": "将来の使用のためにデコードされたMain TXN Product IDを保存",
                  "en": "Save the decoded Main TXN Product ID for future usage."
                },
                "Text106": {
                  "ja": "デコードされたMain TXN Product ID",
                  "en": "Decoded Main TXN Product ID"
                },
                "Text221": {
                  "ja": "製品番号",
                  "en": "ProductID"
                },
                "Text238": {
                  "ja": "MainTXN製品番号",
                  "en": "MainTXN ProductID"
                }
              }
            },
            {
              "SegmentNo": segPog + 6,
              "StepNo": numPog + 15,
              "Languages": {
                "Text75": {
                  "ja": "Base64Encodeされた前のTXNを選択",
                  "en": "Select Base64 Encoded Previous TXN"
                },
                "Text76": {
                  "ja": "トランザクションの詳細から、エンコードされた前のTXNハッシュ値を選択",
                  "en": "Select the encoded Previous TXN Hash value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 6,
              "StepNo": numPog + 16,
              "Languages": {
                "Text77": {
                  "ja": "前のTXNをハイライト表示",
                  "en": "Highlight the Previous TXN"
                },
                "Text78": {
                  "ja": "トランザクションの詳細からエンコードされた前のTXNハッシュを選択",
                  "en": "Select the encoded Previous TXN Hash from the transaction details."
                },
                "Text79": {
                  "ja": "Main TXN Previous TXNをハイライト表示",
                  "en": "Highlight the Main TXN Previous TXN"
                },
                "Text80": {
                  "ja": "トランザクションの詳細から、エンコードされたMain TXN Previous TXNハッシュ値を選択",
                  "en": "Select the encoded Main TXN Previous TXN Hash value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 6,
              "StepNo": numPog + 17,
              "Languages": {
                "Text81": {
                  "ja": "Base64エンコードされた前のTXNの保存",
                  "en": "Save Base64 Encoded Previous TXN"
                },
                "Text82": {
                  "ja": "将来の使用のためにBase64エンコードされた前のTXNハッシュ値を保存",
                  "en": "Save the base64 encoded Previous TXN Hash value for future usage."
                },
                "Text203": {
                  "ja": "PreviousTXN ハッシュ (base64)",
                  "en": "PreviousTXN Hash (base64)"
                }
              }
            },
            {
              "SegmentNo": segPog + 7,
              "StepNo": numPog + 18,
              "Languages": {
                "Text83": {
                  "ja": "Base64 Encodedトランザクションタイプの選択",
                  "en": "Select Base64 Encoded Transaction Type"
                },
                "Text84": {
                  "ja": "トランザクションの詳細から、エンコードされたトランザクションタイプの値を選択",
                  "en": "Select the encoded Transaction Type value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 7,
              "StepNo": numPog + 19,
              "Languages": {
                "Text85": {
                  "ja": "タイプをハイライト表示",
                  "en": "Highlight the Type"
                },
                "Text86": {
                  "ja": "トランザクションの詳細から、エンコードされたトランザクションタイプを選択",
                  "en": "Select the encoded Transaction Type from the transaction details."
                },
                "Text87": {
                  "ja": "Main TXN Typeをハイライト表示",
                  "en": "Highlight the Main TXN Type"
                },
                "Text88": {
                  "ja": "トランザクションの詳細から、エンコードされたトランザクションタイプの値を選択",
                  "en": "Select the encoded Transaction Type value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPog + 7,
              "StepNo": numPog + 20,
              "Languages": {
                "Text89": {
                  "ja": "Base64エンコードされた前のTXNの保存",
                  "en": "Save Base64 Encoded Previous TXN"
                },
                "Text90": {
                  "ja": "将来の使用のためにBase64エンコードされた前のTXNハッシュ値を保存",
                  "en": "Save the base64 encoded Previous TXN Hash value for future usage."
                },
                "Text204": {
                  "ja": "トランザクション タイプ (base64)",
                  "en": "Transaction Type (base64)"
                }
              }
            },
            {
              "SegmentNo": segPog + 7,
              "StepNo": numPog + 21,
              "Languages": {
                "Text91": {
                  "ja": "ステップ４－トランザクションタイプをデコード",
                  "en": "Step 04 - Decode Transaction Type"
                },
                "Text92": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "Text93": {
                  "ja": "base64でエンコードされたトランザクションタイプをデコード",
                  "en": "Decode the base64 encoded Transaction Type"
                },
                "Text94": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "Text95": {
                  "ja": "Base64でエンコードされたトランザクションタイプを入力",
                  "en": "Input the base64 encoded Transaction Type"
                },
                "Text96": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text97": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text98": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "Text99": {
                  "ja": "デコードしたトランザクションタイプの出力を取得",
                  "en": "Get the output of the decoded Transaction Type"
                },
                "Text100": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "Text101": {
                  "ja": "将来の使用のためにデコードしたトランザクションタイプを保存",
                  "en": "Save the decoded Transaction Type for future usage."
                },
                "Text107": {
                  "ja": "デコードされたトランザクションのタイプ",
                  "en": "Decoded Transaction Type"
                },
                "Text222": {
                  "ja": "取引タイプ",
                  "en": "Transaction Type"
                }
              }
            },
            {
              "SegmentNo": segPog + 8,
              "StepNo": numPog + 22,
              "Languages": {
                "Text102": {
                  "ja": "ステップ５－検証の概要",
                  "en": "Step 05 - Verification Summary"
                },
                "Text103": {
                  "ja": "検証の概要",
                  "en": "Verification Summary"
                },
                "Text233": {
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
              "Source": "../../../../assets/img/Group.png"
            },
            {
              "NO": segPoe + 2,
              "Name": "&{SegName11}",
              "Source": "../../../../assets/img/Group 6.png"
            },
            {
              "NO": segPoe + 3,
              "Name": "&{SegName12}",
              "Source": ""
            },
            {
              "NO": segPoe + 4,
              "Name": "&{SegName13}",
              "Source": "../../../../assets/img/Group 6.png"
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
                "ActionDescription": "Retrieve TDP data from Tracified Gateway.",
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
                    "ActionTitle": "&{Text149}",
                    "ActionDescription": "&{Text2}",
                    "FrameTitle_1": "&{Text3}",
                    "ActionTitle_1": "&{Text4}",
                    "ActionDescription_1": "&{Text5}",
                    "FrameTitle_2": "&{Text6}",
                    "ActionTitle_2": "&{Text7}",
                    "ActionDescription_2": "&{Text8}",
                    "TXNHash": node.TrustLinks[0],
                    "OperationName": "&{Text1}",
                    "ResponseVariable": "MainTDPDataString",
                    "JSONResultVariable": "MainTDPData",
                    "StartedProofType":"POE",
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
                "ActionTitle": "&{Text9}",
                "ActionDescription": "&{Text10}",
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
                    "ActionTitle": "&{Text12}",
                    "ActionDescription": "&{Text13}",
                    "FrameTitle_1": "&{Text14}",
                    "ActionTitle_1": "&{Text15}",
                    "ActionDescription_1": "&{Text16}",
                    "OperationKey": "Identifier",
                    "OperationValue": "TDPIdentifier",
                    "OperationKeyName": "identifier from the TDP details",
                    "OperationValueName": "identifier from the TDP details"
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
                "ActionTitle": "&{Text17}",
                "ActionDescription": "&{Text18}",
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
                      "Key": "&{Text205}",
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
                "SegmentNo": segPoe + 1,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text20}",
                "ActionDescription": "&{Text21}",
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
                "ActionResultVariable": "TDPDatahash",
                "MetaData": [
                  "MainTDPData",
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
                    "ActionTitle": "&{Text23}",
                    "ActionDescription": "&{Text24}",
                    "FrameTitle_1": "&{Text25}",
                    "ActionTitle_1": "&{Text26}",
                    "ActionDescription_1": "&{Text27}",
                    "OperationKey": "DataHash",
                    "OperationValue": "TDPDatahash",
                    "OperationKeyName": "Datahash from the TDP details",
                    "OperationValueName": "Datahash from the TDP details"
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
                "ActionTitle": "&{Text28}",
                "ActionDescription": "&{Text29}",
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
                      "Key": "&{Text206}",
                      "Value": "${TDPDatahash}",
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
                "ActionTitle": "&{Text31}",
                "ActionDescription": "&{Text32}",
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
                    "ActionTitle": "&{Text34}",
                    "ActionDescription": "&{Text35}",
                    "ActionTitle_1": "&{Text37}",
                    "ActionDescription_1": "&{Text38}",
                    "OperationKey": "Txnhash",
                    "OperationValue": "TDPTxnhash",
                    "OperationKeyName": "txnhash from the TDP details",
                    "OperationValueName": "txnhash from the TDP details"
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
                      "Key": "&{Text207}",
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
                "SegmentNo": segPoe + 2,
                "FrameID": 2,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "Retrieve TDP Transaction",
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
                    "FrameTitle": "&{Text42}",
                    "ActionTitle": "&{Text43}",
                    "ActionDescription": "&{Text44}",
                    "ActionTitle_1": "&{Text45}",
                    "ActionDescription_1": "&{Text46}",
                    "SegmentSource_1": "../../../../assets/img/Group 6.png",
                    "ActionTitle_2": "&{Text47}",
                    "ActionDescription_2": "&{Text48}",
                    "SegmentSource_2": "../../../../assets/img/Group 6.png",
                    "TXNHash": node.TrustLinks[0],
                    "ResponseVariable": "MainTXNDataString",
                    "OperationName": "current transaction",
                    "JSONResultVariable": "MainTXNData",
                    "StartedProofType":"",
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
                "ActionTitle": "&{Text49}",
                "ActionDescription": "&{Text50}",
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
                    "ActionTitle": "&{Text51}",
                    "ActionDescription": "&{Text52}",
                    "ActionTitle_1": "&{Text53}",
                    "ActionDescription_1": "&{Text54}",
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
                "StepNo": numPoe + 14,
                "SegmentNo": segPoe + 3,
                "FrameID": 2,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text55}",
                "ActionDescription": "&{Text56}",
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
                      "Key": "&{Text208}",
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
                    "FrameTitle": "&{Text58}",
                    "ActionTitle": "&{Text59}",
                    "ActionDescription": "&{Text60}",
                    "ActionTitle_1": "&{Text61}",
                    "ActionDescription_1": "&{Text62}",
                    "ActionTitle_2": "&{Text63}",
                    "ActionDescription_2": "&{Text64}",
                    "ActionTitle_3": "&{Text65}",
                    "ActionDescription_3": "&{Text66}",
                    "ActionTitle_4": "&{Text67}",
                    "ActionDescription_4": "&{Text68}",
                    "InformationStorageKey": "&{Text223}",
                    "ToastMessage": "&{Text70}",
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
                    "ActionTitle": "&{Text73}",
                    "ActionDescription": "&{Text74}",
                    "ActionTitle_1": "&{Text76}",
                    "ActionDescription_1": "&{Text77}",
                    "SegmentSource_1": "../../../../assets/img/Group 6.png",
                    "ActionTitle_2": "&{Text125}",
                    "ActionDescription_2": "&{Text125}",
                    "SegmentSource_2": "../../../../assets/img/Group 6.png",
                    "FrameTitle": "&{Text71}",
                    "TXNHash": "${var_currenttxn}",
                    "OperationName": "&{Text72}",
                    "ResponseVariable": "MainTXNCurentTXNDataString",
                    "JSONResultVariable": "MainTXNCurentTXNData",
                    "StartedProofType":"",
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
                "ActionTitle": "&{Text78}",
                "ActionDescription": "&{Text79}",
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
                    "ActionTitle": "&{Text81}",
                    "ActionDescription": "&{Text82}",
                    "FrameTitle_1": "&{Text83}",
                    "ActionTitle_1": "&{Text84}",
                    "ActionDescription_1": "&{Text85}",
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
                "StepNo": numPoe + 19,
                "SegmentNo": segPoe + 5,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text87}",
                "ActionDescription": "&{Text88}",
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
                      "Key": "&{Text209}",
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
                    "FrameTitle": "&{Text90}",
                    "ActionTitle": "&{Text91}",
                    "ActionDescription": "&{Text92}",
                    "ActionTitle_1": "&{Text93}",
                    "ActionDescription_1": "&{Text94}",
                    "ActionTitle_2": "&{Text95}",
                    "ActionDescription_2": "&{Text127}",
                    "ActionTitle_3": "&{Text128}",
                    "ActionDescription_3": "&{Text129}",
                    "ActionTitle_4": "&{Text130}",
                    "ActionDescription_4": "&{Text131}",
                    "InformationStorageKey": "&{Text224}",
                    "ToastMessage": "&{Text133}",
                    "DecodeKeyName": "&{Text246}",
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
                "StepNo": numPoe + 21,
                "SegmentNo": segPoe + 5,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text96}",
                "ActionDescription": "&{Text97}",
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
                    "ActionTitle": "&{Text100}",
                    "ActionDescription": "&{Text101}",
                    "ActionTitle_1": "&{Text102}",
                    "ActionDescription_1": "&{Text103}",
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
                "StepNo": numPoe + 23,
                "SegmentNo": segPoe + 5,
                "FrameID": 4,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text106}",
                "ActionDescription": "&{Text107}",
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
                      "Key": "&{Text210}",
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
                    "FrameTitle": "&{Text110}",
                    "ActionTitle": "&{Text111}",
                    "ActionDescription": "&{Text112}",
                    "ActionTitle_1": "&{Text113}",
                    "ActionDescription_1": "&{Text134}",
                    "ActionTitle_2": "&{Text135}",
                    "ActionDescription_2": "&{Text136}",
                    "ActionTitle_3": "&{Text137}",
                    "ActionDescription_3": "&{Text138}",
                    "ActionTitle_4": "&{Text139}",
                    "ActionDescription_4": "&{Text140}",
                    "ToastMessage": "&{Text141}",
                    "EncodedInputValue": "${MainTXNCurentTXNDatadatahash}",
                    "DecodedResultVariable": "MainTXNCurentTXNDatadatahashDecoded",
                    "InformationStorageKey": "&{Text225}",
                    "DecodeKeyName": "&{Text247}"
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
                    "FrameTitle": "&{Text115}",
                    "ActionTitle": "&{Text116}",
                    "ActionDescription": "&{Text117}",
                    "FrameTitle_1": "&{Text118}",
                    "ActionTitle_1": "&{Text119}",
                    "ActionDescription_1": "&{Text142}",
                    "FrameTitle_2": "&{Text143}",
                    "ActionTitle_2": "&{Text144}",
                    "ActionDescription_2": "&{Text145}",
                    "FrameTitle_3": "&{Text146}",
                    "ActionTitle_3": "&{Text147}",
                    "ActionDescription_3": "&{Text148}",
                    "ToastMessage": "&{Text154}",
                    "InputKeyName": "the base64 decoded Datahash values from the transactions.",
                    "InputValue": "[{\"title\": \"Identifiers from the TDP and Blockchain transaction\", \"t1\": \"${MainTXNCurentTXNDatadatahashDecoded}\", \"t2\": \"${TDPDatahash}\"}]"
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
                "FrameTitle": "&{Text120}"
              },
              "Action": {
                "ActionTitle": "&{Text121}",
                "ActionDescription": "&{Text121}",
                "ActionType": "BrowserScreen",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/checked.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#098260; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Completed Successfully!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF EXISTENCE</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Identifier</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n${TDPIdentifier}\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n ${var_currenttxn}\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "InnerHTMLError": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center mt-2\"><center><img src=\"../../../../assets/img/cancel.png\" style=\"width:50px; margin-top:5px;\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#F15249; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Failed!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF EXISTENCE</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Identifier</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n${TDPIdentifier}\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n ${var_currenttxn}\r\n </p></td></tr></tbody></table></div></div></body></html>",
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
                "ToastMessage1": "&{Text234}",
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
                "Text0": {
                  "ja": "ステップ1-TDPデータの取得",
                  "en": "Step 1 - Retrieve TDP Data"
                },
                "Text149": {
                  "ja": "TDPデータ要求",
                  "en": "Request TDP Data"
                },
                "Text1": {
                  "ja": "現在のTDP",
                  "en": "Current TDP"
                },
                "Text2": {
                  "ja": "Tracified GatewayからTDPデータを取得",
                  "en": "Retrieve TDP data from Tracified Gateway."
                },
                "Text3": {
                  "ja": "ステップ1-TDPデータの取得",
                  "en": "Step 1 - Retrieve TDP Data"
                },
                "Text4": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "Text5": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "Text6": {
                  "ja": "ステップ1-TDPデータの取得",
                  "en": "Step 1 - Retrieve TDP Data"
                },
                "Text7": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text8": {
                  "ja": "トランザクションデータをJSONにフォーマット(Javascriptオブジェクト記法)",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 2,
              "Languages": {
                "Text9": {
                  "ja": "TDP識別子の選択",
                  "en": "Select TDP identifier"
                },
                "Text10": {
                  "ja": "TDP詳細から識別子を選択",
                  "en": "Select the identifier from TDP details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 3,
              "Languages": {
                "Text11": {
                  "ja": "TDPの詳細からの識別子",
                  "en": "identifier from the TDP details"
                },
                "Text12": {
                  "ja": "識別子をハイライト表示",
                  "en": "Highlight the Identifier"
                },
                "Text13": {
                  "ja": "TDP詳細から識別子を選択",
                  "en": "Select the identifier from the TDP details"
                },
                "Text14": {
                  "ja": "テスト",
                  "en": "test"
                },
                "Text15": {
                  "ja": "識別子をハイライト表示",
                  "en": "Highlight the TDPIdentifier"
                },
                "Text16": {
                  "ja": "TDP詳細から識別子を選択",
                  "en": "Select the identifier from the TDP details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 4,
              "Languages": {
                "Text17": {
                  "ja": "TDP 識別子の保存",
                  "en": "Save TDP Identifier"
                },
                "Text18": {
                  "ja": "将来の使用のために識別子の値を保存する",
                  "en": "Save the Identifier value for future usage."
                },
                "Text205": {
                  "ja": "TDP識別子",
                  "en": "TDP Identifier"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 5,
              "Languages": {
                "Text20": {
                  "ja": "TDP Data Hashの選択",
                  "en": "Select TDP Data Hash"
                },
                "Text21": {
                  "ja": "TDPの詳細からデータハッシュを選択",
                  "en": "Select the Data Hash from TDP details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 6,
              "Languages": {
                "Text22": {
                  "ja": "TDPの詳細からダータハッシュ",
                  "en": "Data Hash from the TDP details"
                },
                "Text23": {
                  "ja": "ダータハッシュをハイライト表示",
                  "en": "Highlight the Data Hash"
                },
                "Text24": {
                  "ja": "TDPの詳細からデータハッシュを選択",
                  "en": "Select the Data Hash from the TDP details"
                },
                "Text25": {
                  "ja": "テスト",
                  "en": "test"
                },
                "Text26": {
                  "ja": "TDPデータハッシュのハイライト",
                  "en": "Highlight the TDP Data Hash"
                },
                "Text27": {
                  "ja": "TDPの詳細からデータハッシュを選択",
                  "en": "Select the Data Hash from the TDP details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 1,
              "StepNo": numPoe + 7,
              "Languages": {
                "Text28": {
                  "ja": "TDPデータハッシュの保存",
                  "en": "Save TDP Data Hash"
                },
                "Text29": {
                  "ja": "将来の使用のためにデータハッシュ値の保存",
                  "en": "Save Data Hash value for future usage."
                },
                "Text206": {
                  "ja": "TDP データハッシュ",
                  "en": "TDP Data Hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 8,
              "Languages": {
                "Text31": {
                  "ja": "TDP Txn Hashを選択",
                  "en": "Select TDP Txn Hash"
                },
                "Text32": {
                  "ja": "TDPの詳細からTxn Hashを選択",
                  "en": "Select the Txn Hash from TDP details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 9,
              "Languages": {
                "Text34": {
                  "ja": "Txn Hashのハイライト",
                  "en": "Highlight the Txn Hash"
                },
                "Text35": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the txn Hash from the TDP details"
                },
                "Text37": {
                  "ja": "TDP Txn Hashをハイライト",
                  "en": "Highlight the TDP Txn Hash"
                },
                "Text38": {
                  "ja": "TDPの詳細からtxn Hashを選択",
                  "en": "Select the txn Hash from the TDP details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 10,
              "Languages": {
                "Text39": {
                  "ja": "TDP Txn Hashを保存",
                  "en": "Save TDP Txn Hash"
                },
                "Text40": {
                  "ja": "将来の使用のためにTxn Hashの値を保存",
                  "en": "Save Txn Hash value for future usage."
                },
                "Text207": {
                  "ja": "TDP Txn Hash",
                  "en": "TDP Txn Hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 11,
              "Languages": {
                "Text42": {
                  "ja": "ステップ５ーTDPトランザクションの取得",
                  "en": "Step 5 - Retrieve TDP Transaction"
                },
                "Text43": {
                  "ja": "ステラホライズンAPIをリクエスト",
                  "en": "Request Stellar Horizon API"
                },
                "Text44": {
                  "ja": "ステラブロックチェーンから現在の取引を取得",
                  "en": "Retrieve the current transaction from Stellar Blockchain."
                },
                "Text45": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "Text46": {
                  "ja": "トランザクションのレスポンスデータを保存",
                  "en": "Save the response data of the transaction"
                },
                "Text47": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text48": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 12,
              "Languages": {
                "Text49": {
                  "ja": "Current TXNハッシュの選択",
                  "en": "Select Current TXN Hash"
                },
                "Text50": {
                  "ja": "トランザクションの詳細からCurrent TXNハッシュ（base64エンコード）を選択",
                  "en": "Select the Current TXN Hash (base64 encoded) from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 2,
              "StepNo": numPoe + 13,
              "Languages": {
                "Text51": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュをハイライト",
                  "en": "Highlight the encoded Current TXN Hash from the transaction details"
                },
                "Text52": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュを選択",
                  "en": "Select the encoded Current TXN Hash from the transaction details"
                },
                "Text53": {
                  "ja": "トランザクションの詳細から、エンコードされたCurrent TXNハッシュ値をハイライト",
                  "en": "Highlight the encoded Current TXN Hash value from the transaction details"
                },
                "Text54": {
                  "ja": "トランザクションの詳細からエンコードされたCurrent TXNハッシュ値を選択",
                  "en": "Select the encoded Current TXN Hash value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 3,
              "StepNo": numPoe + 14,
              "Languages": {
                "Text55": {
                  "ja": "Base64エンコードされたCurrent TXNの保存",
                  "en": "Save Base64 Encoded Current TXN"
                },
                "Text56": {
                  "ja": "将来の使用のためにBase64でエンコードされたCurrent TXNハッシュ値を保存",
                  "en": "Save the base64 encoded Current TXN Hash value for future usage."
                },
                "Text208": {
                  "ja": "Current TXN (ベース64)",
                  "en": "Current TXN (base64)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 3,
              "StepNo": numPoe + 15,
              "Languages": {
                "Text58": {
                  "ja": "ステップ１５ - 現在のTXNをデコード",
                  "en": "Step 15 - Decode Current TXN"
                },
                "Text59": {
                  "ja": "base64デコードのサイトを読み込む",
                  "en": "Load the base64 decode website"
                },
                "Text60": {
                  "ja": "Base64でエンコードされたCurrent TXNハッシュをデコードする",
                  "en": "Decode the base64 encoded Current TXN Hash"
                },
                "Text61": {
                  "ja": "Base64でエンコードされた現在のTXNハッシュを入力",
                  "en": "Input base64 encoded current txn hash"
                },
                "Text62": {
                  "ja": "Base64でエンコードされたCurrent TXNハッシュを入力する",
                  "en": "Input the base64 encoded Current TXN Hash"
                },
                "Text63": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click decode button"
                },
                "Text64": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text65": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "Text66": {
                  "ja": "デコードされた現在のTXNハッシュの出力を取得",
                  "en": "Get the output of the decoded current txn hash"
                },
                "Text67": {
                  "ja": "デコードした値を情報ストレージに保存",
                  "en": "Save the decoded value in information storage"
                },
                "Text68": {
                  "ja": "将来の使用のためにデコードされたCurrent TXNハッシュを保存",
                  "en": "Save the decoded Current TXN Hash for future usage."
                },
                "Text223": {
                  "ja": "現TXNハッシュ（デコード済み）",
                  "en": "Current txn Hash (decoded)"
                },
                "Text70": {
                  "ja": "デコードされた現在のTXNハッシュ",
                  "en": "Decoded current txn hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 4,
              "StepNo": numPoe + 16,
              "Languages": {
                "Text71": {
                  "ja": "ステップ１６ー現在の取引の取得",
                  "en": "Step 16 - Retrieve Current Transaction"
                },
                "Text72": {
                  "ja": "ゲートウェイトランザクションの現在のトランザクション",
                  "en": "current transaction of the gateway transaction"
                },
                "Text73": {
                  "ja": "ステラホライズンAPIをリクエスト",
                  "en": "Request Stellar Horizon API"
                },
                "Text74": {
                  "ja": "ゲートウェイトランザクションの現在のトランザクションをStellar Blockchainから取得",
                  "en": "Retrieve the current transaction of the gateway transaction from Stellar Blockchain."
                },
                "Text76": {
                  "ja": "API レスポンスの保存",
                  "en": "Save API Response"
                },
                "Text77": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "Text125": {
                  "ja": "フォーマットレスポンス（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text126": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 17,
              "Languages": {
                "Text78": {
                  "ja": "Base64 Encoded Current Txn 識別子 を選択",
                  "en": "Select Base64 Encoded Current Txn Identifier"
                },
                "Text79": {
                  "ja": "トランザクションの詳細から、エンコードされたcurrent Txn Identifierを選択",
                  "en": "Select the encoded current Txn Identifier from the transaction details."
                },
                "Text80": {
                  "ja": "フォーマットメタデータ",
                  "en": "Format Meta Data"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 18,
              "Languages": {
                "Text81": {
                  "ja": "トランザクションの詳細からエンコードされたIdentifierをハイライト",
                  "en": "Highlight the encoded Identifier from the transaction details"
                },
                "Text82": {
                  "ja": "トランザクションの詳細から、エンコードされたIdentifierの値を選択",
                  "en": "Select the encoded Identifier value from the transaction details"
                },
                "Text83": {
                  "ja": "テスト",
                  "en": "test"
                },
                "Text84": {
                  "ja": "トランザクションの詳細からMainTXNCurrent TXNDataIdentifierをハイライト",
                  "en": "Highlight the MainTXNCurrent TXNDataIdentifier from the transaction details"
                },
                "Text85": {
                  "ja": "トランザクションの詳細から、エンコードされたIdentifierの値を選択",
                  "en": "Select the encoded Identifier value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 19,
              "Languages": {
                "Text87": {
                  "ja": "Base64エンコードされたCurrent TXNの保存",
                  "en": "Save Base64 Encoded Current Txn Identifier"
                },
                "Text88": {
                  "ja": "将来の使用のためにbase64 エンコードされた Identifier 値を保存",
                  "en": "Save the base64 encoded Identifier value for future usage."
                },
                "Text89": {
                  "ja": "情報ストレージ",
                  "en": "InformationStorage"
                },
                "Text209": {
                  "ja": "識別子 (base64)",
                  "en": "Identifier (base64)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 20,
              "Languages": {
                "Text90": {
                  "ja": "ステップ５ー現在のTXN識別子のデコード",
                  "en": "Step 5 - Decode Current TXN Identifier"
                },
                "Text91": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "Text92": {
                  "ja": "base64 でエンコードされた Current TXN 識別子をデコード",
                  "en": "Decode the base64 encoded Current TXN Identifier"
                },
                "Text93": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "Text94": {
                  "ja": "Base64 でエンコードされた Current TXN 識別子を入力",
                  "en": "Input the base64 encoded Current TXN Identifier"
                },
                "Text95": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the Decode Button"
                },
                "Text127": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text128": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "Text129": {
                  "ja": "デコードしたCurrent TXN識別子の出力を取得",
                  "en": "Get the output of the decoded Current TXN Identifier"
                },
                "Text130": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "Text131": {
                  "ja": "将来の使用のためにデコードされたCurrent TXN識別子を保存",
                  "en": "Save the decoded Current TXN Identifier for future usage."
                },
                "Text224": {
                  "ja": "Current TXN識別子",
                  "en": "Current TXN Identifier"
                },
                "Text133": {
                  "ja": "デコードされた Current TXN 識別子",
                  "en": "Decoded Current TXN Identifier"
                },
                "Text246": {
                  "ja": "Current TXN識別子",
                  "en": "Current TXN Identifier"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 21,
              "Languages": {
                "Text96": {
                  "ja": "Base64EncodeされたData Hashを選択",
                  "en": "Select Base64 Encoded Data Hash"
                },
                "Text97": {
                  "ja": "トランザクションの詳細からエンコードされたデータハッシュを選択",
                  "en": "Select the encoded Data Hash from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 22,
              "Languages": {
                "Text100": {
                  "ja": "データハッシュをハイライト",
                  "en": "Highlight the Data Hash"
                },
                "Text101": {
                  "ja": "トランザクションの詳細からエンコードされたデータハッシュを選択",
                  "en": "Select the encoded Data Hash from the transaction details."
                },
                "Text102": {
                  "ja": "Main TXN Current TXNデータハッシュをハイライト",
                  "en": "Highlight the Main TXN Current TXN Data Data Hash"
                },
                "Text103": {
                  "ja": "トランザクションの詳細からエンコードされたデータハッシュの値を選択",
                  "en": "Select the encoded Data Hash value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 23,
              "Languages": {
                "Text106": {
                  "ja": "Base64Encodeされたデータハッシュの保存",
                  "en": "Save Base64 Encoded Data Hash"
                },
                "Text107": {
                  "ja": "将来の使用のためにbase64でエンコードされたデータハッシュの値を保存",
                  "en": "Save the base64 encoded Data Hash value for future usage."
                },
                "Text210": {
                  "ja": "Current TXN データハッシュ（base64）。",
                  "en": "Current TXN Data Hash (base64)"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 24,
              "Languages": {
                "Text110": {
                  "ja": "ステップ９－現在のTXNデータハッシュのデコード",
                  "en": "Step 9 - Decode Current TXN Data Hash"
                },
                "Text111": {
                  "ja": "Base64 Decoderのウェブページを読み込む",
                  "en": "Load Base64 Decoder Webpage"
                },
                "Text112": {
                  "ja": "Base64でエンコードされたCurrent TXNのData Hashをデコード",
                  "en": "Decode the base64 encoded Current TXN Data Hash"
                },
                "Text113": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64 Encoded Data"
                },
                "Text134": {
                  "ja": "Base64でエンコードされたCurrent TXN データハッシュを入力",
                  "en": "Input the base64 encoded Current TXN Data Hash"
                },
                "Text135": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text136": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text137": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64 Decoded Data"
                },
                "Text138": {
                  "ja": "デコードされたCurrent TXNの出力を取得する データハッシュ",
                  "en": "Get the output of the decoded Current TXN Data Hash"
                },
                "Text139": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64 Decoded Data"
                },
                "Text140": {
                  "ja": "将来の使用のためにデコードされたCurrent TXNデータハッシュ",
                  "en": "Save the decoded Current TXN Data Hash for future usage."
                },
                "Text141": {
                  "ja": "デコードされたCurrent TXN データハッシュ",
                  "en": "Decoded Current TXN Data Hash"
                },
                "Text225": {
                  "ja": "Current TXN データハッシュ",
                  "en": "CurrentTXN data hash"
                },
                "Text247": {
                  "ja": "Current TXN データハッシュ",
                  "en": "CurrentTXN data hash"
                }
              }
            },
            {
              "SegmentNo": segPoe + 5,
              "StepNo": numPoe + 25,
              "Languages": {
                "Text115": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Step 10 - Compare Data Hash"
                },
                "Text116": {
                  "ja": "オンラインテキスト比較のWebページ",
                  "en": "Online Text Comparison Webpage"
                },
                "Text117": {
                  "ja": "オンラインテキスト比較のウェブページを読み込む",
                  "en": "Load the online text comparison webpage"
                },
                "Text118": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Step 10 - Compare Data Hash"
                },
                "Text119": {
                  "ja": "入力の比較値",
                  "en": "Input comparison values"
                },
                "Text142": {
                  "ja": "トランザクションからBase64デコードされたデータハッシュ値を入力",
                  "en": "Input the base64 decoded Data Hash values from the transactions."
                },
                "Text143": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Step 10 - Compare Data Hash"
                },
                "Text144": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "Text145": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "Text146": {
                  "ja": "ステップ１０－データハッシュの比較",
                  "en": "Step 10 - Compare Data Hash"
                },
                "Text147": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "Text148": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "Text154": {
                  "ja": "klll",
                  "en": "Comparison Result"
                }
              }
            },
            {
              "SegmentNo": 15,
              "StepNo": numPoe + 26,
              "Languages": {
                "Text120": {
                  "ja": "ステップ１１－検証の概要",
                  "en": "Step 11 - Verification Summary"
                },
                "Text121": {
                  "ja": "検証の概要",
                  "en": "Verification Summary"
                },
                "Text123": {
                  "ja": "検証の概要についてー存在の証明",
                  "en": "about: Verification Summary - PROOF OF THE EXISTENCE"
                },
                "Text234": {
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
          break;
        case "pobl":
          let segPobl = this.pocProofJson.Header.Segments[this.pocProofJson.Header.Segments.length - 1].NO
          let numPobl = this.pocProofJson.Steps[this.pocProofJson.Steps.length - 1].StepHeader.StepNo
          let poblSegments = [
            {
              "NO": segPobl + 1,
              "Name": "&{SegName16}",
              "Source": "../../../../assets/img/Group 6.png"
            },
            {
              "NO": segPobl + 2,
              "Name": "&{SegName17}",
              "Source": ""
            },
            {
              "NO": segPobl + 3,
              "Name": "&{SegName18}",
              "Source": "../../../../assets/img/Group 6.png"
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
              "Source": "../../../../assets/img/Group 6.png"
            },
            {
              "NO": segPobl + 8,
              "Name": "&{SegName23}",
              "Source": ""
            },
            {
              "NO": segPobl + 9,
              "Name": "&{SegName24}",
              "Source": "../../../../assets/img/Group 6.png"
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
                "ActionTitle": "&{Text0}",
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
                    "FrameTitle": "&{Text1}",
                    "ActionTitle": "&{Text2}",
                    "ActionDescription": "&{Text3}",
                    "ActionTitle_1": "&{Text4}",
                    "ActionDescription_1": "&{Text5}",
                    "ActionTitle_2": "&{Text6}",
                    "ActionDescription_2": "&{Text7}",
                    "TXNHash": node.TrustLinks[0],
                    "OperationName": "current transaction",
                    "ResponseVariable": "MainTXNDataString",
                    "JSONResultVariable": "MainTXNData",
                    "StartedProofType":"POBL",
                    "TrustLinks":[node.TrustLinks[0], node.TrustLinks[1]],
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
                "ActionTitle": "&{Text8}",
                "ActionDescription": "&{Text9}",
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
                    "StepNo": numPobl + 6,
                    "SegmentNo": segPobl + 2,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text10}",
                    "ActionDescription": "&{Text11}",
                    "ActionTitle_1": "&{Text12}",
                    "ActionDescription_1": "&{Text13}",
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
                "ActionTitle": "&{Text14}",
                "ActionDescription": "&{Text15}",
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
                      "Key": "&{Text211}",
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
                    "FrameTitle": "&{Text16}",
                    "ActionTitle": "&{Text17}",
                    "ActionDescription": "&{Text18}",
                    "ActionTitle_1": "&{Text19}",
                    "ActionDescription_1": "&{Text20}",
                    "ActionTitle_2": "&{Text21}",
                    "ActionDescription_2": "&{Text22}",
                    "ActionTitle_3": "&{Text23}",
                    "ActionDescription_3": "&{Text24}",
                    "ActionTitle_4": "&{Text25}",
                    "ActionDescription_4": "&{Text26}",
                    "ToastMessage": "&{Text27}",
                    "DecodeKeyName": "&{Text237}",
                    "EncodedInputValue": "${MainTXNCurentTXNHash}",
                    "DecodedResultVariable": "var_currenttxn",
                    "InformationStorageKey": "&{Text226}"
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
                    "StepNo": numPobl + 6,
                    "SegmentNo": segPobl + 2,
                    "FrameID": 3,
                    "FrameTitle": "&{Text28}",
                    "ActionTitle": "&{Text29}",
                    "ActionDescription": "&{Text30}",
                    "ActionTitle_1": "&{Text31}",
                    "ActionDescription_1": "&{Text32}",
                    "ActionTitle_2": "&{Text33}",
                    "ActionDescription_2": "&{Text34}",
                    "TXNHash": "${var_currenttxn}",
                    "OperationName": "current transaction of the gateway transaction",
                    "ResponseVariable": "MainTXNCurentTXNDataString",
                    "JSONResultVariable": "MainTXNCurentTXNData",
                    "StartedProofType":"",
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
                "StepNo": numPobl + 7,
                "SegmentNo": segPobl + 4,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text35}",
                "ActionDescription": "&{Text36}",
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
                "StepNo": numPobl + 8,
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
                    "StepNo": numPobl + 8,
                    "SegmentNo": segPobl + 4,
                    "FrameID": 3,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text37}",
                    "ActionDescription": "&{Text38}",
                    "ActionTitle_1": "&{Text39}",
                    "ActionDescription_1": "&{Text40}",
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
                "StepNo": numPobl + 9,
                "SegmentNo": segPobl + 4,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text41}",
                "ActionDescription": "&{Text42}",
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
                      "Key": "&{Text212}",
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
                "StepNo": numPobl + 10,
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
                    "StepNo": numPobl + 10,
                    "SegmentNo": segPobl + 4,
                    "FrameID": 4,
                    "FrameTitle": "&{Text43}",
                    "ActionTitle": "&{Text44}",
                    "ActionDescription": "&{Text45}",
                    "ActionTitle_1": "&{Text46}",
                    "ActionDescription_1": "&{Text47}",
                    "ActionTitle_2": "&{Text48}",
                    "ActionDescription_2": "&{Text49}",
                    "ActionTitle_3": "&{Text50}",
                    "ActionDescription_3": "&{Text51}",
                    "ActionTitle_4": "&{Text52}",
                    "ActionDescription_4": "&{Text53}",
                    "ToastMessage": "&{Text54}",
                    "DecodeKeyName": "&{Text238}",
                    "EncodedInputValue": "${MainTXNCurentTXNDataIdentifier}",
                    "DecodedResultVariable": "MainTXNCurentTXNDataIdentifierDecoded",
                    "InformationStorageKey": "&{Text227}"
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
                "SegmentNo": segPobl + 5,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text55}",
                "ActionDescription": "&{Text56}",
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
                "StepNo": numPobl + 12,
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
                    "StepNo": numPobl + 12,
                    "SegmentNo": segPobl + 5,
                    "FrameID": 3,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text57}",
                    "ActionDescription": "&{Text58}",
                    "ActionTitle_1": "&{Text59}",
                    "ActionDescription_1": "&{Text60}",
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
                "StepNo": numPobl + 13,
                "SegmentNo": segPobl + 5,
                "FrameID": 3,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text60}",
                "ActionDescription": "&{Text61}",
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
                      "Key": "&{Text213}",
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
                "StepNo": numPobl + 14,
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
                    "StepNo": numPobl + 14,
                    "SegmentNo": segPobl + 5,
                    "FrameID": 3,
                    "FrameTitle": "&{Text62}",
                    "ActionTitle": "&{Text63}",
                    "ActionDescription": "&{Text64}",
                    "ActionTitle_1": "&{Text65}",
                    "ActionDescription_1": "&{Text66}",
                    "ActionTitle_2": "&{Text67}",
                    "ActionDescription_2": "&{Text68}",
                    "ActionTitle_3": "&{Text69}",
                    "ActionDescription_3": "&{Text70}",
                    "ActionTitle_4": "&{Text71}",
                    "ActionDescription_4": "&{Text72}",
                    "ToastMessage": "&{Text73}",
                    "DecodeKeyName": "&{Text239}",
                    "EncodedInputValue": "${MainTXNCurentTXNDataProductId}",
                    "DecodedResultVariable": "MainTXNCurentTXNDataProductIdDecoded",
                    "InformationStorageKey": "&{Text228}"
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
                "SegmentNo": segPobl + 6,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text74}",
                "ActionDescription": "&{Text75}",
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
                "StepNo": numPobl + 16,
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
                    "StepNo": numPobl + 16,
                    "SegmentNo": segPobl + 5,
                    "FrameID": 1,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text76}",
                    "ActionDescription": "&{Text77}",
                    "ActionTitle_1": "&{Text78}",
                    "ActionDescription_1": "&{Text79}",
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
                "StepNo": numPobl + 17,
                "SegmentNo": segPobl + 6,
                "FrameID": 1,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text80}",
                "ActionDescription": "&{Text81}",
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
                      "Key": "&{Text214}",
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
                "StepNo": numPobl + 18,
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
                    "StepNo": numPobl + 18,
                    "SegmentNo": segPobl + 6,
                    "FrameID": 1,
                    "FrameTitle": "&{Text82}",
                    "ActionTitle": "&{Text83}",
                    "ActionDescription": "&{Text84}",
                    "ActionTitle_1": "&{Text85}",
                    "ActionDescription_1": "&{Text86}",
                    "ActionTitle_2": "&{Text87}",
                    "ActionDescription_2": "&{Text88}",
                    "ActionTitle_3": "&{Text89}",
                    "ActionDescription_3": "&{Text90}",
                    "ActionTitle_4": "&{Text91}",
                    "ActionDescription_4": "&{Text92}",
                    "ToastMessage": "&{Text93}",
                    "DecodeKeyName": "&{Text240}",
                    "EncodedInputValue": "${MainTXNPreviousTXN}",
                    "DecodedResultVariable": "MainTXNPreviousTXNDecoded",
                    "InformationStorageKey": "&{Text229}"
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
                    "StepNo": numPobl + 19,
                    "SegmentNo": segPobl + 7,
                    "FrameID": 8,
                    "FrameTitle": "&{Text94}",
                    "ActionTitle": "&{Text95}",
                    "ActionDescription": "&{Text96}",
                    "ActionTitle_1": "&{Text97}",
                    "ActionDescription_1": "&{Text98}",
                    "ActionTitle_2": "&{Text99}",
                    "ActionDescription_2": "&{Text100}",
                    "TXNHash": "${MainTXNPreviousTXNDecoded}",
                    "OperationName": "Backlink transaction from Stellar Blockchain.",
                    "ResponseVariable": "MainTXNPreviousTXNDataString",
                    "JSONResultVariable": "MainTXNPreviousTXNData",
                    "StartedProofType":"",
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
                "StepNo": numPobl + 20,
                "SegmentNo": segPobl + 8,
                "FrameID": 8,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text101}",
                "ActionDescription": "&{Text102}",
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
                "StepNo": numPobl + 21,
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
                    "StepNo": numPobl + 21,
                    "SegmentNo": segPobl + 8,
                    "FrameID": 8,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text103}",
                    "ActionDescription": "&{Text104}",
                    "ActionTitle_1": "&{Text105}",
                    "ActionDescription_1": "&{Text106}",
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
                "StepNo": numPobl + 22,
                "SegmentNo": segPobl + 8,
                "FrameID": 8,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text107}",
                "ActionDescription": "&{Text108}",
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
                    "Type": "pobl",
                    "Key": "&{Text215}",
                    "Value": node.TrustLinks[1]
                  },
                  "StorageData": [
                    {
                      "Key": "&{Text216}",
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
                "StepNo": numPobl + 23,
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
                    "StepNo": numPobl + 23,
                    "SegmentNo": segPobl + 8,
                    "FrameID": 9,
                    "FrameTitle": "&{Text109}",
                    "ActionTitle": "&{Text110}",
                    "ActionDescription": "&{Text111}",
                    "ActionTitle_1": "&{Text112}",
                    "ActionDescription_1": "&{Text113}",
                    "ActionTitle_2": "&{Text114}",
                    "ActionDescription_2": "&{Text115}",
                    "ActionTitle_3": "&{Text116}",
                    "ActionDescription_3": "&{Text117}",
                    "ActionTitle_4": "&{Text118}",
                    "ActionDescription_4": "&{Text119}",
                    "ToastMessage": "&{Text120}",
                    "DecodeKeyName": "&{Text241}",
                    "EncodedInputValue": "${MainTXNPreviousTXNCurrentTXNHash}",
                    "DecodedResultVariable": "MainTXNPreviousTXNCurrentTXNHashDecoded",
                    "InformationStorageKey": "&{Text230}"
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
                    "StepNo": numPobl + 24,
                    "SegmentNo": segPobl + 9,
                    "FrameID": 10,
                    "FrameTitle": "&{Text121}",
                    "ActionTitle": "&{Text122}",
                    "ActionDescription": "&{Text123}",
                    "ActionTitle_1": "&{Text124}",
                    "ActionDescription_1": "&{Text125}",
                    "ActionTitle_2": "&{Text126}",
                    "ActionDescription_2": "&{Text127}",
                    "TXNHash": "${MainTXNPreviousTXNCurrentTXNHashDecoded}",
                    "OperationName": "current transaction of the backlink transaction",
                    "ResponseVariable": "MainTXNPreviousTXNCurrentTXNDataString",
                    "JSONResultVariable": "MainTXNPreviousTXNCurrentTXNData",
                    "StartedProofType":"",
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
                "StepNo": numPobl + 25,
                "SegmentNo": segPobl + 10,
                "FrameID": 10,
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
                "StepNo": numPobl + 26,
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
                    "StepNo": numPobl + 26,
                    "SegmentNo": segPobl + 10,
                    "FrameID": 10,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text130}",
                    "ActionDescription": "&{Text131}",
                    "ActionTitle_1": "&{Text132}",
                    "ActionDescription_1": "&{Text133}",
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
                "StepNo": numPobl + 27,
                "SegmentNo": segPobl + 10,
                "FrameID": 10,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text134}",
                "ActionDescription": "&{Text135}",
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
                      "Key": "&{Text217}",
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
                "StepNo": numPobl + 28,
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
                    "StepNo": numPobl + 28,
                    "SegmentNo": segPobl + 10,
                    "FrameID": 11,
                    "FrameTitle": "&{Text136}",
                    "ActionTitle": "&{Text137}",
                    "ActionDescription": "&{Text138}",
                    "ActionTitle_1": "&{Text139}",
                    "ActionDescription_1": "&{Text140}",
                    "ActionTitle_2": "&{Text141}",
                    "ActionDescription_2": "&{Text142}",
                    "ActionTitle_3": "&{Text143}",
                    "ActionDescription_3": "&{Text144}",
                    "ActionTitle_4": "&{Text145}",
                    "ActionDescription_4": "&{Text146}",
                    "ToastMessage": "&{Text147}",
                    "DecodeKeyName": "&{Text242}",
                    "EncodedInputValue": "${MainTXNPreviousTXNCurrentTXNDataIdentifier}",
                    "DecodedResultVariable": "MainTXNPreviousTXNCurrentTXNDataIdentifierDecoded",
                    "InformationStorageKey": "&{Text231}"
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
                "SegmentNo": segPobl + 11,
                "FrameID": 10,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text148}",
                "ActionDescription": "&{Text149}",
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
                "StepNo": numPobl + 30,
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
                    "StepNo": numPobl + 30,
                    "SegmentNo": segPobl + 11,
                    "FrameID": 10,
                    "FrameTitle": "",
                    "ActionTitle": "&{Text150}",
                    "ActionDescription": "&{Text151}",
                    "ActionTitle_1": "&{Text152}",
                    "ActionDescription_1": "&{Text153}",
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
                "StepNo": numPobl + 31,
                "SegmentNo": segPobl + 11,
                "FrameID": 10,
                "FrameTitle": ""
              },
              "Action": {
                "ActionTitle": "&{Text154}",
                "ActionDescription": "&{Text155}",
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
                      "Key": "&{Text218}",
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
                "StepNo": numPobl + 32,
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
                    "StepNo": numPobl + 32,
                    "SegmentNo": segPobl + 11,
                    "FrameID": 11,
                    "FrameTitle": "&{Text156}",
                    "ActionTitle": "&{Text157}",
                    "ActionDescription": "&{Text158}",
                    "ActionTitle_1": "&{Text15}",
                    "ActionDescription_1": "&{Text19}",
                    "ActionTitle_2": "&{Text160}",
                    "ActionDescription_2": "&{Text161}",
                    "ActionTitle_3": "&{Text162}",
                    "ActionDescription_3": "&{Text163}",
                    "ActionTitle_4": "&{Text164}",
                    "ActionDescription_4": "&{Text165}",
                    "ToastMessage": "&{Text166}",
                    "DecodeKeyName": "&{Text245}",
                    "EncodedInputValue": "${MainTXNPreviousTXNCurrentTXNDataProductID}",
                    "DecodedResultVariable": "MainTXNPreviousTXNCurrentTXNDataProductIDDecoded",
                    "InformationStorageKey": "&{Text232}"
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
                    "StepNo": numPobl + 33,
                    "SegmentNo": segPobl + 12,
                    "FrameID": 12,
                    "FrameTitle": "&{Text168}",
                    "ActionTitle": "&{Text169}",
                    "ActionDescription": "&{Text170}",
                    "FrameTitle_1": "&{Text168}",
                    "ActionTitle_1": "&{Text171}",
                    "ActionDescription_1": "&{Text172}",
                    "FrameTitle_2": "&{Text168}",
                    "ActionTitle_2": "&{Text173}",
                    "ActionDescription_2": "&{Text174}",
                    "FrameTitle_3": "&{Text168}",
                    "ActionTitle_3": "&{Text175}",
                    "ActionDescription_3": "&{Text176}",
                    "ToastMessage": "&{Text177}",
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
                "StepNo": numPobl + 34,
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
                    "StepNo": numPobl + 34,
                    "SegmentNo": segPobl + 13,
                    "FrameID": 12,
                    "FrameTitle": "&{Text168}",
                    "ActionTitle": "&{Text169}",
                    "ActionDescription": "&{Text170}",
                    "FrameTitle_1": "&{Text168}",
                    "ActionTitle_1": "&{Text171}",
                    "ActionDescription_1": "&{Text172}",
                    "FrameTitle_2": "&{Text168}",
                    "ActionTitle_2": "&{Text173}",
                    "ActionDescription_2": "&{Text174}",
                    "FrameTitle_3": "&{Text168}",
                    "ActionTitle_3": "&{Text175}",
                    "ActionDescription_3": "&{Text176}",
                    "ToastMessage": "&{Text177}",
                    "InputKeyName": "the base64 decoded Identifier values from the transactions.",
                    "InputValue": '[{\"title\": \"Previous Transaction hash from main transaction & backlink transaction\", \"t1\": \"${MainTXNPreviousTXNDecoded}\", \"t2\":' + node.TrustLinks[1] + '"}]"'
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
                "SegmentNo": segPobl + 14,
                "FrameID": 13,
                "FrameTitle": "&{Text178}"
              },
              "Action": {
                "ActionTitle": "&{Text179}",
                "ActionDescription": "&{Text179}",
                "ActionType": "BrowserScreen",
                "ActionParameters": {
                  "ExternalURL": "",
                  "InnerHTML": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/checked.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#098260; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Completed Successfully!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF BACKLINK</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Current TDP Transaction Hash</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Previous TDP Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n${var_currenttxn}\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n ${MainTXNPreviousTXNCurrentTXNHashDecoded}\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "InnerHTMLError": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/cancel.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#F15249; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Failed!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF BACKLINK</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Current TDP Transaction Hash</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong>Previous TDP Transaction Hash</strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n${var_currenttxn}\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n ${MainTXNPreviousTXNCurrentTXNHashDecoded}\r\n </p></td></tr></tbody></table></div></div></body></html>",
                  "PageURL": "&{Text181}",
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
                    "t1": "MainTXNPreviousTXNDecoded",
                    "t2": "ExpectedPreviousTxnHash"
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
                "ToastMessage1": "&{Text235}",
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
                "Text0": {
                  "ja": "現在のトランザクションの取得",
                  "en": "Retrieve Current Transaction"
                },
                "Text1": {
                  "ja": "ステップ１ー現在のトランザクションの取得",
                  "en": "Step 1 - Retrieve Current Transaction"
                },
                "Text2": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar HorizonAPI"
                },
                "Text3": {
                  "ja": "ステラブロックチェーンから現在のトランザクションを取得",
                  "en": "Retrieve the current transaction from Stellar Blockchain."
                },
                "Text4": {
                  "ja": "APIレスポンスの保存",
                  "en": "Save API Response"
                },
                "Text5": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "Text6": {
                  "ja": "応答形式（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text7": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 2,
              "Languages": {
                "Text8": {
                  "ja": "CurrentTXNハッシュの抽出",
                  "en": "Extract CurrentTXN Hash"
                },
                "Text9": {
                  "ja": "トランザクションの詳細から、CurrentTXN Hash (base64 encoded)を選択",
                  "en": "Select the CurrentTXN Hash (base64 encoded) from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 3,
              "Languages": {
                "Text10": {
                  "ja": "現在のTXNをハイライト表示",
                  "en": "Highlight the CurrentTXN"
                },
                "Text11": {
                  "ja": "トランザクションの詳細からエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the encoded CurrentTXN Hash from the transaction details"
                },
                "Text12": {
                  "ja": "MainTXNCurrentTXNHashをハイライト表示",
                  "en": "Highlight the MainTXNCurrentTXNHash"
                },
                "Text13": {
                  "ja": "トランザクションの詳細からエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the encoded CurrentTXN Hash from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 4,
              "Languages": {
                "Text14": {
                  "ja": "Base64エンコードされたCurrentTXNを保存",
                  "en": "Save Base64Encoded CurrentTXN"
                },
                "Text15": {
                  "ja": "Base64でエンコードされたCurrentTXNハッシュ値を将来の使用のために保存",
                  "en": "Save the base64 encoded CurrentTXN Hash value for future usage."
                },
                "Text211": {
                  "ja": "TXN2 CurrentTXN (base64)",
                  "en": "TXN2 CurrentTXN (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 2,
              "StepNo": numPobl + 5,
              "Languages": {
                "Text16": {
                  "ja": "ステップ２－現在のTXNをデコードする",
                  "en": "Step 2 - Decode CurrentTXN"
                },
                "Text17": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "Text18": {
                  "ja": "Base64でエンコードされたCurrentTXNハッシュをデコード",
                  "en": "Decode the base64 encoded CurrentTXN Hash"
                },
                "Text19": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "Text20": {
                  "ja": "Base64でエンコードされたCurrentTXNハッシュの入力",
                  "en": "Input the base64 encoded CurrentTXN Hash"
                },
                "Text21": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text22": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text23": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "Text24": {
                  "ja": "デコードされたCurrentTXNハッシュの出力を得る",
                  "en": "Get the output of the decoded CurrentTXN Hash"
                },
                "Text25": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "Text26": {
                  "ja": "将来の使用のためにデコードされたCurrentTXNハッシュを保存",
                  "en": "Save the decoded CurrentTXN Hash for future usage"
                },
                "Text27": {
                  "ja": "デコードされたCurrentTXNハッシュ",
                  "en": "Decoded CurrentTXN Hash"
                },
                "Text226": {
                  "ja": "TXN2 CurrentTXN",
                  "en": "TXN2 CurrentTXN"
                },
                "Text237": {
                  "ja": "CurrentTXN Hash",
                  "en": "CurrentTXN Hash"
                }
              }
            },
            {
              "SegmentNo": segPobl + 3,
              "StepNo": numPobl + 6,
              "Languages": {
                "Text28": {
                  "ja": "ステップ３－現在のトランザクションの取得",
                  "en": "Step 3 - Retrieve Current Transaction"
                },
                "Text29": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar HorizonAPI"
                },
                "Text30": {
                  "ja": "ゲートウェイトランザクションの現在のトランザクションをStellar Blockchainから取得",
                  "en": "Retrieve the current transaction of the gateway transaction from Stellar Blockchain."
                },
                "Text31": {
                  "ja": "APIレスポンス保存",
                  "en": "Save API Response"
                },
                "Text32": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "Text33": {
                  "ja": "応答形式（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text34": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 4,
              "StepNo": numPobl + 7,
              "Languages": {
                "Text35": {
                  "ja": "Base64EncodedのIDを選択",
                  "en": "Select Base64Encoded Identifier"
                },
                "Text36": {
                  "ja": "トランザクションの詳細から、エンコードされたIDを選択",
                  "en": "Select the encoded Identifier from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 4,
              "StepNo": numPobl + 8,
              "Languages": {
                "Text37": {
                  "ja": "IDをハイライト表示",
                  "en": "Highlight the identifier"
                },
                "Text38": {
                  "ja": "トランザクションの詳細からエンコードされたIDを選択",
                  "en": "Select the encoded identifier from the transaction details"
                },
                "Text39": {
                  "ja": "MainTXNCurrentTXNDataIdentifierをハイライト表示",
                  "en": "Highlight the MainTXNCurrentTXNDataIdentifier"
                },
                "Text40": {
                  "ja": "トランザクションの詳細から、エンコードされたIDの値を選択",
                  "en": "Select the encoded Identifier value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 4,
              "StepNo": numPobl + 9,
              "Languages": {
                "Text41": {
                  "ja": "Base64EncodeされたIDの保存",
                  "en": "Save Base64Encoded Identifier"
                },
                "Text42": {
                  "ja": "将来の使用のために、base64 エンコードされた ID 値を保存",
                  "en": "Save the base64 encoded Identifier value for future usage."
                },
                "Text212": {
                  "ja": "ID(base64)",
                  "en": "Identifier (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 4,
              "StepNo": numPobl + 10,
              "Languages": {
                "Text43": {
                  "ja": "ステップ４－MainTXN IDのデコード",
                  "en": "Step 4 - Decode MainTXN Identifier"
                },
                "Text44": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "Text45": {
                  "ja": "base64 でエンコードされた MainTXN IDをデコード",
                  "en": "Decode the base64 encoded MainTXN Identifier"
                },
                "Text46": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "Text47": {
                  "ja": "MainTXN IDを base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded MainTXN Identifier"
                },
                "Text48": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text49": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text50": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "Text51": {
                  "ja": "デコードされたMainTXNIDの出力を得る",
                  "en": "Get the output of the decoded MainTXN Identifier"
                },
                "Text52": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "Text53": {
                  "ja": "将来の使用のためにデコードされたMainTXNIDを保存",
                  "en": "Save the decoded MainTXN Identifier for future usage"
                },
                "Text54": {
                  "ja": "デコードされたMainTXN　ID",
                  "en": "Decoded MainTXN Identifier"
                },
                "Text227": {
                  "ja": "ID",
                  "en": "Identifier"
                },
                "Text238": {
                  "ja": "MainTXN Identifier",
                  "en": "MainTXN Identifier"
                }
              }
            },
            {
              "SegmentNo": segPobl + 5,
              "StepNo": numPobl + 11,
              "Languages": {
                "Text55": {
                  "ja": "Base64EncodedのProductIDを選択",
                  "en": "Select Base64Encoded ProductID"
                },
                "Text56": {
                  "ja": "トランザクションの詳細から、エンコードされたプロダクトIDを選択",
                  "en": "Select the encoded Product ID from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 5,
              "StepNo": numPobl + 12,
              "Languages": {
                "Text57": {
                  "ja": "productIdをハイライト表示",
                  "en": "Highlight the productId"
                },
                "Text58": {
                  "ja": "トランザクションの詳細から、エンコードされたProductIDを選択",
                  "en": "Select the encoded ProductID from the transaction details"
                },
                "Text59": {
                  "ja": "MainTXNCurentTXNDataProductIdをハイライト表示",
                  "en": "Highlight the MainTXNCurentTXNDataProductId"
                },
                "Text40": {
                  "ja": "トランザクションの詳細から、エンコードされたProductIDの値を選択",
                  "en": "Select the encoded ProductID value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 5,
              "StepNo": numPobl + 13,
              "Languages": {
                "Text60": {
                  "ja": "「Base64EncodedのProductIDを保存",
                  "en": "Save Base64Encoded ProductID"
                },
                "Text61": {
                  "ja": "将来の使用のために、Base64 エンコードされた ProductID 値を保存",
                  "en": "Save the base64 encoded ProductID value for future usage."
                },
                "Text213": {
                  "ja": "プロダクトID (base64)",
                  "en": "Product ID (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 5,
              "StepNo": numPobl + 14,
              "Languages": {
                "Text62": {
                  "ja": "ステップー５ーMainTXN ProductIDのデコード",
                  "en": "Step 5 - Decode MainTXN ProductID"
                },
                "Text63": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "Text64": {
                  "ja": "MainTXN ProductIDをbase64エンコードしたものをデコード",
                  "en": "Decode the base64 encoded MainTXN ProductID"
                },
                "Text65": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "Text66": {
                  "ja": "Base64 でエンコードされた MainTXN ProductID を入力",
                  "en": "Input the base64 encoded MainTXN ProductID"
                },
                "Text67": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text68": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text69": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "Text70": {
                  "ja": "デコードされたMainTXNの出力を取得する ProductID",
                  "en": "Get the output of the decoded MainTXN ProductID"
                },
                "Text71": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "Text72": {
                  "ja": "デコードされたMainTXN ProductIDを将来の使用のために保存",
                  "en": "Save the decoded MainTXN ProductID for future usage"
                },
                "Text73": {
                  "ja": "デコードされたMainTXN ProductID",
                  "en": "Decoded MainTXN ProductID"
                },
                "Text228": {
                  "ja": "プロダクトID",
                  "en": "ProductID"
                },
                "Text239": {
                  "ja": "Main TXN Product ID",
                  "en": "Main TXN Product ID"
                }
              }
            },
            {
              "SegmentNo": segPobl + 6,
              "StepNo": numPobl + 15,
              "Languages": {
                "Text74": {
                  "ja": "Base64EncodedのPreviousTXNを選択",
                  "en": "Select Base64Encoded PreviousTXN"
                },
                "Text75": {
                  "ja": "トランザクションの詳細から、エンコードされたPreviousTXN Hash値を選択",
                  "en": "Select the encoded PreviousTXN Hash value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 6,
              "StepNo": numPobl + 16,
              "Languages": {
                "Text76": {
                  "ja": "前のTXNをハイライト表示",
                  "en": "Highlight the PreviousTXN"
                },
                "Text77": {
                  "ja": "トランザクションの詳細から、エンコードされたPreviousTXNハッシュを選択",
                  "en": "Select the encoded PreviousTXN Hash from the transaction details."
                },
                "Text78": {
                  "ja": "MainTXNPreviousTXNをハイライト表示",
                  "en": "Highlight the MainTXNPreviousTXN"
                },
                "Text79": {
                  "ja": "トランザクションの詳細から、エンコードされたPreviousTXN Hash値を選択",
                  "en": "Select the encoded PreviousTXN Hash value from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 6,
              "StepNo": numPobl + 17,
              "Languages": {
                "Text80": {
                  "ja": "Base64Encoded で保存 PreviousTXN",
                  "en": "Save Base64Encoded PreviousTXN"
                },
                "Text81": {
                  "ja": "将来の使用のためにBase64エンコードされたPrevious TXNハッシュ値を保存",
                  "en": "Save the base64 encoded Previous TXN Hash value for future usage."
                },
                "Text214": {
                  "ja": "PreviousTXNハッシュ（base64）",
                  "en": "PreviousTXN Hash (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 6,
              "StepNo": numPobl + 18,
              "Languages": {
                "Text82": {
                  "ja": "ステップ５ーMainTXN のデコード 前のハッシュ",
                  "en": "Step 5 - Decode MainTXN Previous hash"
                },
                "Text83": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "Text84": {
                  "ja": "base64 でエンコードされた MainTXN の前ハッシュをデコード",
                  "en": "Decode the base64 encoded MainTXN Previous hash"
                },
                "Text85": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "Text86": {
                  "ja": "MainTXN の前ハッシュを base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded MainTXN Previous hash"
                },
                "Text87": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text88": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text89": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "Text90": {
                  "ja": "デコードされたMainTXNの出力を取得する 前のハッシュ",
                  "en": "Get the output of the decoded MainTXN Previous hash"
                },
                "Text91": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "Text92": {
                  "ja": "将来の使用のためにデコードされたMainTXN前のハッシュを保存",
                  "en": "Save the decoded MainTXN Previous hash for future usage"
                },
                "Text93": {
                  "ja": "デコードされたMainTXN 前のハッシュ",
                  "en": "Decoded MainTXN Previous hash"
                },
                "Text229": {
                  "ja": "前のTXNハッシュ",
                  "en": "PreviousTXN Hash"
                },
                "Text240": {
                  "ja": "Main TXN Previous hash",
                  "en": "Main TXN Previous hash"
                }
              }
            },
            {
              "SegmentNo": segPobl + 7,
              "StepNo": numPobl + 19,
              "Languages": {
                "Text94": {
                  "ja": "ステップ７－バックリンクのトランザクションを取得",
                  "en": "Step 7 - Retrieve Backlink Transaction"
                },
                "Text95": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar HorizonAPI"
                },
                "Text96": {
                  "ja": "ステラブロックチェーンからBackLinkトランザクションを取得",
                  "en": "Retrieve the BackLink transaction from Stellar Blockchain."
                },
                "Text97": {
                  "ja": "APIレスポンス保存",
                  "en": "Save API Response"
                },
                "Text98": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "Text99": {
                  "ja": "応答形式（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text100": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 8,
              "StepNo": numPobl + 20,
              "Languages": {
                "Text101": {
                  "ja": "Base64EncodedのCurrentTXNを選択",
                  "en": "Select Base64Encoded CurrentTXN"
                },
                "Text102": {
                  "ja": "トランザクションの詳細から、BacklinkトランザクションのエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the encoded CurrentTXN Hash of the Backlink transaction from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 8,
              "StepNo": numPobl + 21,
              "Languages": {
                "Text103": {
                  "ja": "現在のTXNをハイライト表示",
                  "en": "Highlight the CurrentTXN"
                },
                "Text104": {
                  "ja": "トランザクションの詳細から、BacklinkトランザクションのエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the encoded CurrentTXN Hash of the Backlink transaction from the transaction details."
                },
                "Text105": {
                  "ja": "MainTXNPreviousTXNCurrentTXNHashをハイライト表示",
                  "en": "Highlight the MainTXNPreviousTXNCurrentTXNHash"
                },
                "Text106": {
                  "ja": "トランザクションの詳細から、BacklinkトランザクションのエンコードされたCurrentTXNハッシュを選択",
                  "en": "Select the encoded CurrentTXN Hash of the Backlink transaction from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 8,
              "StepNo": numPobl + 22,
              "Languages": {
                "Text107": {
                  "ja": "Base64エンコードされたCurrentTXNを保存",
                  "en": "Save Base64Encoded CurrentTXN"
                },
                "Text108": {
                  "ja": "将来使用のためにPreviuos TXN を base64 でエンコードした CurrentTXN Hash 値を保存",
                  "en": "Save the base64 encoded CurrentTXN Hash value of the Previuos TXN for future usage."
                },
                "Text216": {
                  "ja": "CurentTXNHash (base64)",
                  "en": "CurentTXNHash (base64)"
                },
                "Text215": {
                  "ja": "Expected Backlink Hash",
                  "en": "Expected Backlink Hash"
                }
              }
            },
            {
              "SegmentNo": segPobl + 8,
              "StepNo": numPobl + 23,
              "Languages": {
                "Text109": {
                  "ja": "ステップ９ーデコード PreviousTXN CurentTXN ハッシュ",
                  "en": "Step 9 - Decode PreviousTXN CurentTXN Hash"
                },
                "Text110": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "Text111": {
                  "ja": "base64 でエンコードされた MainTXN IDをデコード",
                  "en": "Decode the base64 encoded MainTXN Identifier"
                },
                "Text112": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "Text113": {
                  "ja": "MainTXN IDを base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded MainTXN Identifier"
                },
                "Text114": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text115": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text116": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "Text117": {
                  "ja": "デコードされたMainTXNIDの出力を得る",
                  "en": "Get the output of the decoded MainTXN Identifier"
                },
                "Text118": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "Text119": {
                  "ja": "将来の使用のためにデコードされたMainTXNIDを保存",
                  "en": "Save the decoded MainTXN Identifier for future usage"
                },
                "Text120": {
                  "ja": "デコードされたMainTXN　ID",
                  "en": "Decoded MainTXN Identifier"
                },
                "Text230": {
                  "ja": "現在のTXNHash",
                  "en": "CurrentTXNHash"
                },
                "Text241": {
                  "ja": "Main TXN Identifier",
                  "en": "Main TXN Identifier"
                }
              }
            },
            {
              "SegmentNo": segPobl + 9,
              "StepNo": numPobl + 24,
              "Languages": {
                "Text121": {
                  "ja": "ステップ１０－バックリンクの現在のトランザクションを取得",
                  "en": "Step 10 - Retrieve Backlink Current Transaction"
                },
                "Text122": {
                  "ja": "ステラホライズンAPIのリクエスト",
                  "en": "Request Stellar HorizonAPI"
                },
                "Text123": {
                  "ja": "バックリンクトランザクションの現在のトランザクシ内容をStellar Blockchainから取得",
                  "en": "Retrieve the current transaction of the backlink transaction from Stellar Blockchain"
                },
                "Text124": {
                  "ja": "APIレスポンス保存",
                  "en": "Save API Response"
                },
                "Text125": {
                  "ja": "トランザクションのレスポンスデータの保存",
                  "en": "Save the response data of the transaction"
                },
                "Text126": {
                  "ja": "応答形式（JSON）",
                  "en": "Format Response (JSON)"
                },
                "Text127": {
                  "ja": "トランザクションデータをJSON（Javascript Object Notation）にフォーマットする",
                  "en": "Format transaction data to JSON (Javascript Object Notation)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 10,
              "StepNo": numPobl + 25,
              "Languages": {
                "Text128": {
                  "ja": "Base64EncodedのIDを選択",
                  "en": "Select Base64Encoded Identifier"
                },
                "Text129": {
                  "ja": "トランザクションの詳細から、エンコードされたIDを選択",
                  "en": "Select the encoded Identifier from the transaction details."
                }
              }
            },
            {
              "SegmentNo": segPobl + 10,
              "StepNo": numPobl + 26,
              "Languages": {
                "Text130": {
                  "ja": "IDをハイライト表示",
                  "en": "Highlight the identifier"
                },
                "Text131": {
                  "ja": "トランザクションの詳細からエンコードされた識別子を選択",
                  "en": "Select the encoded Identifier from the transaction details"
                },
                "Text132": {
                  "ja": "MainTXNPreviousTXNCurrentTXNDataIdentifier をハイライト表示",
                  "en": "Highlight the MainTXNPreviousTXNCurrentTXNDataIdentifier"
                },
                "Text133": {
                  "ja": "トランザクションの詳細から、エンコードされたIDの値を選択",
                  "en": "Select the encoded Identifier value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 10,
              "StepNo": numPobl + 27,
              "Languages": {
                "Text134": {
                  "ja": "Base64EncodeされたIDの保存",
                  "en": "Save Base64Encoded Identifier"
                },
                "Text135": {
                  "ja": "将来の使用のために、Base64 でエンコードされた PreviousTX の Identifier 値を保存",
                  "en": "Save the base64 encoded Identifier value of the PreviousTX for future usage."
                },
                "Text217": {
                  "ja": "ID(base64)",
                  "en": "Identifier (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 10,
              "StepNo": numPobl + 28,
              "Languages": {
                "Text136": {
                  "ja": "ステップ１１－PreviousTXN の CurrentTXN のIDをデコード",
                  "en": "Step 11 - Decode PreviousTXN's CurrentTXN's Identifier"
                },
                "Text137": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "Text138": {
                  "ja": "Base64 でエンコードされた PreviousTXN と CurrentTXNの ID をデコード",
                  "en": "Decode the base64 encoded PreviousTXN's CurrentTXN' Identifier"
                },
                "Text139": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "Text140": {
                  "ja": "PreviousTXNとCurrentTXNのID を base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded PreviousTXN's CurrentTXN' Identifier"
                },
                "Text141": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text142": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text143": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "Text144": {
                  "ja": "PreviousTXNとCurrentTXNのIDをエンコードした出力を取得",
                  "en": "Get the output of the decoded PreviousTXN's CurrentTXN' Identifier"
                },
                "Text145": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "Text146": {
                  "ja": "将来使用のデコードされたPreviousTXNとCurrentTXNのID保存する",
                  "en": "Save the decoded PreviousTXN's CurrentTXN' Identifier for future usage"
                },
                "Text147": {
                  "ja": "デコードされたPreTXNとCurrentTXNのID",
                  "en": "Decoded PreviousTXN's CurrentTXN' Identifier"
                },
                "Text231": {
                  "ja": "デコードされたPreviousTXNとCurrentTXNのID",
                  "en": "Decoded PreviousTXN's CurrentTXN' Identifier"
                },
                "Text242": {
                  "ja": "PreviousTXN の CurrentTXN' 識別子",
                  "en": "Previous TXN's CurrentTXN' Identifier"
                }
              }
            },
            {
              "SegmentNo": segPobl + 11,
              "StepNo": numPobl + 29,
              "Languages": {
                "Text148": {
                  "ja": "Base64EncodedのProductIDを選択",
                  "en": "Select Base64Encoded ProductID"
                },
                "Text149": {
                  "ja": "トランザクションの詳細から、エンコードされたプロダクトIDを選択",
                  "en": "Select the encoded Product ID from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 11,
              "StepNo": numPobl + 30,
              "Languages": {
                "Text150": {
                  "ja": "productIdをハイライト表示",
                  "en": "Highlight the productId"
                },
                "Text151": {
                  "ja": "トランザクションの詳細から、エンコードされたProductIDを選択",
                  "en": "Select the encoded ProductID from the transaction details"
                },
                "Text152": {
                  "ja": "MainTXNPreviousTXNCurrentTXNDataProductIDをハイライト表示",
                  "en": "Highlight the MainTXNPreviousTXNCurrentTXNDataProductID"
                },
                "Text153": {
                  "ja": "トランザクションの詳細から、エンコードされたProductIDの値を選択",
                  "en": "Select the encoded ProductID value from the transaction details"
                }
              }
            },
            {
              "SegmentNo": segPobl + 11,
              "StepNo": numPobl + 31,
              "Languages": {
                "Text154": {
                  "ja": "「Base64EncodedのProductIDを保存",
                  "en": "Save Base64Encoded ProductID"
                },
                "Text155": {
                  "ja": "将来の使用のために、Base64 エンコードされた ProductID 値を保存",
                  "en": "Save the base64 encoded ProductID value for future usage."
                },
                "Text218": {
                  "ja": "プロダクトID (base64)",
                  "en": "Product ID (base64)"
                }
              }
            },
            {
              "SegmentNo": segPobl + 11,
              "StepNo": numPobl + 32,
              "Languages": {
                "Text156": {
                  "ja": "ステップ１２－PreviousTXNとCurrentTXN の ProductID をデコード",
                  "en": "Step 12 - Decode PreviousTXN's CurrentTXN's ProductID"
                },
                "Text157": {
                  "ja": "Base64DecoderのWebページを読み込む",
                  "en": "Load Base64Decoder Webpage"
                },
                "Text158": {
                  "ja": "Base64 でエンコードされた PreviousTXNとCurrentTXN の ProductID をデコード",
                  "en": "Decode the base64 encoded PreviousTXN's CurrentTXN's ProductID"
                },
                "Text159": {
                  "ja": "Base64エンコードされたデータの入力",
                  "en": "Input Base64Encoded Data"
                },
                "Text160": {
                  "ja": "PreviousTXNとCurrentTXNのProductID を base64 でエンコードしたものを入力",
                  "en": "Input the base64 encoded PreviousTXN's CurrentTXN's ProductID"
                },
                "Text161": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click Decode Button"
                },
                "Text162": {
                  "ja": "デコードボタンをクリック",
                  "en": "Click the decode button"
                },
                "Text163": {
                  "ja": "Base64デコードデータの表示",
                  "en": "View Base64Decoded Data"
                },
                "Text164": {
                  "ja": "PreviousTXNとCurrentTXNのProductID をデコードした出力を取得",
                  "en": "Get the output of the decoded PreviousTXN's CurrentTXN's ProductID"
                },
                "Text165": {
                  "ja": "Base64デコードデータの保存",
                  "en": "Save Base64Decoded Data"
                },
                "Text166": {
                  "ja": "将来使用のためにデコードされたPreviousTXNとCurrentTXNのProductIDを保存",
                  "en": "Save the decoded PreviousTXN's CurrentTXN's ProductID for future usage"
                },
                "Text167": {
                  "ja": "デコードされたPreviousTXNのCurrentTXNのProductID",
                  "en": "Decoded PreviousTXN's CurrentTXN's ProductID"
                },
                "Text232": {
                  "ja": "プロダクトID",
                  "en": "ProductID"
                },
                "Text245": {
                  "ja": "PreviousTXN の CurrentTXN の ProductID",
                  "en": "Previous TXN's CurrentTXN's ProductID"
                }
              }
            },
            {
              "SegmentNo": segPobl + 12,
              "StepNo": numPobl + 33,
              "Languages": {
                "Text168": {
                  "ja": "ステップ１３－",
                  "en": "Step 13 - base64でエンコードしたIDを比較"
                },
                "Text169": {
                  "ja": "オンラインテキスト比較Webページ",
                  "en": "Online TextComparison Webpage"
                },
                "Text170": {
                  "ja": "オンラインテキスト比較のウェブページを読み込む",
                  "en": "Load the online text comparison webpage"
                },
                "Text171": {
                  "ja": "入力の比較値",
                  "en": "Input comparison values"
                },
                "Text172": {
                  "ja": "トランザクションからBase64デコードされたIDの値を入力",
                  "en": "Input the base64 decoded Identifier values from the transactions."
                },
                "Text173": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click compare button"
                },
                "Text174": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "Text175": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to result"
                },
                "Text176": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "Text177": {
                  "ja": "比較結果",
                  "en": "Comparison result."
                }
              }
            },
            {
              "SegmentNo": segPobl + 13,
              "StepNo": numPobl + 34,
              "Languages": {
                "Text168": {
                  "ja": "ステップ１３－",
                  "en": "Step 13 - base64でエンコードしたIDを比較"
                },
                "Text169": {
                  "ja": "オンラインテキスト比較Webページ",
                  "en": "Online TextComparison Webpage"
                },
                "Text170": {
                  "ja": "オンラインテキスト比較のウェブページを読み込む",
                  "en": "Load the online text comparison webpage"
                },
                "Text171": {
                  "ja": "入力の比較値",
                  "en": "Input comparison values"
                },
                "Text172": {
                  "ja": "トランザクションからBase64デコードされたIDの値を入力",
                  "en": "Input the base64 decoded Identifier values from the transactions."
                },
                "Text173": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click compare button"
                },
                "Text174": {
                  "ja": "比較ボタンをクリック",
                  "en": "Click the compare button"
                },
                "Text175": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to result"
                },
                "Text176": {
                  "ja": "結果をスクロールする",
                  "en": "Scroll to the result"
                },
                "Text177": {
                  "ja": "比較結果",
                  "en": "Comparison result."
                }
              }
            },
            {
              "SegmentNo": segPobl + 14,
              "StepNo": numPobl + 35,
              "Languages": {
                "Text178": {
                  "ja": "ステップ１４－検証概要",
                  "en": "Step 14 - Verification Summary"
                },
                "Text179": {
                  "ja": "検証概要",
                  "en": "Verification Summary"
                },
                "Text235": {
                  "ja": "検証は正常に終了",
                  "en": "Verification Completed Successfully"
                },
                "Text181": {
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
          numPobl = numPobl + 35
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
          "FrameTitle": "&{Text178}"
        },
        "Action": {
          "ActionTitle": "&{Text179}",
          "ActionDescription": "&{Text179}",
          "ActionType": "BrowserScreen",
          "ActionParameters": {
            "ExternalURL": "",
            "InnerHTML": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/checked.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#098260; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Completed Successfully!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF CONTINUITY</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Current TDP Transaction Hash</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong> </strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n \r\n </p></td></tr></tbody></table></div></div></body></html>",
            "InnerHTMLError": "<?xml version=\"1.0\"?>\r\n<!DOCTYPE html>\r\n<html><head><style>\r\n #mousePointer \r\n{visibility: hidden;} \r\n</style></head><body style=\"height: 100vh; display: flex; justify-content: center; align-items: center;\"><div class=\"d-flex flex-column\"><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><center><img src=\"../../../../assets/img/cancel.png\" style=\"width:50px\"></center></div></div><div class=\"p-2\"><div class=\"d-flex justify-content-center\"><h2 class=\"size-18 header\" style=\"font-weight: 800; font-family:Inter; font-style:normal; font-size:20px; line-height:18px; margin:3px; color:#F15249; text-align: center; letter-spacing: 0.20em; text-transform:uppercase;\">\r\n Verification Failed!\r\n</h2></div></div><div class=\"p-2\" style=\"padding-bottom:12px;\"><div class=\"d-flex justify-content-center\"><center><p class=\"size-12\"><b style=\"text-align: center; letter-spacing: 3px; line-height:0; font-family:Inter;font-style:normal; font-size:12.8px; color:#333333\">Summary</b></p><div style=\"background-color:#333333; border-radius:10px; width:258px; height:24px;\"><p class=\"size-12\" ><center><b style=\"text-align: center; letter-spacing: 3px; line-height:2; font-family:Inter; font-style:normal; font-size:12px; color: #FFFFFF; text-transform: uppercase; background-color: #333333\">PROOF OF CONTINUITY</b></center></p></div></center></div></div><div class=\"p-2\"><table class=\"table table-bordered table-sm\" style=\"padding:9px; border-top: 1px solid #E3E3E3;\"><thead><tr><th scope=\"col\" style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p style=\"text-align: start; font-family:Inter; font-style:normal; color:#000000;\"><strong><span class=\"size-14\" >Current TDP Transaction Hash</span></strong></p></th><th scope=\"col\"><p class=\"size-14\" style=\"word-break:break-word; font-family:Inter; font-style:normal; text-align: start; color:#000000;\"><strong></strong></p></th></tr></thead><tbody><tr><td style=\"border-right: 1px solid #E3E3E3; padding-right: 22px;\"><p class=\"size-14\" style=\"text-align: start; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n\r\n </p></td><td style=\"padding-left:2px;\"><p class=\"size-14\" style=\"text-align: strat; font-family:Inter; font-style:normal; word-break:break-word;\">\r\n \r\n </p></td></tr></tbody></table></div></div></body></html>",
            "PageURL": "&{Text181}",
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
              "t1": "MainTXNPreviousTXNDecoded",
              "t2": "ExpectedPreviousTxnHash"
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
          "ToastMessage1": "&{Text235}",
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
          "Text178": {
            "ja": "ステップ１４－検証概要",
            "en": "Step 14 - Verification Summary"
          },
          "Text179": {
            "ja": "検証概要",
            "en": "Verification Summary"
          },
          "Text235": {
            "ja": "検証は正常に終了",
            "en": "Verification Completed Successfully"
          },
          "Text181": {
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
        this.orderedNodes.push(pocNode.Nodes[nodeId]); // If so, add the LastTxnHash value to the orderedNodes array
        // loop through the parents 
        await this.checkParentsAndPush(pocNode, parents, trustLinks[0], node.Id)
      }
    }
    return new Promise((resolve, reject) => { resolve(this.orderedNodes) })
  }

  async checkParentsAndPush(pocNode, parents, trustLink, id) {
    if (!!parents && parents.length !== 0) {
      parents.forEach(parent => {
        for (const nodeId in pocNode.Nodes) {
          if (nodeId == parent) {
            const node = pocNode.Nodes[nodeId]; // Get the node object for this ID
            const trustLinks = node.TrustLinks || []; // Get the TrustLinks array, or an empty array if it's null
            const parents = node.Parents || [];
            let backLinkNode = {
              "Id": "backlink",
              "Data": {
                "TxnType": "pobl",
              },
              "Parents": null,
              "Children": null,
              "Siblings": null,
              "TrustLinks": [trustLink, trustLinks[0]],
              "PoblTDP": { current: id, previous: parent }
            }
            this.orderedNodes.push(backLinkNode)
            this.orderedNodes.push(pocNode.Nodes[nodeId])
            if (!!parents && parents.length !== 0) {
              this.checkParentsAndPush(pocNode, parents, trustLinks[0], nodeId)
            }
          }
        }
      })
    }
  }
}

