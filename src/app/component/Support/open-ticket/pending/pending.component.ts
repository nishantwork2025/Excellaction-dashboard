

// import { NgFor, NgIf } from '@angular/common';
// import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableDataSource, MatTableModule } from '@angular/material/table';
// import { Router, RouterLink } from '@angular/router';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { DataServiceService } from '../../../../data-service.service';

// // Define a Type for the API response
// interface AllocationResponse {
//   success: boolean;
//   message: string;
//   allocatedName?: string;
//   allocatedTime?: string;
// }

// @Component({
//   selector: 'app-pending',
//   standalone: true,
//   imports: [
//     RouterLink,
//     MatCardModule,
//     MatButtonModule,
//     MatMenuModule,
//     MatPaginatorModule,
//     MatTableModule,
//     NgIf,
//     MatCheckboxModule,
//     MatTooltipModule,
//     MatProgressBarModule,
//   ],
//   templateUrl: './pending.component.html',
//   styleUrl: './pending.component.scss'
// })
// export class PendingComponent  implements OnInit, AfterViewInit {
//   dataSource = new MatTableDataSource<any>();
//   displayedColumns: string[] = [
//     'customerDetails',
//     'retailerDetails',
//     'raisedBy',
//     'allocatedTo',
//     'issue',
//     'status',
//     'action'
//   ];

//   allTicketArray: any[] = [];
//   isLoading: boolean = false; // Loading state for button

//   @ViewChild(MatPaginator) paginator!: MatPaginator;

//   constructor(private dataservice: DataServiceService, private router: Router) {}

//   async ngOnInit() {
//     try {
//       let ticketResponse: any = await this.dataservice.get('tickets').toPromise();
//       console.log('API Response:', ticketResponse);

//       if (ticketResponse?.data) {
//         this.allTicketArray = ticketResponse.data;
//         this.dataSource.data = this.allTicketArray;
//       }
//     } catch (error) {
//       console.error('Error fetching tickets:', error);
//     }
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//   }

//   // Method to handle View Details button click
//   viewDetails(ticket: any) {
//     const ticketId = ticket.id;
//     this.isLoading = true; // Show loading state

//     this.router.navigate(['/view-ticket/', ticket.id], {
//       state: { data: ticket, type:'viewDetails' }
//     });

   
//   }
// }



import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DataServiceService } from '../../../../data-service.service';

// Define a Type for the API response
interface Ticket {
  id: string;
  CustomerName: string;
  PhoneNo: string;
  RetailerName: string;
  RetailerId: string;
  CreatedByName: string;
  allocateByName?: string;
  Issue: string;
  Status: string;
}

@Component({
  selector: 'app-pending',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    NgIf,
    MatCheckboxModule,
    MatTooltipModule,
    MatProgressBarModule,
  ],
  templateUrl: './pending.component.html',
  styleUrl: './pending.component.scss'
})
export class PendingComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Ticket>();
  displayedColumns: string[] = [
    'customerDetails',
    'retailerDetails',
    'raisedBy',
    'allocatedTo',
    'issue',
    'status',
    'action'
  ];

  isLoading: boolean = false; // Loading state for API call

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dataservice: DataServiceService, private router: Router) {}

  async ngOnInit() {
    this.isLoading = true; // Start loading
    try {
      let ticketResponse: any = await this.dataservice.get('tickets').toPromise();
      if (ticketResponse?.data) {
        this.dataSource.data = ticketResponse.data;
      }
    } catch (error) {
      console.error('Error fetching tickets:', error);
    } finally {
      this.isLoading = false; // Stop loading
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });
  }

  // View Details method
  viewDetails(ticket: Ticket) {
    this.router.navigate(['/view-ticket/', ticket.id], {
      queryParams: { type: 'viewDetails' }
    });
  }
}


