import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() options: any[]
  @Input() filled: boolean = false
  @Input() controlName: string

  constructor(public controlContainer: ControlContainer) { }

}
