import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { CatFormComponent } from './cat-form/cat-form.component';


const routes: Routes = [
  { path: 'cat-form', component: CatFormComponent},
  { path: 'cat-form/:id', component: CatFormComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
