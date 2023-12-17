import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';
import { Playlist } from '../models/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  dbUrl: string = 'http://localhost:3000/playlists';


  getPlaylists(user: User) {
    return this.http.get<Playlist[]>(this.dbUrl + '?userId=' + user.id)
  }

  createPlaylist(name: string, userId: number) {
    return this.http.post(this.dbUrl, { name, userId })
  }

  deletePlaylist(id: number) {
    return this.http.delete(this.dbUrl + '/' + id)
  }
}
