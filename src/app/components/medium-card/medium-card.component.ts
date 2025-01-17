import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  standalone: false,

  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.css', './medium-card.responsive.component.css']
})
export class MediumCardComponent {
  @Input()
  cardCover: string = ""
  @Input()
  cardDate: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
}
