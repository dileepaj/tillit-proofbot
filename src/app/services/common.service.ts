import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  public getProofName(proof): string {
    let proofName = ""
    switch (proof) {
      case "poe":
        proofName = "Proof of Existence"
        break;
      case "POE":
        proofName = "Proof of Existence"
        break;
      case "pog":
        proofName = "Proof of Genesis"
        break;
      case "POG":
        proofName = "Proof of Genesis"
        break;
      case "poc":
        proofName = "Proof of Continuity"
        break;
      case "POC":
        proofName = "Proof of Continuity"
        break;
      case "pobl":
        proofName = "Proof of Backlinks"
        break;
      case "POBL":
        proofName = "Proof of Backlinks"
        break;
      default:
        break;
    }
    return proofName
  }
  decodeFromBase64(base64Text) {
    const decodedData = atob(base64Text);
    const decoder = new TextDecoder('utf-8');
    const decodedText = decoder.decode(new Uint8Array([...decodedData].map(char => char.charCodeAt(0))));
    return decodedText;
  }

  
  public getProofNameByType(TxnType): string{
    switch (TxnType) {
      case "0":
          return "Proof of Genesis";
      case "2":
        return "Proof of Existence";
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

public getTransactionByType(TxnType): string{
  switch (TxnType) {
    case "0":
        return "Proof of Genesis";
    case "2":
      return "Tracibility Data";
    case "6":
        return "Split";
    case "7":
        return "Merge";
    case "5":
        return "Split Parent";
    case "9":
        return "Stage Transfer";
    case "10":
        return "POCOC";
    default:
}
}
  
}
