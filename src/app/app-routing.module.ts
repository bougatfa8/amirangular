import { ListeComponent } from './liste/liste.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { DemandeStageComponent } from './demande-stage/demande-stage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RemplisserComponent } from './remplisser/remplisser.component';

const routes: Routes = [ {path: "demander-stage", component : DemandeStageComponent}, 
{path: "remplisser-cahier-charge", component : RemplisserComponent},
{path: "sujet-valider", component : ConsulterComponent},
{path: "login", component : LoginComponent},
{path: "liste", component : ListeComponent},

{path: "ajouter-user", component : AjouterComponent},
{path: "register", component : RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
