import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BaseChartDirective } from 'ng2-charts';

// Components
import {DiagrammsComponent} from './diagramms/diagramms.component';
import { NavigationComponent } from './components/navigation/navigation.component'; 
import {SimpleStatsComponent} from './simple-stats/simple-stats.component';
import { DiagrammDataService } from './diagramm-data.service';
import {FooterComponent} from './footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports:
   [RouterOutlet , 
    NavigationComponent,
    SimpleStatsComponent,
    DiagrammsComponent,
    BaseChartDirective,
    FooterComponent ],
  templateUrl: './app.component.html',
  providers: [DiagrammDataService],
  styleUrl: './app.component.css',
  template: `<ejs-chart id='chart-container'></ejs-chart>`

})
export class AppComponent {
  title = 'GymDashboard';

}
