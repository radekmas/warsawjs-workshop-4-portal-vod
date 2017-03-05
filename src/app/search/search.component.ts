import {Component, OnInit, Input} from '@angular/core';
import {LatestVideoService} from "../video-list/latest-video.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public videos: any[] = [];

  constructor(private latestVideoService: LatestVideoService) {
  }


  ngOnInit() {
  }

  search(phrase) {
    if (!phrase) {
      return;
    }

    this.latestVideoService.searchVideoByTitle(phrase)
      .then((videos) => {
        this.videos = videos;
      });
  }
}
