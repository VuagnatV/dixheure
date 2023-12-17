import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/playlist';
import { PlaylistService } from '../services/playlist.service';
import { AuthService } from '../services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-playlists',
  templateUrl: './my-playlists.component.html',
  styleUrls: ['./my-playlists.component.css']
})
export class MyPlaylistsComponent implements OnInit {

  playlists?: Playlist[]

  name = new FormControl('')

  constructor(private playlistService: PlaylistService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getPlaylists()
  }

  getPlaylists() {
    this.playlistService.getPlaylists(this.authService.user!).subscribe({
      next: (data) => {
        console.log(data)
        this.playlists = data
      }
    })
  }

  createPlaylist() {
    console.log(this.name.value)
    this.playlistService.createPlaylist(this.name.value!, this.authService.user?.id!).subscribe({
      next: (data) => {
        this.getPlaylists()
      }
    })
  }

  deletePlaylist(e: any) {
    this.playlistService.deletePlaylist(e).subscribe({
      next: (data) => {
        this.getPlaylists()
      }
    })
  }

}
