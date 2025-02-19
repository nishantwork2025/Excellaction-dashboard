
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
// import { DataServiceService } from '../../../../data-service.service';
import { DataServiceService } from '../../../data-service.service';
import { FeathericonsModule } from '../../../icons/feathericons/feathericons.module';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Define a Type for the API response
interface AllocationResponse {
  success: boolean;
  message: string;
  allocatedName?: string;
  allocatedTime?: string;
}

@Component({
  selector: 'app-activations-data',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
   
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
  templateUrl: './activations-data.component.html',
  styleUrl: './activations-data.component.scss'
})
export class ActivationsDataComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'user',
    'email',
    'roles',
    'projects',
    'status',
  ];
states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
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
  // viewDetails(ticket: any) {
  //   const ticketId = ticket.id;
  //   this.isLoading = true; // Show loading state

  //   this.router.navigate(['/view-ticket/', ticket.id], {
  //     state: { data: ticket, type:'viewDetails' }
  //   });



}

