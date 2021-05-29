import { Component } from '@angular/core';
import { OptionItem } from '../core/models/option-item.model';
import { CATEGORY_ITEMS } from '../core/config/categories';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from '../core/services/snack-bar.service';
import { ERROR, JOKE_DRAW, JOKES_SAVE } from '../core/config/snack-bar';
import { JokesService } from '../core/services/jokes.service';
import { ActivatedRoute } from '@angular/router';
import { map, catchError, delay, finalize, first, tap } from 'rxjs/operators';
import { JokeConfig } from '../core/models/joke-config.model';
import { FileService } from '../core/services/file.service';

const PICTURES_PATH = 'assets/pictures'

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent {

  impersonated: boolean = false
  categories: OptionItem[] = CATEGORY_ITEMS

  chuckNorrisPicture: string = `${PICTURES_PATH}/chuck_norris.jpg`
  randomPicture: string = `${PICTURES_PATH}/random_photo.jpg`

  jokesForm: FormGroup;
  joke$ = this.route.data.pipe(
    map(({ joke: { value } }) => value.joke)
  )

  buttonState = {
    drawLoading: false,
    saveLoading: false
  }

  get impersonate(): string {
    return this.jokesForm.value.impersonate
  }

  handleQuantityChange(value: number): void {
    const { value: { quantity } } = this.jokesForm
    this.jokesForm.setValue({ ...this.jokesForm.value, quantity: +quantity + value })
  }

  saveJokes(): void {
    const { quantity } = this.jokesForm.value

    this.jokesService.getMultiple(quantity).pipe(
      tap(() => {
        this.buttonState.saveLoading = true
        this.jokesForm.disable()
      }),
      first(),
      delay(250),
      map(({ value }) => value.map(({ joke }) => joke)),
      finalize(() => {
        this.jokesForm.enable()
        this.buttonState.saveLoading = false
        this.jokesForm.controls.quantity.setValue(0)
      }),
      catchError(async (err) => this.snackBarService.open(ERROR)),
    ).subscribe((content) => {
      const fileName = `${quantity} joke${quantity === 1 ? '' : 's'}`
      this.fileService.downloadTextFile({ content, fileName })
      this.snackBarService.open(JOKES_SAVE)
    })
  }

  drawJoke(): void {
    const { category, impersonate } = this.jokesForm.value

    const [firstName, lastName] = impersonate.split(' ')
    const filters: JokeConfig = {
      filters: {
        limitTo: category ? [category] : null,
        firstName,
        lastName
      }
    }

    this.joke$ = this.jokesService.get(filters).pipe(
      tap(() => {
        this.buttonState.drawLoading = true
        this.jokesForm.disable()
      }),
      //for testing purposes
      delay(250),
      map(({ value: { joke } }) => joke),
      finalize(() => {
        this.buttonState.drawLoading = false
        this.snackBarService.open(JOKE_DRAW)
        this.impersonated = !!firstName
        this.jokesForm.enable()
        // or reset()
        this.jokesForm.setValue({ ...this.jokesForm.value, category: '', impersonate: '' })
      }),
      catchError(async (err) => this.snackBarService.open(ERROR))
    )
  }

  constructor(private fb: FormBuilder, private snackBarService: SnackBarService, private jokesService: JokesService, private route: ActivatedRoute, private fileService: FileService) {
    this.jokesForm = this.fb.group({
      category: this.fb.control({ value: '', disabled: this.buttonState.drawLoading }),
      impersonate: this.fb.control({ value: '', disabled: this.buttonState.drawLoading }),
      quantity: this.fb.control(0, {
        validators: [Validators.min(0), Validators.max(100)],
        updateOn: 'blur',
      }),
    })
  }
}
