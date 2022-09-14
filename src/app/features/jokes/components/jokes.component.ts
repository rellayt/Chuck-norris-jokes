import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {OptionItem} from '../../../core/models/option-item.model';
import {CATEGORY_ITEMS} from '../../../core/config/categories';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SnackBarService} from '../../../core/services/snack-bar.service';
import {ERROR, JOKE_DRAW, JOKES_SAVE} from '../../../core/config/snack-bar';
import {JokesService} from '../../../core/services/jokes.service';
import {ActivatedRoute} from '@angular/router';
import {catchError, delay, finalize, map, tap} from 'rxjs/operators';
import {FileService} from '../../../core/services/file.service';
import {JokeFilter} from '../models/joke-filter.model';

const PICTURES_PATH = 'assets/pictures';

interface ButtonStates {
  isDrawLoading: boolean;
  isSaveLoading: boolean;
}

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokesComponent implements OnInit {
  isImpersonated = false;

  categories: OptionItem[] = CATEGORY_ITEMS;

  chuckNorrisPicturePath = `${PICTURES_PATH}/chuck_norris.jpg`;

  randomPicturePath = `${PICTURES_PATH}/random_photo.jpg`;

  jokesForm: FormGroup;

  joke$ = this.route.data.pipe(
    map(({joke: {value}}) => value.joke)
  );

  buttonState: ButtonStates = {
    isDrawLoading: false,
    isSaveLoading: false
  };

  get impersonate(): string {
    return this.jokesForm.get('impersonate').value;
  }

  ngOnInit(): void {
    this.createJokesForm();
  }

  private createJokesForm(): void {
    this.jokesForm = this.fb.group({
      category: this.fb.control({value: '', disabled: this.buttonState.isDrawLoading}),
      impersonate: this.fb.control({value: '', disabled: this.buttonState.isDrawLoading}),
      quantity: this.fb.control(0, {
        validators: [Validators.min(0), Validators.max(100)],
        updateOn: 'blur',
      }),
    });
  }

  handleQuantityChange(value: number): void {
    const {value: {quantity}} = this.jokesForm;
    this.jokesForm.setValue({...this.jokesForm.value, quantity: +quantity + value});
  }

  saveJokes(): void {
    const {quantity} = this.jokesForm.value;

    this.jokesService.getMultiple(quantity).pipe(
      tap(() => {
        this.jokesForm.disable();
        this.buttonState.isSaveLoading = true;
      }),
      delay(250),
      map(({value}) => value.map(({joke}) => joke)),
      finalize(() => {
        this.jokesForm.enable();
        this.buttonState.isSaveLoading = false;
        this.jokesForm.controls.quantity.setValue(0);
      }),
      catchError(async (err) => this.snackBarService.open(ERROR)),
    ).subscribe((content) => {
      const fileName = `${quantity} joke${quantity === 1 ? '' : 's'}`;
      this.fileService.downloadTextFile({content, fileName});
      this.snackBarService.open(JOKES_SAVE);
    });
  }

  drawJoke(): void {
    const filters = this.prepareJokeFilter();
    const [firstName] = this.jokesForm.value.impersonate.split('');

    this.joke$ = this.jokesService.get(filters).pipe(
      tap(() => {
        this.jokesForm.disable();
        this.buttonState.isDrawLoading = true;
      }),
      // for testing purposes
      delay(250),
      map(({value: {joke}}) => joke),
      finalize(() => {
        this.jokesForm.enable();
        this.buttonState.isDrawLoading = false;
        this.snackBarService.open(JOKE_DRAW);
        this.isImpersonated = !!firstName;
        this.jokesForm.setValue({...this.jokesForm.value, category: '', impersonate: ''});
      }),
      catchError(async (err) => this.snackBarService.open(ERROR))
    );
  }

  private prepareJokeFilter(): JokeFilter {
    const {category, impersonate} = this.jokesForm.value;
    const [firstName, lastName] = impersonate.split(' ');

    return {
      filters: {
        limitTo: category ? [category] : null,
        firstName,
        lastName
      }
    };
  }

  constructor(private fb: FormBuilder, private snackBarService: SnackBarService, private jokesService: JokesService, private route: ActivatedRoute, private fileService: FileService) {
  }

}
