import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  suggForm!: FormGroup;
  constructor() {
    this.suggForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern('^[A-Z][a-zA-Z]*$'),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30),
      ]),
      category: new FormControl('', [Validators.required]),
      date: new FormControl(new Date(), []),
      status: new FormControl('en attente', []),
      nbLikes: new FormControl('0', []),
    });
  }

  ngOnInit() {
    console.log(this.suggForm.value);
  }

  submit() {
    return console.log(this.suggForm.get('title'));
  }
}
