import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Photo } from 'src/app/models/Photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public photos: Array<Photo>;
  
  constructor(
    private photosService : PhotosService
  ) { 
    this.photos = [];
  }

  ngOnInit() {
    this.photosService.getPhotos().subscribe((photos: Array<Photo>) => {
      this.photos = photos;
    }, error => console.log("err: ", error.toString()));
  }

  public click() : void {
    alert("works!");
  }
}
