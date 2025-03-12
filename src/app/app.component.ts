import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component'; 
import {SimpleStatsComponent} from './simple-stats/simple-stats.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NavigationComponent, SimpleStatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'GymDashboard';

}
