import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TranslateModule], // Import TranslateModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ja'); // Default language set to Japanese
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
  
}
