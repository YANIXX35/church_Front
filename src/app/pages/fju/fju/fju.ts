import { Component } from '@angular/core';

interface Activite {
  icon: string;
  titre: string;
  description: string;
}

interface Valeur {
  icon: string;
  titre: string;
  texte: string;
}

@Component({
  selector: 'app-fju',
  standalone: false,
  templateUrl: './fju.html',
  styleUrl: './fju.scss',
})
export class Fju {
  activites: Activite[] = [
    {
      icon: 'icon-book',
      titre: 'Études Bibliques',
      description: 'Des sessions d\'étude approfondie de la Parole pour équiper les jeunes à connaître Dieu et sa volonté.'
    },
    {
      icon: 'icon-group',
      titre: 'Évangélisation',
      description: 'Missions d\'évangélisation dans les rues, les écoles et les quartiers de Bassam pour partager la Bonne Nouvelle.'
    },
    {
      icon: 'icon-star',
      titre: 'Louange & Adoration',
      description: 'Un groupe de louange dynamique qui conduit toute la communauté dans l\'adoration de Dieu.'
    },
    {
      icon: 'icon-heart',
      titre: 'Actions Sociales',
      description: 'Visites des malades, aide aux nécessiteux et actions humanitaires au service de la communauté de Bassam.'
    },
    {
      icon: 'icon-map-marker',
      titre: 'Retraites Spirituelles',
      description: 'Retraites et camps spirituels pour approfondir la relation des jeunes avec Dieu et renforcer la fraternité.'
    },
    {
      icon: 'icon-envelope',
      titre: 'Formation & Leadership',
      description: 'Formation des jeunes leaders pour qu\'ils deviennent des piliers dans l\'Église et la société.'
    }
  ];

  valeurs: Valeur[] = [
    { icon: 'icon-star', titre: 'Foi', texte: 'Nous marchons par la foi et non par la vue, ancrés dans la Parole de Dieu.' },
    { icon: 'icon-heart', titre: 'Unité', texte: 'Nous sommes une famille unie, liée par l\'amour de Christ et la fraternité.' },
    { icon: 'icon-group', titre: 'Service', texte: 'Nous servons Dieu et notre prochain avec joie, humilité et excellence.' }
  ];
}
