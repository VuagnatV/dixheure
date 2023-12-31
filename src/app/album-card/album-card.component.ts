import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent {
  @Input() titre?: string;
  @Input() artiste?: string;
  @Input() image?: string;
}
