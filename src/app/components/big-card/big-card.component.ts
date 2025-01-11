import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,

  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent {
  @Input()
  photoCover: string = "";
  @Input()
  cardDate: string = ""
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = ""

}
