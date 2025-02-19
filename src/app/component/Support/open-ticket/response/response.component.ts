import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgxEditorModule } from 'ngx-editor';
import { FeathericonsModule } from '../../../../icons/feathericons/feathericons.module';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../../../data-service.service';

@Component({
  selector: 'app-response',
  standalone: true,
    imports: [
    MatCardModule,
    FeathericonsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxEditorModule,
    MatDatepickerModule,
    FileUploadModule,
    MatSelectModule,
    MatRadioModule,
    CommonModule,
    ReactiveFormsModule

  ], templateUrl: './response.component.html',
  styleUrl: './response.component.scss'
})
export class ResponseComponent implements OnInit {

  @Input() remarkData: any; // Receives data from the parent component
  addForm:FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataServiceService){
    this.addForm = this.fb.group({
      Remark: new FormControl(''),
      CreatedByName: new FormControl(1),
      CreatedByID: new FormControl(1),
      createddate: new FormControl(1),
      
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("oninitd", this.remarkData)
    this.addForm.patchValue({
      CreatedByName: this.remarkData.CreatedByName,
      CreatedByID: this.remarkData.CreatedByID,
      created_at: this.remarkData.created_at,

    })
    
    
  }

  onSubmit(){
    console.log('thisva.lue', this.addForm.value)

    this.dataService.put('tickets', this.remarkData.id,  this.addForm.value).subscribe(response=>{
      console.log('response', response)
    })
  }

}
1 