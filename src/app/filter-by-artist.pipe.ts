import { Pipe, PipeTransform } from '@angular/core';
import { Song } from './song/song.model';

@Pipe({
  name: 'searchSongs'
})
export class SearchSongsPipe implements PipeTransform {

  transform(songs: Song[], searchTerm: string): Song[] {
    if (!songs || !searchTerm) {
      return songs;
    }
    return songs.filter(song =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}