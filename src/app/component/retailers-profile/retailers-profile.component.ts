import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-retailers-profile',
  standalone: true,
  imports: [[RouterLink, MatCardModule, MatButtonModule]],
  templateUrl: './retailers-profile.component.html',
  styleUrl: './retailers-profile.component.scss'
})
export class RetailersProfileComponent {

}
