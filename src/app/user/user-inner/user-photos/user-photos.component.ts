import { Component, OnInit } from '@angular/core';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min.js'
import * as PhotoSwipe from 'photoswipe/dist/photoswipe.js'

@Component({
  selector: 'app-user-photos',
  templateUrl: 'user-photos.component.html',
  styleUrls: ['user-photos.component.css']
})
export class UserPhotosComponent implements OnInit {
  public gallery;

  public items = [
    {
      src: 'http://ichef-1.bbci.co.uk/news/976/media/images/83351000/jpg/_83351965_explorer273lincolnshirewoldssouthpicturebynicholassilkstone.jpg',
      w: 600,
      h: 400
    },
    {
      src: 'https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg',
      w: 1200,
      h: 900
    }
  ];

  constructor() {


  }

  ngOnInit() {
  }


  public openGallery(imgIndex) {
    let pswpElement = document.querySelectorAll('.pswp')[0];
    let options = {
      index: imgIndex
    };
    this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.items, options);
    this.gallery.init();
  }

}
