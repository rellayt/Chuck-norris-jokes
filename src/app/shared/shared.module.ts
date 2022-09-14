import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SelectComponent} from './components/select/select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {InputComponent} from './components/input/input.component';
import {ButtonComponent} from './components/button/button.component';
import {IntegerDirective} from './directives/integer.directive';
import {ValidationFeedbackComponent} from './components/validation-feedback/validation-feedback.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [SelectComponent, InputComponent, ButtonComponent, IntegerDirective, ValidationFeedbackComponent],
  exports: [FormsModule, ReactiveFormsModule, MaterialModule, SelectComponent, InputComponent, ButtonComponent, IntegerDirective, ValidationFeedbackComponent],
})
export class SharedModule {
}
