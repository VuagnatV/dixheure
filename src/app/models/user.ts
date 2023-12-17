import { Playlist } from "./playlist";

export interface User {
    id?: number;
    email: string;
    password: string;
    playsits?: Playlist[];
}