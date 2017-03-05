import {Component, OnInit, Input} from '@angular/core';

function Timeout(time = 1000) {
  return function(target, key, descriptor) {
    var old = descriptor.value;
    descriptor.value = function() {
      setTimeout(function() {
        old();
      }, time);
    };
  }
}

function Print() {
  return function(target,key,descriptor) {
    var old = descriptor.value;
    descriptor.value = function() {
      var val = old();
      console.log(val);
      return val;
    }
  }
}

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css', '../app.component.css']
})

export class VideoDetailComponent implements OnInit {
  @Input() video: any;
  constructor() {
//    this.test();
//    this.getName();
  }

  ngOnInit() {
  }

  @Print()
  getName() {
    return 'Radek';
  }

  @Timeout(1500)
  test() {
    console.log('test');
  }
}
