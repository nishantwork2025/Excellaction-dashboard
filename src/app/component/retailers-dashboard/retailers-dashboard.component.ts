
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for API requests
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';
import { AllTicketChartComponent } from '../Support/open-ticket/all-ticket-chart/all-ticket-chart.component';
import { EmpStatusComponent } from './emp-status/emp-status.component';
import { RetailerByDistrictComponent } from './retailer-by-district/retailer-by-district.component';
import { SupportStatusComponent } from './support-status/support-status.component';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-retailers-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    FeathericonsModule,
    NgApexchartsModule,
    AllTicketChartComponent,
    SupportStatusComponent,
    AllTicketChartComponent,
    EmpStatusComponent,
    CommonModule,
    RetailerByDistrictComponent
  ],
  templateUrl: './retailers-dashboard.component.html',
  styleUrls: ['./retailers-dashboard.component.scss']
})
export class RetailersDashboardComponent implements OnInit {
  // Declare variables to store counts
  allRetailersCount: number = 0;
  allTicketsCount: number = 0;
  activatedCount: number = 0;
  openTicketsCount: number = 0;

  constructor(private http: HttpClient, private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.getDataFromApi();
  }

  // Method to fetch data from API
  getDataFromApi(): void {
    this.dataService.get<any>('tickets').subscribe(response =>{
      console.log('API Response:', response); // Log the response for debugging
      this.allRetailersCount = response.allRetailersCount || 0;  
      this.allTicketsCount = response.data.length || 0;
      this.activatedCount = response.activatedCount || 0;
      this.openTicketsCount = response.data.filter((ticket:{Status:any})=>ticket.Status === 'open').length || 0;
    })
  }
  
}

