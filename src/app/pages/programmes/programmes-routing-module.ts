import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Programmes } from './programmes/programmes';

const routes: Routes = [{ path: '', component: Programmes }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammesRoutingModule {}
