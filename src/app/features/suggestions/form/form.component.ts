import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  id!: number;
  suggestion!: Suggestion;
  suggForm!: FormGroup;
  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre',
  ];

  constructor(private route: Router) {
    this.suggForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern('^[A-Z][a-zA-Z]*$'),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      category: new FormControl('', [Validators.required]),
      date: new FormControl(new Date(), []),
      status: new FormControl('en attente', []),
      nbLikes: new FormControl('0', []),
    });
  }

  ngOnInit() {
    console.log(this.suggForm.get('title'));
  }

  get title() {
    return this.suggForm.get('title');
  }
  get description() {
    return this.suggForm.get('description');
  }
  submit() {}
}
