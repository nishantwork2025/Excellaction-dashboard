import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { ActivityComponent } from './activity/activity.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { LineAreaChartComponent } from './line-area-chart/line-area-chart.component';
import { LineColumnChartComponent } from '../../charts/apexcharts/line-column-chart/line-column-chart.component';

@Component({
    selector: 'app-social-feed-page',
    standalone: true,
    imports: [ProfileComponent, UserBioComponent, ActivityComponent, FriendsComponent, PhotosComponent, NewsfeedComponent,  LineColumnChartComponent],
    templateUrl: './social-feed-page.component.html',
    styleUrl: './social-feed-page.component.scss'
})
export class SocialFeedPageComponent {}