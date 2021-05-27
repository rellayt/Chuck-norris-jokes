import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { VALIDATION_CONFIG } from '../core/config/validation';

@Component({
  selector: 'app-validation-feedback',
  template: `<div class="error">
              {{errorMessage}}
            </div>`,
  styleUrls: ['./validation-feedback.component.scss']
})
export class ValidationFeedbackComponent {
  config = VALIDATION_CONFIG

  @Input() control: AbstractControl

  get errorMessage() {
    for (const property in this.control.errors) {
      const hasError = this.control.errors.hasOwnProperty(property)
      if (hasError && property in this.config) return this.config[property]
    }
    return null;
  }
}
