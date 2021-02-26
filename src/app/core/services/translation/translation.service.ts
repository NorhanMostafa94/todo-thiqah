import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Lang } from '../../enum/lang.enum';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  lang: string;
  private renderer: Renderer2;
  private isArabic = new BehaviorSubject<boolean>(false);
  isArabic$ = this.isArabic.asObservable();

  constructor(private translateService: TranslateService,
    private rendererFactory: RendererFactory2,) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.init();
    
  }

  init() {
    const currentLang = window.localStorage.getItem('Lang');
    if (!currentLang) {
      this.lang = Lang.english;
      window.localStorage.setItem('Lang', this.lang);
    }
    else {
      this.lang = currentLang;
      if (this.lang === Lang.arabic) {
        this.renderer.addClass(document.body, 'rtl');
        this.isArabic.next(true);
      } else {
        this.renderer.removeClass(document.body, 'rtl');
        this.isArabic.next(false);
      }
    }
    this.translateService.setDefaultLang(this.lang);

  }

  changeLang() {
    this.lang = this.lang === Lang.arabic ? Lang.english : Lang.arabic;
    window.localStorage.setItem('Lang', this.lang);
    this.translateService.use(this.lang);
    if (this.lang === Lang.arabic) {
      this.renderer.addClass(document.body, 'rtl');
      this.isArabic.next(true);
    } else {
      this.renderer.removeClass(document.body, 'rtl');
      this.isArabic.next(false);
    }
  }

  
  getCurrentLanguage() {
    return this.lang;

  }

}
