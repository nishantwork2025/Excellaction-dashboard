import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';


@Component({
  selector: 'app-welcome-retailers',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FeathericonsModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    CommonModule,
    NgxMatTimepickerModule
],
  templateUrl: './welcome-retailers.component.html',
  styleUrl: './welcome-retailers.component.scss'
})
export class WelcomeRetailersComponent {

  enquiryStatus: string = 'yes';  // to track if enquiry is 'yes' or 'no'
  trainingDate: Date | null = null; // to store the selected date
  trainingTime: string = ''; // to store the selected time
  setEnquiryStatus(status: string) {
    this.enquiryStatus = status;
  }

  onSubmit() {
    if (this.enquiryStatus === 'no' && (this.trainingDate && this.trainingTime)) {
      console.log('Training scheduled for:', this.trainingDate, this.trainingTime);
    } else if (this.enquiryStatus === 'yes') {
      console.log('Enquiry is completed.');
    } else {
      console.log('Please provide the required details.');
    }}
}
