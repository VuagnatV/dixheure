import { Component } from '@angular/core';

@Component({
  selector: 'app-regeaton',
  templateUrl: './regeaton.component.html',
  styleUrls: ['./regeaton.component.css']
})
export class RegeatonComponent {
  albums = [
    { title: 'Album 1', artist: 'Artiste 1', cover: 'lien_vers_pochette_1.jpg' },
    { title: 'Album 2', artist: 'Artiste 2', cover: 'lien_vers_pochette_2.jpg' },

  ];
}
