import { Component, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
 
function readBase64(file): Promise<any> {
  var reader  = new FileReader();
  var future = new Promise((resolve, reject) => {
    reader.addEventListener("load", function () {
      resolve(reader.result);
    }, false);

    reader.addEventListener("error", function (event) {
      reject(event);
    }, false);

    reader.readAsDataURL(file);
  });
  return future;
}

const URL = 'http://localhost:4000/api/upload';

@Component({
  selector: 'app-uplaod-list',
  templateUrl: './uplaod-list.component.html',
  styleUrls: ['./uplaod-list.component.scss']
})
export class UplaodListComponent {

  public uploader:FileUploader = new FileUploader({
    url: URL, 
    disableMultipart:true
    });
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  fileObject: any;


  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e; 
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];

    console.log(file);

    readBase64(file)
      .then(function(data) {
      console.log(data);
    })

  }
}
