import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from './song.model';

@Injectable({
    providedIn: 'root'
})
export class SongService {
    private apiUrl = 'http://localhost:3000/songs';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    // Get all songs
    getSongs(): Observable<Song[]> {
        return this.http.get<Song[]>(this.apiUrl);
    }

    // Get a single song by id
    getSongById(id: number): Observable<Song> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Song>(url);
    }

    // Add a new song
    addSong(song: Song): Observable<Song> {
        console.log("SongService", song)
        return this.http.post<Song>(this.apiUrl, song);
    }

    // Update a song
    updateSong(song: Song): Observable<any> {
        const url = `${this.apiUrl}/${song.id}`;
        return this.http.put(url, song);
    }

    // Delete a song
    deleteSong(id: number): Observable<Song> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<Song>(url);
    }
}
