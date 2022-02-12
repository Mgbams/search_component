import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcoleComponent } from './ecole/ecole.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  { path: 'home', component: RechercheComponent },
  { path: 'ecole/:NOM_ETUDIANT', component: EcoleComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
