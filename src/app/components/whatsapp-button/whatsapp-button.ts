import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: false,
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.scss',
})
export class WhatsappButton {
  // Remplacez par le vrai numéro du pasteur (format international sans +)
  private phoneNumber = '243XXXXXXXXX';
  private message = encodeURIComponent('Bonjour Pasteur, je vous contacte depuis le site de l\'Église URD.');
  whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${this.message}`;
}
