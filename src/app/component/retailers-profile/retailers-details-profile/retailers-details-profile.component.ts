
import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { ActivityComponent } from './activity/activity.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
// import { LineAreaChartComponent } from './line-area-chart/line-area-chart.component';
import { LineColumnChartComponent } from '../../../charts/apexcharts/line-column-chart/line-column-chart.component';
import { FeathericonsModule } from '../../../icons/feathericons/feathericons.module';
import { MatCard, MatCardModule } from '@angular/material/card';
import Editor from 'ngx-editor/lib/Editor';

@Component({
    selector: 'app-retailers-details-profile',
    standalone: true,
    imports: [FeathericonsModule, MatCardModule ,],
    templateUrl: './retailers-details-profile.component.html',
    styleUrl: './retailers-details-profile.component.scss'
  })
  export class RetailersDetailsProfileComponent {
    editor: Editor;
  // Define the toolbar configuration
  toolbar: any;
  // Define the content of the
  html: string;
 ticketData: any = '';

  constructor() {
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