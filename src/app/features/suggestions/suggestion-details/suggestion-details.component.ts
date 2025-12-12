import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css',
})
export class SuggestionDetailsComponent {
  id!: number;
  suggestion!: Suggestion;

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id'];
  }
}
