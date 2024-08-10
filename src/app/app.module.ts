import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HistoryComponent } from './history/history.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';
import { LikedvideosComponent } from './likedvideos/likedvideos.component';
import { AllComponent } from './all/all.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { NewsComponent } from './news/news.component';
import { LiveComponent } from './live/live.component';
import { RecentlyuploadedComponent } from './recentlyuploaded/recentlyuploaded.component';
import { WatchedComponent } from './watched/watched.component';
import { NewtoyouComponent } from './newtoyou/newtoyou.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShortsComponent,
    SubscriptionsComponent,
    HistoryComponent,
    PlaylistComponent,
    WatchlaterComponent,
    LikedvideosComponent,
    AllComponent,
    MusicComponent,
    MoviesComponent,
    NewsComponent,
    LiveComponent,
    RecentlyuploadedComponent,
    WatchedComponent,
    NewtoyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
