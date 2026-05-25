import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  equipe = [
    {
      nom: 'Pasteur Ibrahim',
      role: 'Pasteur & Responsable',
      photo: 'images/person1.jpg',
      description: 'Serviteur de Dieu dévoué, le Pasteur Ibrahim conduit l\'Église Universelle du Royaume de Dieu à Bassam avec sagesse, amour et une foi inébranlable.'
    },
    {
      nom: 'Conseil des Anciens',
      role: 'Conseil Pastoral',
      photo: 'images/person2.jpg',
      description: 'Une équipe de leaders mûrs et dévoués qui soutiennent la vision et accompagnent le ministère de l\'église au quotidien.'
    },
    {
      nom: 'Équipe FJU',
      role: 'Force de la Jeunesse',
      photo: 'images/person3.jpg',
      description: 'Des jeunes passionnés qui servent Dieu avec ferveur et portent la flamme du Royaume dans la nouvelle génération.'
    }
  ];
}
