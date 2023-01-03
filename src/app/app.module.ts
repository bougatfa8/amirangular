import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemandeStageComponent } from './demande-stage/demande-stage.component';
import { RemplisserComponent } from './remplisser/remplisser.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AjouterComponent } from './ajouter/ajouter.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';

@NgModule({
  declarations: [
    AppComponent,
    DemandeStageComponent,
    RemplisserComponent,
    ConsulterComponent,
    LoginComponent,
    AjouterComponent,
    RegisterComponent,
    ListeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
