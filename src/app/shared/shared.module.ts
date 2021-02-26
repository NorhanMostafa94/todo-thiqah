import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { SvgAssetsComponent } from './components/svg-assets/svg-assets.component';



@NgModule({
  declarations: [
    IconComponent,
    SvgAssetsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IconComponent,
    SvgAssetsComponent
  ]
})
export class SharedModule { }
