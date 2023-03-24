import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MetricProofComponent } from "./features/proof-verification/metric-proof/metric-proof.component";
import { VerificationScreenComponent } from "./features/proof-verification/verification-screen/verification-screen.component";
import { ErrorIdComponent } from "./shared/components/error-id/error-id.component";

const routes: Routes = [
  { path: "proof/metric/:metric/:product/:batch/:hash/:description", component: MetricProofComponent },
  { path: "", component: VerificationScreenComponent },
  { path: "error/:type/:t/:m1/:m2", component: ErrorIdComponent },
  { path: '**', component: VerificationScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [];
