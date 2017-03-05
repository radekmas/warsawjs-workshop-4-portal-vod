import {Injectable} from '@angular/core';

const VIDEOS = [
  {
    title: 'La La Land'
  },
  {
    title: 'Moonlight'
  },
  {
    title: 'Skyfall'
  },
];

@Injectable()
export class LatestVideoService {

  constructor() {
  }

  getVideos(): Promise<any[]> {
    return Promise.resolve(VIDEOS);
  }
}
