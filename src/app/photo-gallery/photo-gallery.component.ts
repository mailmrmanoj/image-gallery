import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  imageLists: Array<any>;
  constructor() { }

  ngOnInit() {
    this.imageLists = new Array();

  }
  showImage(url, name) {
    let imageObj = {
      imageUrl: url,
      imageName: name
    }
    this.imageLists.push(imageObj);
  }

  sortAscending(param) {
    if (param === 'asc') {
      this.imageLists.sort(this.compareAsc);
    } else if (param === 'desc') {
      this.imageLists.sort(this.compareDesc);
    }
  }

  compareAsc(a, b) {
    if (a.imageName < b.imageName) {
      return -1;
    }
    return 0;
  }
  compareDesc(a, b) {
    if (a.imageName > b.imageName) {
      return -1;
    }
    return 0;
  }

}
