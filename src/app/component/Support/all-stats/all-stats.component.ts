import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-stats',
  standalone: true,
  imports: [RouterLink, MatCardModule],
  templateUrl: './all-stats.component.html',
  styleUrl: './all-stats.component.scss'
})
export class AllStatsComponent {

}
