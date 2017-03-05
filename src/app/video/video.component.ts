import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {LatestVideoService} from "../video-list/latest-video.service";
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css', '../app.component.css']
})
export class VideoComponent implements OnInit {
  @Input() id;
  video: any;

  constructor(private latestVideoService: LatestVideoService,
              private route: ActivatedRoute,
              router: Router) {
  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      return this.latestVideoService.getVideo(params['id'])
    }).subscribe(
      video => {
        this.video = video
    });
  }

//  private ngOnDestroy() {
//    this.sub.unsubscribe();
//  }

}
