import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss']
})

export class QuantityInputComponent implements OnInit {

  @Input() controlName: string
  @Input() hasError: boolean = false

  @Output() onValueChange = new EventEmitter<number>();
  formControl: FormControl

  handleQuantityChange(value: number): void {
    this.onValueChange.emit(value)
  }

  ngOnInit(): void {
    this.formControl = this.controlContainer.control.get(this.controlName) as FormControl
  }

  constructor(private controlContainer: ControlContainer) { }
}
