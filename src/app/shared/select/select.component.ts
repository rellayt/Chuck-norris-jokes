import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

const PICTURES_PATH = 'assets/pictures'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: any[]
  @Input() isActive: boolean = false
  @Input() controlName: string

  formControl: FormControl
  arrowDownPicture: string = `${PICTURES_PATH}/caret-down.svg`

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.formControl = this.controlContainer.control.get(this.controlName) as FormControl
  }
}
