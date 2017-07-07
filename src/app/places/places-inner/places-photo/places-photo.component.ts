import { Component, OnInit } from '@angular/core';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min.js'
import * as PhotoSwipe from 'photoswipe/dist/photoswipe.js'

@Component({
  selector: 'app-places-photo',
  templateUrl: './places-photo.component.html',
  styleUrls: ['./places-photo.component.css']
})
export class PlacesPhotoComponent implements OnInit {

  public gallery;

  public photos = [
    {
      src: 'assets/img/gallery/crop.jpeg',
      w: 600,
      h: 400
    },
    {
      src: 'assets/img/gallery/crop-2.jpeg',
      w: 600,
      h: 400
    },
    {
      src: 'assets/img/gallery/crop-3.jpg',
      w: 600,
      h: 400
    },
    {
      src: 'assets/img/gallery/crop-4.jpeg',
      w: 600,
      h: 400
    },
    {
      src: 'assets/img/gallery/crop-5.jpg',
      w: 600,
      h: 400
    },
    {
      src: 'assets/img/gallery/crop-6.jpg',
      w: 600,
      h: 400
    },
    {
      src: 'assets/img/gallery/crop-1.jpeg',
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
    this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.photos, options);
    this.gallery.init();
  }

}
