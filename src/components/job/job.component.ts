import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job',
  standalone: true,  // Indicating this is a standalone component
  imports: [CommonModule],  // Import the necessary modules like CommonModule
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  // You can add logic here if needed
}
