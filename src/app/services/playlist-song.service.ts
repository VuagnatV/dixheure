import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaylistSongService {

  constructor(private http: HttpClient) { }

  dbUrl: string = 'http://localhost:3000/playlistSongs';

  addSongToPlaylist(songId: any, playlistId: any) {
    return this.http.post(this.dbUrl, { songId, playlistId })
  }

  getSongsForPlaylist(playlistId: any) {
    return this.http.get<any[]>(`${this.dbUrl}?playlistId=${playlistId}&_expand=song`);
  }
}
