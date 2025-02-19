
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-retailer-by-district',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    NgApexchartsModule,
    CommonModule,
  ],
  templateUrl: './retailer-by-district.component.html',
  styleUrl: './retailer-by-district.component.scss'
})
export class RetailerByDistrictComponent implements OnInit {
  chartOptions: any;
  apiUrl = 'https://leadcrm.goelectronix.com/api/v1/tickets'; // API Endpoint

  constructor(private http: HttpClient ) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any>(this.apiUrl).subscribe(response => {
      if (response && response.data) {
        this.processData(response.data);
      }
    });
  }

  processData(tickets: any[]) {
    const stateCounts: { [key: string]: number } = {};

    tickets.forEach(ticket => {
      const state = ticket.State; // Assuming 'State' is the field in API response
      if (state) {
        stateCounts[state] = (stateCounts[state] || 0) + 1;
      }
    });

    const seriesData = Object.keys(stateCounts).map(state => ({
      x: state,
      y: stateCounts[state]
    }));

    // ApexCharts Configuration
    this.chartOptions = {
      series: [{ 
        name: 'Retailers Count',
        data: seriesData 
      }],
      chart: {
        type: 'bar',
        height: 400
      },
      xaxis: {
        categories: Object.keys(stateCounts),
        title: { text: 'States' }
      },
      yaxis: {
        title: { text: 'Number of Retailers' }
      },
      title: {
        text: 'Retailers Count by State'
      }
    };
  }
}
