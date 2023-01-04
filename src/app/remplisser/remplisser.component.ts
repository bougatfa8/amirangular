import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-remplisser',
  templateUrl: './remplisser.component.html',
  styleUrls: ['./remplisser.component.css']
})
export class RemplisserComponent implements OnInit {
cle:string="./assets/c.jpg"
selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  newProduit = new Produit();
  newIdCat! : number;
  


  ngOnInit(): void {

   
 
  }

 
  addProduit(){
    this.produitService.ajouterProduit(this.newProduit)
                      .subscribe(prod => {
                      console.log(prod);
                      }); 
    }


  fileInfos?: Observable<any>;
  constructor(private uploadService: FileUploadService,
    private produitService: ProduitService,
              private router : Router) { }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              // this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }







}
