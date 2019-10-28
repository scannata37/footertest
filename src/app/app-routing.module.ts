import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialFooterComponent } from './material-footer/material-footer.component';

const routes: Routes = [
  {path: 'material-footer', component: MaterialFooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }