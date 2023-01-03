import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
      apiURL: string = 'http://localhost:8080/produits/api';

  apiURLCat: string = 'http://localhost:8080/produits/cat';

  produits! : Produit[]; //un tableau de produits
  //categories : Categorie[];
 

  constructor(private http : HttpClient,
              private authService : AuthService) { 
    
    /* this.categories = [
      {idCat : 1, nomCat : "PC"},
      {idCat : 2, nomCat : "Imprimante"}
    ]; */
  /*  this.produits = [{idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011"),
                      categorie : {idCat : 1, nomCat : "PC"} },
                     {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010"),
                    categorie :  {idCat : 2, nomCat : "Imprimante"}},
                     {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020"), 
                     categorie : {idCat : 1, nomCat : "PC"}}
                    ];
                    */
    
  }

  listeProduit(): Observable<Produit[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Produit[]>(this.apiURL+"/all",{headers:httpHeaders});

    }

    ajouterProduit( prod: Produit):Observable<Produit>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
        return this.http.post<Produit>(this.apiURL, prod, {headers:httpHeaders});
      }
     
      
   
  supprimerProduit(id : number) {
        const url = `${this.apiURL}/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.delete(url,  {headers:httpHeaders});
        }
      
       consulterProduit(id: number): Observable<Produit> {
          const url = `${this.apiURL}/${id}`;
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
            return this.http.get<Produit>(url,{headers:httpHeaders});
          }
  
      updateProduit(prod :Produit) : Observable<Produit>    {
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
            return this.http.put<Produit>(this.apiURL, prod, {headers:httpHeaders});
          }
  

         
       

       rechercherParCategorie(idCat: number): Observable<Produit[]> {
          const url = `${this.apiURL}/prodscat/${idCat}`;
          return this.http.get<Produit[]>(url);
         } 

  rechercherParNom(nom: string):Observable< Produit[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Produit[]>(url);
    }

    ajouterCategorie( cat: Categorie):Observable<Categorie>{
      return this.http.post<Categorie>(this.apiURLCat, cat, httpOptions);
      }
      

 
}