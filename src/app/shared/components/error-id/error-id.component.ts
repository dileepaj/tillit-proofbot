import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-error-id",
  templateUrl: "./error-id.component.html",
  styleUrls: ["./error-id.component.css"]
})
export class ErrorIdComponent implements OnInit {
  @Input() errorType: string;
  @Input() errorTitle: string;
  @Input() errorMessage: string;
  @Input() errorMessageSecondary: string;
  errorImage: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.errorType = params.get("type");
      this.errorTitle = params.get("t");
      this.errorMessage = params.get("m1");
      this.errorMessageSecondary = params.get("m2");
    });

    if (!this.errorTitle) {
      this.errorTitle = "Error Not Found";
    }
    if (this.errorType == "error") {
      this.errorImage = "../../../../assets/img/errorbot.svg";
    } else if (
      this.errorType == "empty" ||
      history.state.errorType == "empty"
    ) {
      this.errorImage = "../../../../assets/img/errorbot.svg";
    } else {
      this.errorImage = "../../../../assets/img/errorbot.svg";
    }
  }

  retry(): void {
    window.location.reload();
  }
}
