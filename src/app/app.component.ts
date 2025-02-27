import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component'; // Correct path to NavbarComponent
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent], // Ensure imports are correct
  templateUrl: './app.component.html', // Points to the correct HTML template
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'job-portal';
}
