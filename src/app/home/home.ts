import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  imports: [MatTooltipModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] ,
})
export class Home {
  currentYear: number = new Date().getFullYear();
}
