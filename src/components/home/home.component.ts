import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  slideInterval: any;


  columnContent: any[] = [];
  newsList = [
    { DATE: '2025-02-14', TEXT: 'New job opportunities available!' },
    { DATE: '2025-02-13', TEXT: 'Company expanding hiring process.' },
    { DATE: '2025-02-12', TEXT: 'Upcoming job fair next weekend.' }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadTranslations();
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  /** Load translated column content dynamically */
  loadTranslations(): void {
    this.translate.get('COLUMN_SECTION.ITEMS').subscribe((data: any[]) => {
      this.columnContent = data;
    });
  }

  /** Start auto-slideshow if multiple slides exist */
  startAutoPlay(): void {
    if (this.columnContent.length > 1) {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    }
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.columnContent.length) % this.columnContent.length;
    this.resetAutoPlay();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.columnContent.length;
    this.resetAutoPlay();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoPlay();
  }

  resetAutoPlay(): void {
    clearInterval(this.slideInterval);
    this.startAutoPlay();
  }
}
