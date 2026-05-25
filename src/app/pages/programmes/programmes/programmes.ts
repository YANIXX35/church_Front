import { Component, OnInit, inject } from '@angular/core';
import { ChurchService, Programme } from '../../../services/church';

@Component({
  selector: 'app-programmes',
  standalone: false,
  templateUrl: './programmes.html',
  styleUrl: './programmes.scss',
})
export class Programmes implements OnInit {
  private churchService = inject(ChurchService);

  programmes: Programme[] = [];
  filtreActif = 'tous';
  isLoading = true;

  filtres = [
    { key: 'tous', label: 'Tous' },
    { key: 'priere', label: 'Prières' },
    { key: 'enseignement', label: 'Enseignement' },
    { key: 'reunion', label: 'Réunions' },
    { key: 'culte', label: 'Cultes' }
  ];

  programmesStatiques: Programme[] = [
    {
      id: 1, jour: 'Lundi', titre: 'Prière pour la Vie Financière',
      description: 'Intercession et prières pour les bénédictions financières et la prospérité selon la Parole de Dieu.',
      date_heure: new Date().toISOString(), lieu: "Siège de l'Église",
      type_programme: 'priere', heures: ['6h00', '15h00', '18h30'], heure_principale: '18h30'
    },
    {
      id: 2, jour: 'Mardi', titre: 'Prière pour la Santé',
      description: 'Prières pour la guérison divine et la santé de nos familles et de toute la communauté.',
      date_heure: new Date().toISOString(), lieu: "Siège de l'Église",
      type_programme: 'priere', heures: ['6h00', '15h00', '18h30'], heure_principale: '18h30'
    },
    {
      id: 3, jour: 'Mercredi', titre: 'Apprendre la Parole de Dieu',
      description: 'Enseignement biblique approfondi pour grandir dans la connaissance et la sagesse de la Parole.',
      date_heure: new Date().toISOString(), lieu: "Siège de l'Église",
      type_programme: 'enseignement', heures: ['6h00', '15h00', '18h30'], heure_principale: '18h30'
    },
    {
      id: 4, jour: 'Jeudi', titre: 'Prière pour la Vie Sentimentale',
      description: 'Intercession pour les couples, les familles et les personnes en quête d\'une union bénie par Dieu.',
      date_heure: new Date().toISOString(), lieu: "Siège de l'Église",
      type_programme: 'priere', heures: ['6h00', '15h00', '18h30'], heure_principale: '18h30'
    },
    {
      id: 5, jour: 'Vendredi', titre: 'Prière contre les Attaques Spirituelles',
      description: 'Combat spirituel et délivrance contre toutes les forces des ténèbres. Restez protégés en Christ.',
      date_heure: new Date().toISOString(), lieu: "Siège de l'Église",
      type_programme: 'priere', heures: ['6h00', '15h00', '18h30'], heure_principale: '18h30'
    },
    {
      id: 6, jour: 'Samedi', titre: 'Réunions & Évangélisation',
      description: 'Réunions fraternelles et actions d\'évangélisation pour partager la bonne nouvelle du Royaume.',
      date_heure: new Date().toISOString(), lieu: "Siège de l'Église",
      type_programme: 'reunion', heures: [], heure_principale: undefined
    },
    {
      id: 7, jour: 'Dimanche', titre: 'La Grande Prière',
      description: 'Notre rassemblement hebdomadaire principal. Grande prière collective pour toute la communauté du Royaume.',
      date_heure: new Date().toISOString(), lieu: "Siège de l'Église",
      type_programme: 'culte', heures: ['6h00', '10h00'], heure_principale: '10h00'
    }
  ];

  ngOnInit(): void {
    this.chargerProgrammes();
  }

  chargerProgrammes(): void {
    this.isLoading = true;
    this.churchService.getProgrammes().subscribe({
      next: (data) => {
        this.programmes = data.length > 0 ? data : this.programmesStatiques;
        this.isLoading = false;
      },
      error: () => {
        this.programmes = this.programmesStatiques;
        this.isLoading = false;
      }
    });
  }

  get programmesFiltres(): Programme[] {
    if (this.filtreActif === 'tous') return this.programmes;
    return this.programmes.filter(p => p.type_programme === this.filtreActif);
  }

  setFiltre(filtre: string): void {
    this.filtreActif = filtre;
  }

  getBadgeClass(type: string | undefined): string {
    const classes: Record<string, string> = {
      culte: 'badge-culte',
      priere: 'badge-priere',
      enseignement: 'badge-enseignement',
      reunion: 'badge-reunion'
    };
    return classes[type ?? ''] ?? 'badge-default';
  }

  getTypeLabel(type: string | undefined): string {
    const labels: Record<string, string> = {
      culte: 'Culte',
      priere: 'Prière',
      enseignement: 'Enseignement',
      reunion: 'Réunion'
    };
    return labels[type ?? ''] ?? type ?? '';
  }
}
