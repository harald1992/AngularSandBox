import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PracticeStuffComponent } from './practice-stuff.component';
import { PracticeStuffAttributeComponent } from './practice-stuff-attribute/practice-stuff-attribute.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [PracticeStuffComponent, PracticeStuffAttributeComponent],
  exports: [PracticeStuffComponent, PracticeStuffAttributeComponent]
})
export class PracticeStuffModule {}
