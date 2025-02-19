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

// @Component({
//   selector: 'app-all',
//   standalone: true,
//   imports: [
//     RouterLink,
//     MatCardModule,
//     MatButtonModule,
//     MatMenuModule,
//     MatPaginatorModule,
//     MatTableModule,
//     NgIf,
//     NgFor,
//     MatCheckboxModule,
//     MatTooltipModule,
//     MatProgressBarModule,
//   ],
//   templateUrl: './all.component.html',
//   styleUrl: './all.component.scss',
// })
// export class AllComponent implements OnInit, AfterViewInit {
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

//   @ViewChild(MatPaginator) paginator!: MatPaginator; //  Bind paginator correctly

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
//     this.dataSource.paginator = this.paginator; // Correctly assign paginator after view init
//   }

//   //  Method to handle View Details button click
//   viewDetails(ticket: any) {
//     const payload = {
//       allocatedTime: new Date().toISOString(), // Capture current time
//       allocatedName: ticket.allocateByName || 'N/A'
//     };

//     console.log('Allocating Ticket:', {
//       ticketId: ticket.id,
//       allocatedName: payload.allocatedName,
//       allocatedTime: payload.allocatedTime
//     });
  
//     this.dataservice.post('id', payload).subscribe(
//       (response) => {
//         console.log(' Allocation Successful:', response);
//         console.log(' Allocated Name:', payload.allocatedName);
//         console.log(' Allocated Time:', payload.allocatedTime);
//         this.router.navigate(['/view-ticket', ticket.id]); // Navigate to details page
//       },
//       (error) => {
//         console.error(' Error updating allocation:', error);
//       }
//     );
   
   
//   }
// }
// ***********************************************************************************************************************





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
interface AllocationResponse {
  success: boolean;
  message: string;
  allocatedName?: string;
  allocatedTime?: string;
}

@Component({
  selector: 'app-all',
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
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss',
})
export class AllComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'customerDetails',
    'retailerDetails',
    'raisedBy',
    'allocatedTo',
    'issue',
    'status',
    'action'
  ];

  allTicketArray: any[] = [];
  isLoading: boolean = true; // Loading state for button

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dataservice: DataServiceService, private router: Router) {}

  async ngOnInit() {
    try {
      let ticketResponse: any = await this.dataservice.get('tickets').toPromise();
      console.log('API Response:', ticketResponse);

      if (ticketResponse?.data) {
        this.allTicketArray = ticketResponse.data;
        this.dataSource.data = this.allTicketArray;
      }
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Method to handle View Details button click
  viewDetails(ticket: any) {
    const ticketId = ticket.id;
    this.isLoading = true; // Show loading state

    this.router.navigate(['/view-ticket/', ticket.id], {
      state: { data: ticket, type:'viewDetails' }
    });

    // Fetch ticket by ID
    // this.dataservice.get(`tickets/${ticketId}`).subscribe(
    //   (fetchedTicket: any) => {
    //     console.log('Fetched Ticket:', fetchedTicket);

    //     // Prepare update payload
    //     const payload = {
    //       allocateByName: 'Sandesh',
    //       allocateTime: new Date().toISOString().slice(0, 19).replace("T", " ")
    //     };

    //     // Update ticket using PUT request
    //     this.dataservice.put('tickets', ticketId, payload).subscribe(
    //       (updateResponse) => {
    //         console.log('Ticket Updated Successfully:', updateResponse);
    //         this.router.navigate(['/view-ticket', ticketId]);
    //       },
    //       (updateError) => {
    //         console.error('Error updating ticket:', updateError);
    //       }
    //     );
        
    //   },
    //   (fetchError) => {
    //     console.error('Error fetching ticket:', fetchError);
    //     alert('Failed to fetch ticket details. '); // Show error message
    //     this.isLoading = false; // Hide loading state
    //   }
    // );
  }
}

