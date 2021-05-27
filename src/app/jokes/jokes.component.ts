import { Component, OnInit } from '@angular/core';
import { OptionItem } from '../core/models/option-item.model';
import { CATEGORY_ITEMS } from '../core/config/categories';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  impersonated: boolean = true
  categories: OptionItem[] = CATEGORY_ITEMS

  chuckNorrisPicture: string = 'assets/pictures/chuck_norris.jpg'
  randomPicture: string = 'assets/pictures/random_photo.jpg'

  jokesForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.jokesForm = this.fb.group({
      categories: this.fb.control(null),
      impersonate: this.fb.control(''),
      quantity: this.fb.control(0, {
        validators: [Validators.min(0), Validators.max(100)],
        updateOn: 'blur'
      }),
    })
  }

  get impersonate(): string {
    return this.jokesForm.value.impersonate
  }

  handleQuantityChange(value: number): void {
    const { value: { quantity } } = this.jokesForm
    this.jokesForm.setValue({ ...this.jokesForm.value, quantity: +quantity + value })
  }

  ngOnInit(): void {
  }

  drawJoke(): void {
    console.log(this.jokesForm);
    console.log(this.jokesForm.valid);

  }
}
