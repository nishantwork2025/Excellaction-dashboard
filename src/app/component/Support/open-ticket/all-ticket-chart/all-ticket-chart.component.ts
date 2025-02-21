// import { Component, ViewChild, OnInit } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatMenuModule } from '@angular/material/menu';
// import { Router } from '@angular/router';
// import {
//   ApexAxisChartSeries,
//   ApexChart,
//   ChartComponent,
//   ApexDataLabels,
//   ApexPlotOptions,
//   ApexYAxis,
//   ApexLegend,
//   ApexStroke,
//   ApexXAxis,
//   ApexGrid,
//   ApexFill,
//   ApexTooltip,
//   NgApexchartsModule,
// } from 'ng-apexcharts';
// import { DataServiceService } from '../../../../data-service.service';
// import { CommonModule, NgIf, NgFor, DatePipe } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatSelectModule } from '@angular/material/select';
// import { MatTableModule } from '@angular/material/table';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { FeathericonsModule } from '../../../../icons/feathericons/feathericons.module';

// export type ChartOptions = {
//   series: ApexAxisChartSeries | number[];
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   grid: ApexGrid;
//   yaxis: ApexYAxis;
//   xaxis: ApexXAxis;
//   colors: string[];
//   fill: ApexFill;
//   tooltip: ApexTooltip;
//   stroke: ApexStroke;
//   legend: ApexLegend;
//   labels?: string[];
// };

// @Component({
//   selector: 'app-all-ticket-chart',
//   standalone: true,
//   imports: [
//     MatCardModule,
//     MatButtonModule,
//     MatMenuModule,
//     NgApexchartsModule,
//     CommonModule,
//     MatPaginatorModule,
//     MatTableModule,
//     NgIf,

//     MatCheckboxModule,
//     MatTooltipModule,
//     MatProgressBarModule,
//     FeathericonsModule,
//     MatFormFieldModule,
//     MatDatepickerModule,
//     MatNativeDateModule,
//     MatSelectModule,
//     MatInputModule,
//     FormsModule,
//   ],
//   templateUrl: './all-ticket-chart.component.html',
//   styleUrl: './all-ticket-chart.component.scss',
// })
// export class AllTicketChartComponent implements OnInit {
//   @ViewChild('chart') chart: ChartComponent;
//   chartOptions: any;
//   public selectedTimeframe: string = 'year';
//   public fromDate: Date;
//   public toDate: Date;
//   masterData: any = [];
//   constructor(
//     private dataservice: DataServiceService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.fetchPieChartData();
//     // this.getYearData
//   }

//   // Fetch data based on the selected time filter
//   fetchPieChartData(): void {
//     let filters = this.getDateFilter();

//     this.dataservice
//       .get<any>('tickets', { params: filters })
//       .subscribe((data) => {
//         this.masterData = data;
//       });
//   }

//   getYearData() {
//     let openArray = new Array(12).fill(0);
//     let allocate = new Array(12).fill(0);
//     let close = new Array(12).fill(0);
//     let month = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ];
//     let data = this.masterData.data;

//     for (let ticket of data) {
//       if (ticket.Status.toLowerCase() === 'open') {
//         let date = new Date(ticket.TicketCreateDate);
//         let monthIndex = date.getMonth();
//         openArray[monthIndex]++;
//       } else if (ticket.Status.toLowerCase() === 'close') {
//         let date = new Date(ticket.closedByTime);
//         let monthIndex = date.getMonth();
//         close[monthIndex]++;
//       } else if (ticket.Status.toLowerCase() === 'allocate') {
//         let date = new Date(ticket.allocateTime);
//         let monthIndex = date.getMonth();
//         allocate[monthIndex]++;
//       }
//     }

//     this.updateChartOptions(openArray, allocate, close, month);
//   }



// // Update the chart with the new data


  
//   // Determine the filter criteria based on selected timeframe
//   getDateFilter() {
//     let filters: any = {};

//     if (this.selectedTimeframe === 'year') {
//       filters.year = new Date().getFullYear();
//     } else if (this.selectedTimeframe === 'month') {
//       filters.month = new Date().getMonth() + 1;
//     } else if (this.selectedTimeframe === 'day') {
//       filters.day = new Date().getDate();
//     } else if (this.selectedTimeframe === 'custom') {
//       filters.fromDate = this.fromDate?.toISOString();
//       filters.toDate = this.toDate?.toISOString();
//     }

//     return filters;
//   }

//   // Update the chart options dynamically
//   updateChartOptions(
//     openArray: any,
//     allocate: any,
//     close: any,
//     categories: any
//   ) {
//     this.chartOptions = {
//       series: [
//         { name: 'Open Ticket', data: openArray },
//         { name: 'Allocate', data: allocate },
//         { name: 'Close', data: close },
//       ],
//       chart: {
//         type: 'bar',
//         height: 350,
//       },
//       xaxis: {
//         categories: categories,
//       },
//       yaxis: {
//         title: { text: 'Ticket Count' },
//       },
//       colors: ['#00E396', '#FF4560', 'rgb(170, 44, 107)'],
//       title: { text: 'Ticket Data By Month', align: 'center' },
//       tooltip: {
//         shared: true,
//         intersect: false,
//       },
//     };
//   }

//   updateBarChartData() {
//     this.fetchPieChartData();
//   }

//   async getCustomDate() {
//     // Assuming fromDate and toDate are set
//     let fromDate = this.fromDate;
//     let toDate = this.toDate;

//     // Get the selected range of dates
//     let selectedDaysRange = this.getDateRange(fromDate, toDate);

//     // Initialize arrays to store ticket counts for each day in the selected range
//     let openArray: any = [];
//     let close: any = [];
//     let allocate: any = [];

//     // Initialize arrays for each day in the range (filled with 0s)
//     selectedDaysRange.forEach(() => {
//       openArray.push(0);
//       close.push(0);
//       allocate.push(0);
//     });

//     // Get the tickets data
//     let tickets: any[] = this.masterData.data;

//     tickets.forEach((ticket) => {
//       let ticketDate: any;

//       // Check ticket status and process accordingly
//       if (ticket.Status.toLowerCase() === 'open') {
//         ticketDate = new Date(ticket.TicketCreateDate);
//         if (this.isDateWithinRange(ticketDate, fromDate, toDate)) {
//           // Find the index of the day in the selected date range
//           let dayIndex = selectedDaysRange.findIndex(
//             (day) => day.toDateString() === ticketDate.toDateString()
//           );
//           if (dayIndex !== -1) {
//             openArray[dayIndex]++;
//           }
//         }
//       } else if (ticket.Status.toLowerCase() === 'close') {
//         ticketDate = new Date(ticket.closedByTime);
//         if (this.isDateWithinRange(ticketDate, fromDate, toDate)) {
//           // Find the index of the day in the selected date range
//           let dayIndex = selectedDaysRange.findIndex(
//             (day) => day.toDateString() === ticketDate.toDateString()
//           );
//           if (dayIndex !== -1) {
//             close[dayIndex]++;
//           }
//         }
//       } else if (ticket.Status.toLowerCase() === 'allocate') {
//         ticketDate = new Date(ticket.allocateTime);
//         if (this.isDateWithinRange(ticketDate, fromDate, toDate)) {
//           // Find the index of the day in the selected date range
//           let dayIndex = selectedDaysRange.findIndex(
//             (day) => day.toDateString() === ticketDate.toDateString()
//           );
//           if (dayIndex !== -1) {
//             allocate[dayIndex]++;
//           }
//         }
//       }
//     });
//     let selectedDate: any = await this.getDateFromRange(selectedDaysRange)
//     this.updateChartOptions(openArray, allocate, close, selectedDate);

//     console.log('Open Tickets by Day:', openArray);
//     console.log('Closed Tickets by Day:', close);
//     console.log('Allocated Tickets by Day:', allocate);
//   }

//   async getDateFromRange(dateArray: any) {
//     let dateObjects: any = dateArray.map((dateStr: string | number | Date) => new Date(dateStr).getDate());
//     return dateObjects
//   }

//   getStartAndEndDate() {
//     // Check if both fromDate and toDate are selected
//     if (this.fromDate && this.toDate) {
//       console.log('Start Date:', this.fromDate);
//       console.log('End Date:', this.toDate);
//       // You can also return the dates if needed

//       let startDate = this.fromDate;
//       let endDate = this.toDate;
//       let openArray: any = [];
//       let close: any = [];
//       let allocate: any = [];

//       let monthsInRange = this.getMonthRange(startDate, endDate);

//       // Initialize the arrays based on the months in the range
//       monthsInRange.forEach(() => {
//         openArray.push(0);
//         close.push(0);
//         allocate.push(0);
//       });

//       let tickets: any[] = this.masterData.data;

//       tickets.forEach((ticket) => {
//         let ticketDate;

//         // Filter tickets based on status and date range
//         if (ticket.Status.toLowerCase() === 'open') {
//           ticketDate = new Date(ticket.TicketCreateDate);
//           if (this.isDateWithinRange(ticketDate, startDate, endDate)) {
//             let monthIndex = ticketDate.getMonth();
//             if (monthsInRange.includes(monthIndex)) {
//               let indexInRange = monthsInRange.indexOf(monthIndex);
//               openArray[indexInRange]++;
//             }
//           }
//         } else if (ticket.Status.toLowerCase() === 'close') {
//           ticketDate = new Date(ticket.closedByTime);
//           if (this.isDateWithinRange(ticketDate, startDate, endDate)) {
//             let monthIndex = ticketDate.getMonth();
//             if (monthsInRange.includes(monthIndex)) {
//               let indexInRange = monthsInRange.indexOf(monthIndex);
//               close[indexInRange]++;
//             }
//           }
//         } else if (ticket.Status.toLowerCase() === 'allocate') {
//           ticketDate = new Date(ticket.allocateTime);
//           if (this.isDateWithinRange(ticketDate, startDate, endDate)) {
//             let monthIndex = ticketDate.getMonth();
//             if (monthsInRange.includes(monthIndex)) {
//               let indexInRange = monthsInRange.indexOf(monthIndex);
//               allocate[indexInRange]++;
//             }
//           }
//         }
//       });

//       this.updateChartOptions(openArray, allocate, close, monthsInRange);
//     } else {
//       console.log('Please select both start and end dates.');
//     }
//   }

//   isDateWithinRange(date: Date, startDate: Date, endDate: Date): boolean {
//     return date >= startDate && date <= endDate;
//   }

//   getDateRange(startDate: Date, endDate: Date): Date[] {
//     let dateArray: Date[] = [];

//     // Create a copy of the startDate to avoid modifying the original object
//     let currentDate = new Date(startDate);

//     // Push all the dates from startDate to endDate into the dateArray
//     while (currentDate <= endDate) {
//       dateArray.push(new Date(currentDate));
//       currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
//     }

//     return dateArray;
//   }
//   getMonthRange(startDate: Date, endDate: Date) {
//     let startMonth = startDate.getMonth();
//     let endMonth = endDate.getMonth();
//     let startYear = startDate.getFullYear();
//     let endYear = endDate.getFullYear();

//     let months = [];

//     // Add months in the selected range (including from start month to end month)
//     for (let year = startYear; year <= endYear; year++) {
//       let startM = year === startYear ? startMonth : 0;
//       let endM = year === endYear ? endMonth : 11;

//       for (let month = startM; month <= endM; month++) {
//         months.push(month);
//       }
//     }

//     return months;
//   }
// }
















import { Component, ViewChild, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexGrid,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { DataServiceService } from '../../../../data-service.service';
import { CommonModule, NgIf, NgFor, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FeathericonsModule } from '../../../../icons/feathericons/feathericons.module';

export type ChartOptions = {
  series: ApexAxisChartSeries | number[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  colors: string[];
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  labels?: string[];
};

@Component({
  selector: 'app-all-ticket-chart',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    NgApexchartsModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    NgIf,

    MatCheckboxModule,
    MatTooltipModule,
    MatProgressBarModule,
    FeathericonsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './all-ticket-chart.component.html',
  styleUrls: ['./all-ticket-chart.component.scss'],
})
export class AllTicketChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  chartOptions: any;
  public selectedTimeframe: string = 'year';
  public fromDate: Date;
  public toDate: Date;

  masterData: any = [];

  constructor(private dataservice: DataServiceService, private router: Router) {}

  ngOnInit(): void {
    this.fetchPieChartData();
    this.updateBarChartData()
  }

  fetchPieChartData(): void {
    let filters = this.getDateFilter();

    this.dataservice
      .get<any>('tickets', { params: filters })
      .subscribe((data) => {
        this.masterData = data;
      });
  }

  getYearData() {
    let openArray = new Array(12).fill(0);
    let allocate = new Array(12).fill(0);
    let close = new Array(12).fill(0);
    let month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    let data = this.masterData.data;

    for (let ticket of data) {
      let ticketDate: Date | null = null; // Initialize ticketDate to null
      
      // Assign ticketDate based on status
      if (ticket.Status.toLowerCase() === 'open') {
        ticketDate = new Date(ticket.TicketCreateDate);
      } else if (ticket.Status.toLowerCase() === 'close') {
        ticketDate = new Date(ticket.closedByTime);
      } else if (ticket.Status.toLowerCase() === 'allocate') {
        ticketDate = new Date(ticket.allocateTime);
      }

      // Ensure ticketDate is valid before using it
      if (ticketDate && !isNaN(ticketDate.getTime())) {
        let monthIndex = ticketDate.getMonth();
        if (ticket.Status.toLowerCase() === 'open') {
          openArray[monthIndex]++;
        } else if (ticket.Status.toLowerCase() === 'close') {
          close[monthIndex]++;
        } else if (ticket.Status.toLowerCase() === 'allocate') {
          allocate[monthIndex]++;
        }
      }
    }

    this.updateChartOptions(openArray, allocate, close, month);
}

getCurrentMonthDayWiseData() {
    let openArray = new Array(31).fill(0);
    let allocateArray = new Array(31).fill(0);
    let closeArray = new Array(31).fill(0);

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let dayLabels = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    let data = this.masterData.data;

    for (let ticket of data) {
      let ticketDate: Date | null = null; // Initialize ticketDate to null

      // Assign ticketDate based on status
      if (ticket.Status.toLowerCase() === 'open') {
        ticketDate = new Date(ticket.TicketCreateDate);
      } else if (ticket.Status.toLowerCase() === 'close') {
        ticketDate = new Date(ticket.closedByTime);
      } else if (ticket.Status.toLowerCase() === 'allocate') {
        ticketDate = new Date(ticket.allocateTime);
      }

      // Ensure ticketDate is valid before using it
      if (ticketDate && !isNaN(ticketDate.getTime())) {
        if (ticketDate.getMonth() === currentMonth && ticketDate.getFullYear() === currentYear) {
          let dayOfMonth = ticketDate.getDate() - 1;
          
          if (ticket.Status.toLowerCase() === 'open') {
            openArray[dayOfMonth]++;
          } else if (ticket.Status.toLowerCase() === 'close') {
            closeArray[dayOfMonth]++;
          } else if (ticket.Status.toLowerCase() === 'allocate') {
            allocateArray[dayOfMonth]++;
          }
        }
      }
    }

    this.updateChartOptions(openArray, allocateArray, closeArray, dayLabels);
}


  getDateFilter() {
    let filters: any = {};

    if (this.selectedTimeframe === 'year') {
      filters.year = new Date().getFullYear();
    } else if (this.selectedTimeframe === 'month') {
      filters.month = new Date().getMonth() + 1;
    } else if (this.selectedTimeframe === 'day') {
      filters.day = new Date().getDate();
    } else if (this.selectedTimeframe === 'custom') {
      filters.fromDate = this.fromDate?.toISOString();
      filters.toDate = this.toDate?.toISOString();
    }

    return filters;
  }

  updateChartOptions(openArray: any, allocate: any, close: any, categories: any) {
    this.chartOptions = {
      series: [
        { name: 'Open Ticket', data: openArray },
        { name: 'Allocate', data: allocate },
        { name: 'Close', data: close },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      xaxis: {
        categories: categories,
      },
      yaxis: {
        title: { text: 'Ticket Count' },
      },
      colors: ['#00E396', '#FF4560', 'rgb(170, 44, 107)'],
      title: { text: 'Ticket Data By Month', align: 'center' },
      tooltip: {
        shared: true,
        intersect: false,
      },
    };
  }

  updateBarChartData() {
    this.fetchPieChartData();
  }

  async getCustomDate() {
    let selectedDaysRange = this.getDateRange(this.fromDate, this.toDate);

    let openArray: any = [];
    let close: any = [];
    let allocate: any = [];

    selectedDaysRange.forEach(() => {
      openArray.push(0);
      close.push(0);
      allocate.push(0);
    });

    let tickets: any[] = this.masterData.data;

    tickets.forEach((ticket) => {
      let ticketDate: Date;

      if (ticket.Status.toLowerCase() === 'open') {
        ticketDate = new Date(ticket.TicketCreateDate);
        if (this.isDateWithinRange(ticketDate, this.fromDate, this.toDate)) {
          let dayIndex = selectedDaysRange.findIndex(
            (day) => day.toDateString() === ticketDate.toDateString()
          );
          if (dayIndex !== -1) {
            openArray[dayIndex]++;
          }
        }
      } else if (ticket.Status.toLowerCase() === 'close') {
        ticketDate = new Date(ticket.closedByTime);
        if (this.isDateWithinRange(ticketDate, this.fromDate, this.toDate)) {
          let dayIndex = selectedDaysRange.findIndex(
            (day) => day.toDateString() === ticketDate.toDateString()
          );
          if (dayIndex !== -1) {
            close[dayIndex]++;
          }
        }
      } else if (ticket.Status.toLowerCase() === 'allocate') {
        ticketDate = new Date(ticket.allocateTime);
        if (this.isDateWithinRange(ticketDate, this.fromDate, this.toDate)) {
          let dayIndex = selectedDaysRange.findIndex(
            (day) => day.toDateString() === ticketDate.toDateString()
          );
          if (dayIndex !== -1) {
            allocate[dayIndex]++;
          }
        }
      }
    });

    this.updateChartOptions(openArray, allocate, close, selectedDaysRange);
  }

  isDateWithinRange(ticketDate: Date, fromDate: Date, toDate: Date) {
    return ticketDate >= fromDate && ticketDate <= toDate;
  }

  getDateRange(fromDate: Date, toDate: Date) {
    let dateArray = [];
    let currentDate = new Date(fromDate);
    while (currentDate <= toDate) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
  }
}
