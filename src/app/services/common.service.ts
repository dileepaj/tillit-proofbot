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
        proofName = "Proof of Back-links"
        break;
      case "POBL":
        proofName = "Proof of Backlinks"
        break;
      default:
        break;
    }
    return proofName
  }
}
