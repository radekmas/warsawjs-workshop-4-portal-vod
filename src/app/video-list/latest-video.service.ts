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

  getVideo(id: string): Promise<any> {
    return new Promise((resolve) => {
      return resolve(VIDEOS.find(v => v.id == id));
    });
  }

  searchVideoByTitle(phrase: string): Promise<any[]> {
    var regExp = new RegExp(phrase, 'i');
    return this.getVideos().then((videos) => {
      return videos.filter((v) => {
        return regExp.test(v.name);
      })
    });
  }
}
