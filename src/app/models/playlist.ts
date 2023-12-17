import { Song } from "./song";

export interface Playlist {
    id?: number;
    name: string;
    userId: number;
    songs?: Song[]
}