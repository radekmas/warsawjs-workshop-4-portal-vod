import {Component, OnInit, Input} from '@angular/core';
import {LatestVideoService} from "./latest-video.service";
//import { Video } from '../video.service.ts';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [LatestVideoService]
})
export class VideoListComponent implements OnInit {
  @Input() videos: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }
}
