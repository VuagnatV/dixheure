import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';
import { Song } from './song.model';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-song-list',
    templateUrl: './song.component.html',
    styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
    songs: Song[] = [];
    artist = new FormControl('');
    title = new FormControl('');

    constructor(private songService: SongService) {}

    ngOnInit() {
        this.loadSongs();
    }

    loadSongs() {
        this.songService.getSongs().subscribe(songs => this.songs = songs);
    }

    addSong() {
      console.log("title" , this.title.value)
      console.log("ARTIST" , this.artist.value)
        const newSong: Song = { title: this.title.value!, artist: this.artist.value!};
        console.log("regarde ici " + newSong);
        this.songService.addSong(newSong)
        .subscribe(song => this.songs.push(song));
    }

    deleteSong(songId: any) {
        this.songService.deleteSong(songId).subscribe(() => {
            this.songs = this.songs.filter(song => song.id !== songId);
        });
    }

  }

