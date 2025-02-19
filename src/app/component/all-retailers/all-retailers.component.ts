// import { CommonModule } from '@angular/common';
// import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
// import { MatTableModule, MatTableDataSource } from '@angular/material/table';
// import { RouterLink } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';

// @Component({
//   selector: 'app-all-retailers',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterLink,
//     MatCardModule,
//     MatButtonModule,
//     MatMenuModule,
//     MatPaginatorModule,
//     MatTableModule,
//     MatFormFieldModule,
//     MatDatepickerModule,
//     MatNativeDateModule,
//     MatSelectModule,
//     MatInputModule,
//     FormsModule,
//     FeathericonsModule,
//   ],
//   templateUrl: './all-retailers.component.html',
//   styleUrl: './all-retailers.component.scss',
// })
// export class AllRetailersComponent {
  
//   displayedColumns: string[] = ['shopname', 'email', 'onboardedDate', 'states','district','status','status1' ,'action'];
//   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
//   searchTerm: string = ''; 
//   selectedState: string = '';

//   originalData: PeriodicElement[] = ELEMENT_DATA; // Store original data
//   today: Date = new Date(); // Get today's date

  
//   disableFutureDates = (date: Date | null): boolean => {
//     if (!date) return false;
//     const today = new Date();
//     today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison
//     return date <= today; // Only allow past and present dates
//   };
//   @ViewChild(MatPaginator) paginator: MatPaginator;

//   states: string[] = [
//     'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
//     'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
//     'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
//     'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
//     // Union Territories
//     'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep',
//     'Delhi', 'Puducherry', 'Jammu and Kashmir', 'Ladakh'
//   ];
//   constructor(private cdr: ChangeDetectorRef) {}
//   ngOnInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
//       const transformedFilter = filter.trim().toLowerCase();
//       return (
//         data.user.name.toLowerCase().includes(transformedFilter) ||
//         data.user.id.toLowerCase().includes(transformedFilter) ||
//         data.email.toLowerCase().includes(transformedFilter) ||
//         data.states.toLowerCase().includes(transformedFilter) ||
//         data.onboardedDate.toLowerCase().includes(transformedFilter) ||
//         Object.values(data.status).some(status => status.toLowerCase().includes(transformedFilter))
//       );
//     };
//   }

//   applyFilter() {
//     const filterValue = this.searchTerm.trim().toLowerCase();
//     this.dataSource.filter = filterValue; // Apply search term filter
//     this.applyStateFilter(); // Also apply state filter
//   }

//   applyStateFilter() {
//     let filteredData = this.originalData;

//     if (this.selectedState) {
//       filteredData = filteredData.filter(data => data.states === this.selectedState);
//     }

//     if (this.searchTerm) {
//       const filterValue = this.searchTerm.trim().toLowerCase();
//       filteredData = filteredData.filter(data => 
//         data.user.name.toLowerCase().includes(filterValue) ||
//         data.user.id.toLowerCase().includes(filterValue) ||
//         data.email.toLowerCase().includes(filterValue) ||
//         data.onboardedDate.toLowerCase().includes(filterValue) ||
//         Object.values(data.status).some(status => status.toLowerCase().includes(filterValue))
//       );
//     }

//     this.dataSource.data = filteredData;
//     this.cdr.detectChanges(); // Refresh UI
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//   }
// }





// // Define Data Structure
// export interface PeriodicElement {
//   user: { name: string; id: string };
//   email: string;
//   status: { active?: string; converted?: string; deactive?: string };
//   action: { viewDetails: string };
//   onboardedDate: string;
//   states: string;
// }


// // Sample Data
// const ELEMENT_DATA: PeriodicElement[] = [
//   { user: { name: 'Nishant Gaikwad', id: 'Ni234' }, email: 'AAi Electronic', onboardedDate: '12/02/2000', states: 'Maharashtra', status: { active: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'John Doe', id: 'JD456' }, email: 'XYZ Retail', onboardedDate: '05/10/1995', states: 'Karnataka', status: { active: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Priya Sharma', id: 'PS789' }, email: 'Tech Solutions', onboardedDate: '23/07/2010', states: 'Delhi', status: { converted: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Amit Verma', id: 'AV101' }, email: 'Quick Mart', onboardedDate: '11/11/2005', states: 'Punjab', status: { deactive: 'Company' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Riya Patel', id: 'RP303' }, email: 'Super Store', onboardedDate: '30/08/2015', states: 'Gujarat', status: { active: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Rahul Mehta', id: 'RM456' }, email: 'Electro World', onboardedDate: '15/09/2009', states: 'Uttar Pradesh', status: { active: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Neha Singh', id: 'NS567' }, email: 'Gadget Galaxy', onboardedDate: '12/06/2012', states: 'Madhya Pradesh', status: { converted: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Mohit Arora', id: 'MA678' }, email: 'Digital Hub', onboardedDate: '27/04/2016', states: 'Haryana', status: { deactive: 'Company' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Pooja Gupta', id: 'PG789' }, email: 'Smart Solutions', onboardedDate: '08/11/2013', states: 'Rajasthan', status: { active: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Sandeep Yadav', id: 'SY890' }, email: 'Home Essentials', onboardedDate: '02/03/2017', states: 'Bihar', status: { active: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Meera Kapoor', id: 'MK901' }, email: 'Tech Innovators', onboardedDate: '18/07/2014', states: 'West Bengal', status: { converted: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Anuj Saxena', id: 'AS012' }, email: 'Gizmo World', onboardedDate: '22/05/2011', states: 'Jharkhand', status: { deactive: 'Company' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Komal Bhatt', id: 'KB123' }, email: 'Modern Tech', onboardedDate: '11/01/2018', states: 'Chhattisgarh', status: { active: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Deepak Choudhary', id: 'DC234' }, email: 'Future Retail', onboardedDate: '14/10/2008', states: 'Uttarakhand', status: { active: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Shruti Raina', id: 'SR345' }, email: 'Tech Palace', onboardedDate: '09/09/2019', states: 'Himachal Pradesh', status: { converted: 'Self' }, action: { viewDetails: '/retailers-profile' } },
//   { user: { name: 'Arun Joshi', id: 'AJ456' }, email: 'Smart Mart', onboardedDate: '26/07/2007', states: 'Goa', status: { deactive: 'Company' }, action: { viewDetails: '/retailers-profile' } }]





// ***********************************************************************************************************************************************************





import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
      filteredData = filteredData.filter(data => data.states === this.selectedState);
    }

    if (this.searchTerm) {
      const filterValue = this.searchTerm.trim().toLowerCase();
      filteredData = filteredData.filter(data => 
        data.user.name.toLowerCase().includes(filterValue) ||
        data.user.id.toLowerCase().includes(filterValue) ||
        data.email.toLowerCase().includes(filterValue) ||
        data.onboardedDate.toLowerCase().includes(filterValue) ||
        Object.values(data.status).some(status =>  String(status).toLowerCase().includes(filterValue))
      );
    }

    this.dataSource.data = filteredData;
    this.cdr.detectChanges(); // Refresh UI
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });
  }

  // Disable future dates in the date picker
  disableFutureDates = (date: Date | null): boolean => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date > today; // Disable future dates
  };
  viewDetails(ticket: any) {
    const ticketId = ticket.id;
    this.isLoading = true; // Show loading state

    this.router.navigate(['/retailers-detail-profile', ticket.RetailerCode], {
      state: { data: ticket, type:'viewDetails' }
    });
}
}