import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoComponent } from './video/video.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {LatestVideoService} from "./video-list/latest-video.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { LatestVideoListComponent } from './latest-video-list/latest-video-list.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoComponent,
    VideoDetailComponent,
    PageNotFoundComponent,
    SearchComponent,
    LatestVideoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2PaginationModule
  ],
  providers: [LatestVideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
