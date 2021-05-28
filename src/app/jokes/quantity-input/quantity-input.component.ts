import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss']
})
export class QuantityInputComponent {

  constructor(public controlContainer: ControlContainer) { }
  @Input() controlName: string
  @Input() hasError: boolean = false

  @Output() onValueChange = new EventEmitter<number>();

  handleQuantityChange(value: number): void {
    this.onValueChange.emit(value)
  }
}
