import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PhotoService } from '../../services/photo.service'
import { Photo } from '../../interfaces/Photo'

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = [];
  types: any[] = [];
  constructor(
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(
        res => {
          for (let i in res) {
            console.log(res[i].imagePath.split(".")[1]);
            this.photos.push(res[i]);
            // if (res[i].imagePath.split(".")[1] === "png") {
            //   this.types.push("png");
            // } else {
            //   this.types.push("mp4");
            // }
            const ext: String = res[i].imagePath.split(".")[1]
            if ( ext === "png" ||  ext === "jpg") {
              this.types.push("png");
            } else 
            if (ext ==="mp4"){
              this.types.push("mp4");
            } 
          }
          //console.log(this.types);
          //  this.photos = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    this.router.navigate(['/photos', id]);
  }

}
