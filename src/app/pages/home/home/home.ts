import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  slides = [
    {
      image: 'assets/images/img_bg_1.jpg',
      titre: 'Bienvenue à l\'Église URD',
      sousTitre: 'Église Universelle du Royaume de Dieu',
      texte: 'Un lieu de grâce, de foi et de transformation. Rejoignez-nous chaque dimanche pour vivre la présence de Dieu.',
      lien: '/programmes',
      btnTexte: 'Voir les Programmes'
    },
    {
      image: 'assets/images/img_bg_2.jpg',
      titre: 'La Prière Change Tout',
      sousTitre: 'Programmes de Prières',
      texte: 'Rejoignez nos séances de prière hebdomadaires. Ensemble, nous intercédons pour nos familles, notre ville et le monde.',
      lien: '/programmes',
      btnTexte: 'Nos Programmes'
    },
    {
      image: 'assets/images/img_bg_3.jpg',
      titre: 'Venez Comme Vous Êtes',
      sousTitre: 'Une Famille, Une Foi',
      texte: 'Notre église vous accueille avec amour. Découvrez une communauté chaleureuse prête à vous accompagner.',
      lien: '/about',
      btnTexte: 'En Savoir Plus'
    }
  ];

  currentSlide = 0;

  counters = [
    { icon: 'icon-group', valeur: 500, label: 'Membres Actifs' },
    { icon: 'icon-clock', valeur: 15, label: 'Années de Ministère' },
    { icon: 'icon-heart', valeur: 1000, label: 'Vies Transformées' },
    { icon: 'icon-map-marker', valeur: 3, label: 'Antennes' }
  ];

  setSlide(index: number): void {
    this.currentSlide = index;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
