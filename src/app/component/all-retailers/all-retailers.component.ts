import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';
import { DataServiceService } from '../../data-service.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-all-retailers',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    FeathericonsModule,
    ReactiveFormsModule
  ],
  templateUrl: './all-retailers.component.html',
  styleUrl: './all-retailers.component.scss',
})
export class AllRetailersComponent {
  displayedColumns: string[] = ['shopname', 'email', 'onboardedDate', 'states', 'district', 'status', 'action'];
  dataSource = new MatTableDataSource<any>();
  searchTerm: string = ''; 
  selectedState: string = '';
  allTicketArray: any[] = []; // Store original data
  today: Date = new Date(); // Get today's date
  startDate:any;
  endDate:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  states: string[] = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    // Union Territories
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep',
    'Delhi', 'Puducherry', 'Jammu and Kashmir', 'Ladakh'
  ];
  isLoading: boolean = true;

  dateRangeForm = new FormGroup({
    startDate: new FormControl(null),
    endDate: new FormControl(null)
  });

  constructor(private cdr: ChangeDetectorRef, private dataservice: DataServiceService, private router: Router) {}

  async ngOnInit() {
    this.dataSource.paginator = this.paginator;



    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const transformedFilter = filter.trim().toLowerCase();
      return (
        data.user.name.toLowerCase().includes(transformedFilter) ||
        data.user.id.toLowerCase().includes(transformedFilter) ||
        data.email.toLowerCase().includes(transformedFilter) ||
        data.states.toLowerCase().includes(transformedFilter) ||
        data.onboardedDate.toLowerCase().includes(transformedFilter) ||
        Object.values(data.status).some((status) =>
           String(status).toLowerCase().includes(transformedFilter)
        )
      );
    };

    try {
      let ticketResponse:any = await lastValueFrom(this.dataservice.get('tickets'));
      console.log('API Response:', ticketResponse);
      if (ticketResponse?.data) {
        this.allTicketArray = ticketResponse.data;
        this.dataSource.data = this.allTicketArray;
      }
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  }

  applyFilter() {
    this.applyStateFilter(); // Apply search and state filter together
  }

  applyStateFilter() {
    let filteredData = [...this.allTicketArray]; // Keep original data safe

    if (this.selectedState) {
      filteredData = filteredData.filter(data => data.State === this.selectedState);
    }

    this.startDate = this.dateRangeForm.get('startDate')?.value
    this.endDate = this.dateRangeForm.get('endDate')?.value
    if (this.startDate && this.endDate) {
      filteredData = filteredData.filter(data =>  new Date(data.created_at) >= new Date(this.startDate) && new Date(data.created_at) <= new Date(this.endDate));  
    }


    if (this.searchTerm) {
      const filterValue = this.searchTerm.trim().toLowerCase();
      filteredData = filteredData.filter(data => 
        data.CustomerName.toLowerCase().includes(filterValue) ||
        data.CreatedByName.toLowerCase().includes(filterValue) ||
        data.Email.toLowerCase().includes(filterValue) ||
        Object.values(data.Status).some(status =>  String(status).toLowerCase().includes(filterValue))
      );
    }
    console.log("fitletda", filteredData)

    this.dataSource.data = filteredData;
    this.cdr.detectChanges(); // Refresh UI
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });
  }

  // Disable future dates in the date picker
  disableFutureDates = (d: Date | null): boolean => {
    return d ? d <= new Date() : false; // Disable future dates
  };

  viewDetails(ticket: any) {
    const ticketId = ticket.id;
    this.isLoading = true; // Show loading state

    this.router.navigate(['/retailers-detail-profile', ticket.RetailerCode], {
      state: { data: ticket, type:'viewDetails' }
    });
}
}