import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() controlName: string
  @Input() isActive: boolean

  formControl: FormControl
  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.formControl = this.controlContainer.control.get(this.controlName) as FormControl
  }
}
