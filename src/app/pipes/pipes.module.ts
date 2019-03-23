import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeLinkPipe } from './safeLink/safe-link.pipe';

@NgModule({
  declarations: [SafeLinkPipe],
  imports: [
    CommonModule
  ],
  exports : [
    SafeLinkPipe
  ]
})
export class PipesModule { }
