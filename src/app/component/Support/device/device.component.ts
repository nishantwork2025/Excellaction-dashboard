import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router, RouterLink } from '@angular/router';
import { DataServiceService } from '../../../data-service.service';
import { SweetAlertResult } from 'sweetalert2';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FeathericonsModule } from '../../../icons/feathericons/feathericons.module';

// Define a Type for the API response
interface AllocationResponse {
  success: boolean;
  message: string;
  allocatedName?: string;
  allocatedTime?: string;
}

@Component({
  selector: 'app-device',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    NgIf,
    NgFor,
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
    DatePipe
  ],
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'trackingID',
    'product',
    'product1',
    'sim1',
    'location',
    'customer',
    'status',
  ];

  allTicketArray: any[] = [];
  isLoading: boolean = true; // Loading state for button

  @ViewChild(MatPaginator) paginator!: MatPaginator;
states: any;

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

  showAlert(): void {
    Swal.fire({
      title: 'Select a Policy',
      input: 'select',
      inputOptions: {
        policy1: 'Policy 1',
        policy2: 'Policy 2',
        policy3: 'Policy 3'
      },
      inputPlaceholder: 'Select a policy',
      showCancelButton: true,
      confirmButtonText: 'Apply',
      cancelButtonText: 'Cancel',
      reverseButtons: true // Optional: swaps the order of the buttons
    }).then((result: SweetAlertResult<any>) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Success!',
          text: 'Policy applied successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } else if (result.isDismissed) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Policy application cancelled',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }


}
