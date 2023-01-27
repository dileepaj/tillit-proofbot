import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VerificationScreenComponent } from "./features/proof-verification/verification-screen/verification-screen.component";
import { ErrorIdComponent } from "./shared/components/error-id/error-id.component";

const routes: Routes = [
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
