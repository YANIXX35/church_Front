import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FjuRoutingModule } from './fju-routing-module';
import { Fju } from './fju/fju';

@NgModule({
  declarations: [Fju],
  imports: [CommonModule, RouterModule, FjuRoutingModule]
})
export class FjuModule {}
