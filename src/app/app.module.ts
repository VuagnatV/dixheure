import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BanniereComponent } from './banniere/banniere.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { PisteAudioComponent } from './piste-audio/piste-audio.component';
import { RegeatonComponent } from './regeaton/regeaton.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyPlaylistsComponent } from './my-playlists/my-playlists.component';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';
import { SongComponent } from './song/song.component';
import { SearchSongsPipe } from './filter-by-artist.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    NavbarComponent,
    BanniereComponent,
    AlbumCardComponent,
    PisteAudioComponent,
    RegeatonComponent,
    MyPlaylistsComponent,
    PlaylistPageComponent,
    SongComponent,
    SearchSongsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
