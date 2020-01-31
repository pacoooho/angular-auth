import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {PhotoService} from '../../services/photo.service'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({  
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
}) 
export class PhotoFormComponent implements OnInit {

  photoSelected: string | ArrayBuffer;
  file: File;
typeForm: any;
  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
     console.log(event);
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
   
      reader.onload = e => this.photoSelected = reader.result;
     

      reader.readAsDataURL(this.file);
      console.log(this.file);
      const ext: String = this.file.name.split(".")[1]
      if ( ext === "png" ||  ext === "jpg") {
        this.typeForm= "png";
      } else 
      if (ext ==="mp4"){
        this.typeForm="mp4";
      }  
      console.log(this.typeForm);
    }
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {
    this.photoService
      .createPhoto(title.value, description.value, this.file)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/photos'])
        },
        err => console.log(err)
      );
    return false;
  }

}
