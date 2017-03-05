import {Component, OnInit, Input} from '@angular/core';
import {LatestVideoService} from "../video-list/latest-video.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private latestVideoService: LatestVideoService) { }

  ngOnInit() {
  }

  search(phrase) {
    console.log(phrase);
    var vidoes = this.latestVideoService.searchVideoByTitle(phrase);

  }

}
