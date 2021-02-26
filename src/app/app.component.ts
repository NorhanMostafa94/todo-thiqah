import { Component } from '@angular/core';
import { TranslationService } from './core/services/translation/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do';

  currentLang: string;

  constructor(private translationService: TranslationService) {
    this.currentLang = translationService.getCurrentLanguage();
    console.log(this.currentLang)

    this.translationService.isArabic$.subscribe(res=>{
      this.currentLang = translationService.getCurrentLanguage();
    });
  }
  
  changeLanguage(){
    this.translationService.changeLang();    
  }
}
