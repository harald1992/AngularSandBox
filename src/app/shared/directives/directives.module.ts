import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicHighlightDirective } from './basic-highlight.directive';

@NgModule({
  imports: [CommonModule],
  exports: [BasicHighlightDirective],
  declarations: [BasicHighlightDirective]
})
export class AppDirectivesModule {}
