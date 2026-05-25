import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContactRoutingModule } from './contact-routing-module';
import { Contact } from './contact/contact';

@NgModule({
  declarations: [Contact],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ContactRoutingModule],
})
export class ContactModule {}
