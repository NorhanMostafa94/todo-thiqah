import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { SvgAssetsComponent } from './components/svg-assets/svg-assets.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    IconComponent,
    SvgAssetsComponent,
    TextareaComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild()
  ],
  exports:[
    IconComponent,
    SvgAssetsComponent,
    TextareaComponent,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    ModalComponent
  ]
})
export class SharedModule { }
