import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ServicesComponent } from '../components/services/services.component';
import { ContactComponent } from '../components/contact/contact.component';
import { JobComponent } from '../components/job/job.component';
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },  // Default route (home without showing in URL)
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'job', component:JobComponent  },
  { path: '**', redirectTo: '' }  // Wildcard route, redirects to home if path doesn't match
];
