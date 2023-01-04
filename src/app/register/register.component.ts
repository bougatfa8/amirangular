import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newProduit = new User();
  password2!:string;
color !:"red";
buttonColor = true;
showButton = false;

  constructor(
    private produitService: ProduitService,
              private router : Router) { }
 
              addUser(){
    this.produitService.ajouterUser(this.newProduit)
                      .subscribe(prod => {
                      console.log(prod);
                      }); 
                      this.showButton=true
                     }
                     confirmer(){
                      this.newProduit.password="USER"
                      this.produitService.ajouterRole(this.newProduit)
                      .subscribe(prod => {
                      console.log(prod);
                      }); 
                     }

  ngOnInit(): void {
  }

}
