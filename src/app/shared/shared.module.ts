import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorIdComponent } from './components/error-id/error-id.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';

@NgModule({
  declarations: [ErrorModalComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
