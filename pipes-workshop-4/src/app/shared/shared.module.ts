import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmailDirective } from './validators/app-email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';




@NgModule({
  declarations: [
    AppEmailDirective,
    SlicePipe,
    ElapsedTimePipe,
  ],
  imports: [
    CommonModule, 
  ],
  exports: [AppEmailDirective, SlicePipe, ElapsedTimePipe]
})
export class SharedModule { }
