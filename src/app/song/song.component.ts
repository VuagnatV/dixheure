import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';
import { Song } from './song.model';
import { FormControl } from '@angular/forms';
import { PlaylistService } from '../services/playlist.service';
import { AuthService } from '../services/auth.service';
import { Playlist } from '../models/playlist';
import { PlaylistSongService } from '../services/playlist-song.service';

@Component({
    selector: 'app-song-list',
    templateUrl: './song.component.html',
    styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
    songs: Song[] = [];
    playlists: Playlist[] = [];
    artist = new FormControl('');
    title = new FormControl('');
    searchTerm: string = '';

    constructor(private songService: SongService, private authService: AuthService, private playlistService: PlaylistService, private playlistSongService: PlaylistSongService) { }

    ngOnInit() {
        this.loadSongs();
        this.loadPlaylist();
    }

    loadPlaylist() {
        this.playlistService.getPlaylists(this.authService.user!).subscribe(playlists => this.playlists = playlists)
    }

    loadSongs() {
        this.songService.getSongs().subscribe(songs => this.songs = songs);
    }

    addSong() {
        console.log("title", this.title.value)
        console.log("ARTIST", this.artist.value)
        const newSong: Song = { title: this.title.value!, artist: this.artist.value! };
        console.log("regarde ici " + newSong);
        this.songService.addSong(newSong)
            .subscribe(song => this.songs.push(song));
    }

    addToPlaylist(songId: any, playlistId: any) {
        this.playlistSongService.addSongToPlaylist(songId, playlistId).subscribe()
    }

    deleteSong(songId: any) {
        this.songService.deleteSong(songId).subscribe(() => {
            this.songs = this.songs.filter(song => song.id !== songId);
        });
    }

}

