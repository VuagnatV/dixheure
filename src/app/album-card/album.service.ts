import { Injectable } from '@angular/core';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private albums: Album[] = [
    {
      titre: "jason",
      artiste: "string",
      image: "string"
    },
  ];

  getAlbums(): Album[] {
    return this.albums;
  }
}
