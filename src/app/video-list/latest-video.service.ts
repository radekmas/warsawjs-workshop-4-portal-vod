import {Injectable} from '@angular/core';
import {VIDEOS} from "./mock-videos";

@Injectable()
export class LatestVideoService {

  constructor() {
  }

  getVideos(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(function () {
        return resolve(VIDEOS);
      }, 500);
    });
  }

  getVideo(id): Promise<any> {
    return new Promise((resolve) => {
        return resolve(VIDEOS.find(v => v.id == id));
    });
  }
}
