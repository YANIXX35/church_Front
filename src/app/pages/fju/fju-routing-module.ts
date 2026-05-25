import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Fju } from './fju/fju';

const routes: Routes = [
  { path: '', component: Fju }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FjuRoutingModule {}
