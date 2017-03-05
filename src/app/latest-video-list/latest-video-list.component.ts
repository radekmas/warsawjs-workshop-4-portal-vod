import { Component, OnInit } from '@angular/core';
import {LatestVideoService} from "../video-list/latest-video.service";

@Component({
  selector: 'app-latest-video-list',
  templateUrl: './latest-video-list.component.html',
  styleUrls: ['./latest-video-list.component.css']
})
export class LatestVideoListComponent implements OnInit {
  public videos: any[] = [];

  constructor(private latestVideoService: LatestVideoService) { }

  ngOnInit() {
    this.latestVideoService.getVideos().then((VIDEOS) => {
      this.videos = VIDEOS;
    });
  }

}
