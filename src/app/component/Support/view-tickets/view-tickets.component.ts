import { Component, OnInit,Input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FeathericonsModule } from '../../../icons/feathericons/feathericons.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgxEditorModule } from 'ngx-editor';
import { Editor } from 'ngx-editor'; // Import Editor from ngx-editor
import { ResponseComponent } from '../open-ticket/response/response.component';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { DataServiceService } from '../../../data-service.service';

@Component({
  selector: 'app-view-tickets',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    NgxEditorModule,
    MatDatepickerModule,
    FileUploadModule,
    MatSelectModule,
    MatRadioModule,
    ResponseComponent,
  ],
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss'],
})
export class ViewTicketsComponent implements OnInit {
  // Initialize the editor instance
  editor: Editor;
  // Define the toolbar configuration
  toolbar: any;
  // Define the content of the
  html: string;
 ticketData: any = '';

  constructor(private route:ActivatedRoute, private dataService: DataServiceService) {
    // Initialize the editor
    // this.editor = new Editor();

    // Toolbar configuration for the editor
    // this.toolbar = [
    //   'bold', 'italic', 'underline', '|',
    //   'ordered_list', 'bullet_list', '|',
    //   'link', 'image', '|',
    //   'undo', 'redo'
    // ];

    // Initial content for the editor (can be empty or pre-loaded content)
    this.html = '';
  }

  ngOnInit(): void {
    const navigation = history.state;
    if (navigation.type === 'viewDetails') {
      console.log('okay done', navigation);
      const ticketId = this.route.snapshot.params['id'];
      console.log("ticketId", ticketId)
      this.dataService.get<any>('tickets', ticketId).subscribe(response =>{
        console.log('response id data', response)
      })
      this.ticketData = navigation.data;
    }
  }

  // Destroy the editor instance when the component is destroyed
  ngOnDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  }



  // Selected person for "Close By"
  selectedPerson: string = '';
}
