import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProgrammesRoutingModule } from './programmes-routing-module';
import { Programmes } from './programmes/programmes';

@NgModule({
  declarations: [Programmes],
  imports: [CommonModule, RouterModule, ProgrammesRoutingModule],
})
export class ProgrammesModule {}
