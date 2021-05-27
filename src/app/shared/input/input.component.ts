import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() controlName: string
  @Input() filled: boolean

  constructor(public controlContainer: ControlContainer) {
  }

  inputControl = new FormControl()

}
