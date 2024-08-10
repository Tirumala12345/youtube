import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HistoryComponent } from './history/history.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';
import { LikedvideosComponent } from './likedvideos/likedvideos.component';
import { AllComponent } from './all/all.component';
import { MusicComponent } from './music/music.component';
import { NewsComponent } from './news/news.component';
import { MoviesComponent } from './movies/movies.component';
import { LiveComponent } from './live/live.component';
import { RecentlyuploadedComponent } from './recentlyuploaded/recentlyuploaded.component';
import { WatchedComponent } from './watched/watched.component';
import { NewtoyouComponent } from './newtoyou/newtoyou.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllComponent },
      { path: 'music', component: MusicComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'news', component: NewsComponent },
      { path: 'live', component: LiveComponent },
      { path: 'recentlyuploaded', component: RecentlyuploadedComponent },
      { path: 'watched', component: WatchedComponent },
      { path: 'newtoyou', component: NewtoyouComponent },
    ]
  },
 
  {path:'shorts',component:ShortsComponent},
  {path:'subscriptions',component:SubscriptionsComponent},
  {path:'history',component:HistoryComponent},
  {path:'playlist',component:PlaylistComponent},
  {path:'watchlater',component:WatchlaterComponent},
  {path:'likedvideos',component:LikedvideosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
