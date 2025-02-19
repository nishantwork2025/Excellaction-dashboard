


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DailyListChartComponent } from './daily-list-chart/daily-list-chart.component';
import { StateKeyChartComponent } from './state-key-chart/state-key-chart.component';

@Component({
    selector: 'app-statics',
    standalone: true,
    imports: [ MatCardModule, NgApexchartsModule,StateKeyChartComponent,DailyListChartComponent, CommonModule],
    templateUrl: './statics.component.html',
    styleUrl: './statics.component.scss'
  })
  export class StaticsComponent  implements OnInit {
  keyTypeChartOptions: any;
  apiUrl = 'https://leadcrm.goelectronix.com/api/v1/tickets'; // API Endpoint

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any>(this.apiUrl).subscribe(response => {
      if (response && response.data) {
        console.log("API Data:", response.data);  // ✅ Debug API Response
        this.processKeyTypeData(response.data);
      }
    });
  }

  processKeyTypeData(tickets: any[]) {
    const stateKeyCounts: { [key: string]: { smart: number; regular: number } } = {};

    // Process Data
    tickets.forEach(ticket => {
      const state = ticket.State?.trim(); // ✅ Handle null or empty state
      const keyType = ticket.KeyType; // ✅ Ensure Smart or Regular

      if (state && keyType) {  // ✅ Ignore null states
        if (!stateKeyCounts[state]) {
          stateKeyCounts[state] = { smart: 0, regular: 0 };
        }

        if (keyType.toLowerCase() === 'smart') {
          stateKeyCounts[state].smart += 1;
        } else if (keyType.toLowerCase() === 'regular') {
          stateKeyCounts[state].regular += 1;
        }
      }
    });

    // Extract top 5–6 states & ensure Maharashtra is included
    let states = Object.keys(stateKeyCounts).filter(s => s !== 'null').slice(0, 6);
    if (!states.includes('Maharashtra')) {
      states.push('Maharashtra');
    }

    const smartKeys = states.map(state => stateKeyCounts[state]?.smart || 0);
    const regularKeys = states.map(state => stateKeyCounts[state]?.regular || 0);

    console.log("Final States:", states); // ✅ Debug State Selection
    console.log("Smart Keys:", smartKeys); // ✅ Debug Data Counts
    console.log("Regular Keys:", regularKeys);

    // ApexCharts Options
    this.keyTypeChartOptions = {
      series: [
        { name: 'Smart Keys', data: smartKeys },
        { name: 'Regular Keys', data: regularKeys }
      ],
      chart: { type: 'bar', height: 400, stacked: false },
      colors: ['#1E88E5', '#E53935'], // ✅ Blue for Smart, Red for Regular
      xaxis: { categories: states },
      yaxis: { forceNiceScale: true, min: 0 },  // ✅ Fix Y-Axis scale
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%'
        }
      },
      dataLabels: {
        enabled: true,
        style: { colors: ['#000'] }
      },
      legend: { position: 'top' }
    };
  }
}
