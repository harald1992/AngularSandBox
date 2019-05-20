import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighLightDirective } from './better-highlight.directive';
import { AppBindtoHostHighlightDirective } from './app-bindto-host-highlight.directive';
import { UnlessStarDirective } from './unless-StarDirective.directive';
import { DropDownDirective } from './dropdown.directive';

@NgModule({
  imports: [CommonModule],
  exports: [
    BasicHighlightDirective,
    BetterHighLightDirective,
    AppBindtoHostHighlightDirective,
    UnlessStarDirective,
    DropDownDirective
  ],
  declarations: [
    BasicHighlightDirective,
    BetterHighLightDirective,
    AppBindtoHostHighlightDirective,
    UnlessStarDirective,
    DropDownDirective
  ]
})
export class AppDirectivesModule {}
