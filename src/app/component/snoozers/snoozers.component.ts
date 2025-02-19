import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';

@Component({
  selector: 'app-snoozers',
  standalone: true,
  imports: [RouterLink, MatCardModule, FeathericonsModule],
  templateUrl: './snoozers.component.html',
  styleUrl: './snoozers.component.scss'
})
export class SnoozersComponent {

}
