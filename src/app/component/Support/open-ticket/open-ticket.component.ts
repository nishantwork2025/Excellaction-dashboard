import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CompletedComponent } from './completed/completed.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { PendingComponent } from './pending/pending.component';
import { AllStatsComponent } from '../all-stats/all-stats.component';
import { AllTicketChartComponent } from './all-ticket-chart/all-ticket-chart.component';
// import { IssuesSummaryComponent } from './issuess-summary/issues-summary.component';

@Component({
  selector: 'app-open-ticket',
  standalone: true,
  imports: [
   RouterLink,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    AllComponent,
    InProgressComponent,
    CompletedComponent,
    PendingComponent,
    AllStatsComponent,
    AllTicketChartComponent,
  ],
  templateUrl: './open-ticket.component.html',
  styleUrl: './open-ticket.component.scss',
})
export class OpenTicketComponent {}
