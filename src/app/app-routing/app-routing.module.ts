import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {VideoComponent} from "../video/video.component";
import {VideoListComponent} from "../video-list/video-list.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";


const routes: Routes = [
  { path: '', component: VideoListComponent },
  { path: 'videos/:id', component: VideoComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: "**", redirectTo: "page-not-found" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
