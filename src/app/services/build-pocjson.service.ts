import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

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
  a: any = {
    "TxnHash": "7fcb9eaa4fe7e971f370f082f672a68e9eda2ca4eb2d986d654fb5758b315b0a",
    "LastTxnHash": "b523daa27429121ddaa434757c7855e446c6bce6fd29557cecda2b1ddeb22ec9",
    "Level": 3,
    "Nodes": {
      "4b976b3cb0711708bae7483d4d873c0f60dca9fc97bf1f73fd921e013385843b": {
        "Id": "4b976b3cb0711708bae7483d4d873c0f60dca9fc97bf1f73fd921e013385843b",
        "Parents": ["afdf172700e25e269b6be07c10068f586ffdfb4a7b937798257920acd5df3f86"],
        "TrustLinks": ["488be8859f12c93a0e7ac366fb977ec01b6e9306e2e6bb879acfd1277f8c6a56"]
      },
      "ada531017ad84ebd9a96fe91c7f445ba6dcd2544ed214f6653696649b9e52053": {
        "Id": "ada531017ad84ebd9a96fe91c7f445ba6dcd2544ed214f6653696649b9e52053",
        "Parents": ["4b976b3cb0711708bae7483d4d873c0f60dca9fc97bf1f73fd921e013385843b"],
        "TrustLinks": ["7fcb9eaa4fe7e971f370f082f672a68e9eda2ca4eb2d986d654fb5758b315b0a"]
      },
      "afdf172700e25e269b6be07c10068f586ffdfb4a7b937798257920acd5df3f86": {
        "Id": "afdf172700e25e269b6be07c10068f586ffdfb4a7b937798257920acd5df3f86",
        "Parents": null,
        "TrustLinks": ["b523daa27429121ddaa434757c7855e446c6bce6fd29557cecda2b1ddeb22ec9"]
      }
    }
  }
  matchingLastTxnHashes = []; // Initialize an empty array to hold the matching LastTxnHash values
  constructor(private apiService: ApiService) { }

  buildPOCJson(data: any): Observable<any> {
    console.log('dataaaaa   s  ', data)
    this.createPOCOrder()
    return this.loopTheNodes(data)
  }

  loopTheNodes(data: any): Observable<any> {
    var genesisNodes = Object.entries(data.Nodes).map(data => {

      let node: any = data[1]
      console.log('data1ss   ', node.TrustLinks[0])
      switch (node.Data.TxnType) {
        case "0":
          let segPog = this.pocProofJson.Header.Segments[this.pocProofJson.Header.Segments.length - 1].NO
          console.log('segpog', segPog+1)
          let numPog = this.pocProofJson.Steps[this.pocProofJson.Steps.length - 1].StepHeader.StepNo
          let pogSegments =[
            {
              "NO": segPog+1,
              "Name": "&{SegName2}",
              "Source": ""
            },
            {
              "NO": segPog+2,
              "Name": "&{SegName3}",
              "Source": ""
            },
            {
              "NO": segPog+3,
              "Name": "&{SegName4}",
              "Source": "../../../../assets/img/Group 6.png"
            },
            {
              "NO": segPog+4,
              "Name": "&{SegName5}",
              "Source": ""
            },
            {
              "NO": segPog+5,
              "Name": "&{SegName6}",
              "Source": ""
            },
            {
              "NO": segPog+6,
              "Name": "&{SegName7}",
              "Source": ""
            },
            {
              "NO": segPog+7,
              "Name": "&{SegName8}",
              "Source": ""
            },
            {
              "NO": segPog+8,
              "Name": "&{SegName9}",
              "Source": ""
            }
          ]
          let pogSteps = [
            {
              "StepHeader": {
                "StepNo": numPog = numPog + 1,
                "SegmentNo": segPog+1,
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
                    "StepNo": numPog,
                    "SegmentNo": segPog+2,
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
                    "JSONResultVariable": "MainTXNData"
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+2,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+2,
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
                    "StepNo": numPog,
                    "SegmentNo":segPog+2,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+2,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+2,
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
                    "StepNo": numPog,
                    "SegmentNo":segPog+2,
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
                    "DecodeKeyName": "CurrentTXN Hash",
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+3,
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
                    "StepNo": numPog,
                    "SegmentNo":segPog+3,
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
                    "JSONResultVariable": "MainTXNCurentTXNData"
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+4,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+4,
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
                    "StepNo": numPog,
                    "SegmentNo":segPog+4,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+4,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+4,
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
                    "StepNo": numPog,
                    "SegmentNo":segPog+4,
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
                    "DecodeKeyName": "MainTXN Identifier",
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+5,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+5,
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
                    "StepNo": numPog,
                    "SegmentNo":segPog+5,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+5,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+5,
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
                    "StepNo": numPog,
                    "SegmentNo":segPog+5,
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
                    "DecodeKeyName": "MainTXN ProductID",
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+6,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+6,
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
                    "StepNo": 17,
                    "SegmentNo":segPog+6,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+6,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+7,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+7,
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
                    "StepNo": numPog,
                    "SegmentNo":segPog+7,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+7,
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+7,
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
                    "StepNo": numPog,
                    "SegmentNo":segPog+7,
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
                    "DecodeKeyName": "Transaction Type",
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
                "StepNo": numPog = numPog + 1,
                "SegmentNo":segPog+8,
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
          console.log('segpog3', segPog)
          segPog = segPog + 8
          console.log('segpog2', segPog)
          this.pocProofJson.Steps.push(...pogSteps)
          this.pocProofJson.Header.Segments.push(...pogSegments)
          break;
        case "2":
          let segPoe = this.pocProofJson.Header.Segments[this.pocProofJson.Header.Segments.length - 1].NO
          console.log('segpoe', segPoe+1)
          let numPoe = this.pocProofJson.Steps[this.pocProofJson.Steps.length - 1].StepHeader.StepNo
          let poeSegments = [
            {
              "NO": segPoe+1,
              "Name": "&{SegName10}",
              "Source": "../../../../assets/img/Group.png"
            },
            {
              "NO": segPoe+2,
              "Name": "&{SegName11}",
              "Source": "../../../../assets/img/Group 6.png"
            },
            {
              "NO": segPoe+3,
              "Name": "&{SegName12}",
              "Source": ""
            },
            {
              "NO": segPoe+4,
              "Name": "&{SegName13}",
              "Source": "../../../../assets/img/Group 6.png"
            },
            {
              "NO": segPoe+5,
              "Name": "&{SegName14}",
              "Source": ""
            },
            {
              "NO": segPoe+6,
              "Name": "&{SegName15}",
              "Source": ""
            }
          ]
          let poeSteps = [
            {
              "StepHeader": {
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+1,
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
                    "StepNo": numPoe,
                    "SegmentNo":segPoe+1,
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
                    "JSONResultVariable": "MainTDPData"
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+1,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+1,
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
                    "StepNo": numPoe,
                    "SegmentNo":segPoe+1,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+1,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+1,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+1,
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
                    "StepNo": numPoe,
                    "SegmentNo":segPoe+1,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+1,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+2,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+2,
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
                    "StepNo": numPoe,
                    "SegmentNo":segPoe+2,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+2,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+2,
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
                    "StepNo": numPoe,
                    "SegmentNo":segPoe+2,
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
                    "JSONResultVariable": "MainTXNData"
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+2,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+2,
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
                    "StepNo": numPoe,
                    "SegmentNo":segPoe+2,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+3,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+3,
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
                    "StepNo": numPoe,
                    "SegmentNo":segPoe+3,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+4,
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
                    "StepNo": numPoe,
                    "SegmentNo":segPoe+4,
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
                    "JSONResultVariable": "MainTXNCurentTXNData"
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+5,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+5,
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
                    "StepNo": numPoe,
                    "SegmentNo":segPoe+5,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+5,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+5,
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
                    "StepNo": numPoe,
                    "SegmentNo":segPoe+5,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+5,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+5,
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
                    "StepNo": numPoe,
                    "SegmentNo":segPoe+5,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+5,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+5,
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
                    "StepNo": numPoe = numPoe + 1,
                    "SegmentNo":segPoe+5,
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
                    "DecodeKeyName": "&{Text153}"
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+5,
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
                    "StepNo": numPoe = numPoe + 1,
                    "SegmentNo":segPoe+5,
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
                "StepNo": numPoe = numPoe + 1,
                "SegmentNo":segPoe+6,
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
          this.pocProofJson.Header.Segments.push(...poeSegments)
          this.pocProofJson.Steps.push(...poeSteps)
          console.log('segpoe3', segPoe)
          segPoe = segPoe + 6
          console.log('segpoe2', segPoe)
          break; 
        case "pobl":
          let segPobl = this.pocProofJson.Header.Segments[this.pocProofJson.Header.Segments.length - 1].NO
          console.log('segpobl', segPobl+1)
          let numPobl = this.pocProofJson.Steps[this.pocProofJson.Steps.length - 1].StepHeader.StepNo
          let poblSegments = [
            {
              "NO": segPobl+1,
              "Name": "&{SegName16}",
              "Source": "../../../../assets/img/Group 6.png"
            },
            {
              "NO": segPobl+2,
              "Name": "&{SegName17}",
              "Source": ""
            },
            {
              "NO": segPobl+3,
              "Name": "&{SegName18}",
              "Source": "../../../../assets/img/Group 6.png"
            },
            {
              "NO": segPobl+4,
              "Name": "&{SegName19}",
              "Source": ""
            },
            {
              "NO": segPobl+5,
              "Name": "&{SegName20}",
              "Source": ""
            },
            {
              "NO": segPobl+6,
              "Name": "&{SegName21}",
              "Source": ""
            },
            {
              "NO": segPobl+7,
              "Name": "&{SegName22}",
              "Source": "../../../../assets/img/Group 6.png"
            },
            {
              "NO": segPobl+8,
              "Name": "&{SegName23}",
              "Source": ""
            },
            {
              "NO": segPobl+9,
              "Name": "&{SegName24}",
              "Source": "../../../../assets/img/Group 6.png"
            },
            {
              "NO": segPobl+10,
              "Name": "&{SegName25}",
              "Source": ""
            },
            {
              "NO": segPobl+11,
              "Name": "&{SegName26}",
              "Source": ""
            },
            {
              "NO": segPobl+12,
              "Name": "&{SegName27}",
              "Source": ""
            },
            {
              "NO": segPobl+13,
              "Name": "&{SegName28}",
              "Source": ""
            },
            {
              "NO": segPobl+14,
              "Name": "&{SegName29}",
              "Source": ""
            }
          ]
          let poblSteps = [
            {
              "StepHeader": {
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+1,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+1,
                    "FrameID": 1,
                    "FrameTitle": "&{Text1}",
                    "ActionTitle": "&{Text2}",
                    "ActionDescription": "&{Text3}",
                    "ActionTitle_1": "&{Text4}",
                    "ActionDescription_1": "&{Text5}",
                    "ActionTitle_2": "&{Text6}",
                    "ActionDescription_2": "&{Text7}",
                    "TXNHash": "261d89845e49221eb5420b97a6cb5ef409e18c2b7a1bee85d1852a213d421e0e",
                    "OperationName": "current transaction",
                    "ResponseVariable": "MainTXNDataString",
                    "JSONResultVariable": "MainTXNData"
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+2,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+2,
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
                    "StepNo": numPobl + 2,
                    "SegmentNo": segPobl+2,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+2,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+2,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+2,
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
                    "DecodeKeyName": "CurrentTXN Hash",
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+3,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+2,
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
                    "JSONResultVariable": "MainTXNCurentTXNData"
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+4,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+4,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+4,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+4,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+4,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+4,
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
                    "DecodeKeyName": "MainTXN Identifier",
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+5,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+5,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+5,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+5,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+5,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+5,
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
                    "DecodeKeyName": "MainTXN ProductID",
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+6,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+6,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+6,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+6,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+6,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+6,
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
                    "DecodeKeyName": "MainTXN Previous hash",
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+7,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+7,
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
                    "JSONResultVariable": "MainTXNPreviousTXNData"
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+8,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+8,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+8,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+8,
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
                    "Value": "7b022109ff937f0b9c82721c36df38d4674cb0ad26a33b13cb9ace3c88d88656"
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+8,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+8,
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
                    "DecodeKeyName": "MainTXN Identifier",
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+9,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+9,
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
                    "JSONResultVariable": "MainTXNPreviousTXNCurrentTXNData"
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+10,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+10,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+10,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+10,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+10,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+10,
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
                    "DecodeKeyName": "PreviousTXN's CurrentTXN' Identifier",
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+11,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+11,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+11,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+11,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+11,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+11,
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
                    "DecodeKeyName": "PreviousTXN's CurrentTXN's ProductID",
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+12,
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
                    "StepNo": numPobl,
                    "SegmentNo": segPobl+12,
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
                "StepNo": numPobl = numPobl + 1,
                "SegmentNo": segPobl+13,
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
                    "StepNo": numPobl = numPobl + 1,
                    "SegmentNo": segPobl+13,
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
                    "InputValue": "[{\"title\": \"Previous Transaction hash from main transaction & backlink transaction\", \"t1\": \"${MainTXNPreviousTXNDecoded}\", \"t2\": \"7b022109ff937f0b9c82721c36df38d4674cb0ad26a33b13cb9ace3c88d88656\"}]"
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
                "StepNo": 84,
                "SegmentNo": segPobl+14,
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
          this.pocProofJson.Header.Segments.push(...poblSegments)
          this.pocProofJson.Steps.push(...poblSteps)
          segPobl = segPobl + 14
          break;
        default:
          break;
      }
    })
    let segPocSummary = this.pocProofJson.Header.Segments[this.pocProofJson.Header.Segments.length - 1].NO
    console.log('segpoc', segPocSummary+1)
    let POCSummaryNo = this.pocProofJson.Steps[this.pocProofJson.Steps.length - 1].StepHeader.StepNo
    let pocSummarySegment =[
      {
        "NO": segPocSummary + 30,
        "Name": "&{SegName30}",
        "Source": ""
      }
    ]
    let POCSummaryStep = [
      {
        "StepHeader": {
          "StepNo": POCSummaryNo = POCSummaryNo + 1,
          "SegmentNo": segPocSummary + 30,
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
    this.pocProofJson.Header.Segments.push(...pocSummarySegment)
    this.pocProofJson.Steps.push(...POCSummaryStep)
    console.log('firs1twwwwwwww  ', this.pocProofJson)
    return this.pocProofJson
  }

  createPOCOrder() {
    let b = []


    const txnHash = this.a.TxnHash; // Get the TxnHash value to search for
    let orderedTxn = [];

    // Iterate over the keys (node IDs) in the Nodes object
    for (const nodeId in this.a.Nodes) {
      const node = this.a.Nodes[nodeId]; // Get the node object for this ID
      const trustLinks = node.TrustLinks || []; // Get the TrustLinks array, or an empty array if it's null
      const parents = node.Parents || [];
      // Check if the TrustLinks array contains the desired TxnHash value
      if (trustLinks.includes(txnHash)) {
        this.matchingLastTxnHashes.push(this.a.Nodes[nodeId]); // If so, add the LastTxnHash value to the matchingLastTxnHashes array
        this.checkParentsAndPush(parents)
      }
    }


    console.log('________________________________________________________')
    console.log(this.matchingLastTxnHashes); // Output the matching LastTxnHash values

    // if (this.matchingLastTxnHashes.length != 0) {
    //   orderedTxn.push(this.matchingLastTxnHashes[0])

    //   // if(matchingLastTxnHashes[0])

    // }

    // console.log('___________________++++++++++++++++++++++++++++++++_____________________________________')
    // console.log(orderedTxn); // Output the matching LastTxnHash values
  }

  checkParentsAndPush(parents) {
    console.log('parents', parents)
    console.log('parents11111 != null', parents != null)
    if (parents != null) {
      console.log('parents != null', parents != null)
      for (const parent in parents) {
        for (const nodeId in this.a.Nodes) {
          if (nodeId == parent) {
            console.log('fffffffffffffffffffffffffffffff')
            const node = this.a.Nodes[nodeId]; // Get the node object for this ID
            const parents = node.Parents || [];
            this.matchingLastTxnHashes.push(this.a.Nodes[nodeId])
            this.checkParentsAndPush(parents)
          }
        }
      }
    }
  }

}
