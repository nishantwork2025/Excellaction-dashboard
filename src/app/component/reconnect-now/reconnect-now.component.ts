import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FeathericonsComponent } from '../../icons/feathericons/feathericons.component';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';
import {
  matFormFieldAnimations,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-reconnect-now',
  standalone: true,
  imports: [
    FeathericonsModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    NgIf,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './reconnect-now.component.html',
  styleUrl: './reconnect-now.component.scss',
})
export class ReconnectNowComponent {
  displayedColumns: string[] = [
    'user',
    'email',
    'roles',
    'projects',
    'status',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
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
}

export interface PeriodicElement {
  user: any;
  email: string;
  roles: string;
  projects: number;
  status: any;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    user: {
      img: 'assets/images/users/user1.jpg',
      name: 'Sarah Rodriguez',
      number: '+03 4567 8900',
    },
    email: 'rodriguez@trinta.com',
    roles: 'Administrator',
    projects: 805,
    status: {
      active: 'Active',
      // deactive : 'Deactive',
      // converted : 'Converted'
    },
    action: {
      location: 'chembur',
      // edit: 'ri-edit-line',
      // delete : 'ri-delete-bin-line'
    },
  },
  {
    user: {
      img: 'assets/images/users/user2.jpg',
      name: 'Marcus Davis',
      number: '+03 4567 8900',
    },
    email: 'davis@trinta.com',
    roles: 'Administrator',
    projects: 324,
    status: {
      active: 'Active',
      // deactive : 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user3.jpg',
      name: 'Emily Johnson',
      number: '+03 4567 8900',
    },
    email: 'johnson@trinta.com',
    roles: 'Administrator',
    projects: 902,
    status: {
      // active: 'Active',
      deactive: 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user9.jpg',
      name: 'William Anderson',
      number: '+03 4567 8900',
    },
    email: 'anderson@trinta.com',
    roles: 'Administrator',
    projects: 519,
    status: {
      // active: 'Active',
      // deactive : 'Deactive',
      converted: 'Converted',
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user10.jpg',
      name: 'Charlotte Lee',
      number: '+03 4567 8900',
    },
    email: 'lee@trinta.com',
    roles: 'Administrator',
    projects: 227,
    status: {
      active: 'Active',
      // deactive : 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user6.jpg',
      name: 'David Stivy',
      number: '+03 4567 8900',
    },
    email: 'david@trinta.com',
    roles: 'Administrator',
    projects: 902,
    status: {
      // active: 'Active',
      deactive: 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user8.jpg',
      name: 'Olivia Lucky',
      number: '+03 4567 8900',
    },
    email: 'olivia@trinta.com',
    roles: 'Administrator',
    projects: 519,
    status: {
      // active: 'Active',
      // deactive : 'Deactive',
      converted: 'Converted',
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user4.jpg',
      name: 'Maxwel Smith',
      number: '+03 4567 8900',
    },
    email: 'maxwel@trinta.com',
    roles: 'Administrator',
    projects: 227,
    status: {
      active: 'Active',
      // deactive : 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user5.jpg',
      name: 'Benjamin Clark',
      number: '+03 4567 8900',
    },
    email: 'clark@trinta.com',
    roles: 'Administrator',
    projects: 324,
    status: {
      active: 'Active',
      // deactive : 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user21.jpg',
      name: 'Alina Smith',
      number: '+03 4567 8900',
    },
    email: 'alina@trinta.com',
    roles: 'Administrator',
    projects: 805,
    status: {
      // active: 'Active',
      deactive: 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user21.jpg',
      name: 'Alina Smith',
      number: '+03 4567 8900',
    },
    email: 'alina@trinta.com',
    roles: 'Administrator',
    projects: 805,
    status: {
      // active: 'Active',
      deactive: 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user5.jpg',
      name: 'Benjamin Clark',
      number: '+03 4567 8900',
    },
    email: 'clark@trinta.com',
    roles: 'Administrator',
    projects: 324,
    status: {
      active: 'Active',
      // deactive : 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user4.jpg',
      name: 'Charlotte Lee',
      number: '+03 4567 8900',
    },
    email: 'charlotte@trinta.com',
    roles: 'Administrator',
    projects: 227,
    status: {
      active: 'Active',
      // deactive : 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user8.jpg',
      name: 'Olivia Lucky',
      number: '+03 4567 8900',
    },
    email: 'olivia@trinta.com',
    roles: 'Administrator',
    projects: 519,
    status: {
      // active: 'Active',
      // deactive : 'Deactive',
      converted: 'Converted',
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user6.jpg',
      name: 'David Stivy',
      number: '+03 4567 8900',
    },
    email: 'david@trinta.com',
    roles: 'Administrator',
    projects: 902,
    status: {
      // active: 'Active',
      deactive: 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user10.jpg',
      name: 'Maxwel Smith',
      number: '+03 4567 8900',
    },
    email: 'maxwel@trinta.com',
    roles: 'Administrator',
    projects: 227,
    status: {
      active: 'Active',
      // deactive : 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user9.jpg',
      name: 'William Anderson',
      number: '+03 4567 8900',
    },
    email: 'anderson@trinta.com',
    roles: 'Administrator',
    projects: 519,
    status: {
      // active: 'Active',
      // deactive : 'Deactive',
      converted: 'Converted',
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user3.jpg',
      name: 'Emily Johnson',
      number: '+03 4567 8900',
    },
    email: 'johnson@trinta.com',
    roles: 'Administrator',
    projects: 902,
    status: {
      // active: 'Active',
      deactive: 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user2.jpg',
      name: 'Marcus Davis',
      number: '+03 4567 8900',
    },
    email: 'davis@trinta.com',
    roles: 'Administrator',
    projects: 324,
    status: {
      active: 'Active',
      // deactive : 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
  {
    user: {
      img: 'assets/images/users/user1.jpg',
      name: 'Sarah Rodriguez',
      number: '+03 4567 8900',
    },
    email: 'rodriguez@trinta.com',
    roles: 'Administrator',
    projects: 805,
    status: {
      active: 'Active',
      // deactive : 'Deactive',
      // converted : 'Converted'
    },
    action: {
      edit: 'ri-edit-line',
      delete: 'ri-delete-bin-line',
    },
  },
];
function onSearch() {
  throw new Error('Function not implemented.');
}
