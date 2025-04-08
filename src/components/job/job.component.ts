import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

interface Job {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  mode: string;
  workingHours: string;
}

@Component({
  selector: 'app-job',
  standalone: true,  // Indicating this is a standalone component
  imports: [CommonModule, FormsModule],  // Import CommonModule and FormsModule
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class JobComponent {
  jobTypes: string[] = ["正社員", "アルバイト", "インターン", "契約社員"];
  workModes: string[] = ["出社", "リモート", "ハイブリッド"];

  selectedTypes: string[] = [];
  selectedModes: string[] = [];

  jobs: Job[] = [
    { title: "WEBデザイナー募集！", company: "サンプルカンパニー", location: "東京, 日本", salary: "¥2,500/時", type: "正社員", mode: "リモート", workingHours: "9:00 - 18:00" },
    { title: "マーケティングオフィサー", company: "XYZ株式会社", location: "大阪, 日本", salary: "¥3,000/時", type: "アルバイト", mode: "出社", workingHours: "10:00 - 19:00" },
    { title: "ソフトウェアエンジニア", company: "Tech Solutions", location: "京都, 日本", salary: "¥4,000/時", type: "インターン", mode: "ハイブリッド", workingHours: "10:00 - 18:00" },
    { title: "プロジェクトマネージャー", company: "PM株式会社", location: "福岡, 日本", salary: "¥5,000/時", type: "契約社員", mode: "リモート", workingHours: "9:00 - 17:00" },
    { title: "データアナリスト", company: "DataCorp", location: "名古屋, 日本", salary: "¥3,500/時", type: "正社員", mode: "出社", workingHours: "8:00 - 17:00" }
  ];

  get filteredJobs(): Job[] {
    return this.jobs.filter(job =>
      (this.selectedTypes.length === 0 || this.selectedTypes.includes(job.type)) &&
      (this.selectedModes.length === 0 || this.selectedModes.includes(job.mode))
    );
  }

  toggleSelection(filterList: string[], value: string): void {
    if (filterList.includes(value)) {
      filterList.splice(filterList.indexOf(value), 1);
    } else {
      filterList.push(value);
    }
  }
}
