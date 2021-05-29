import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() options: any[]
  @Input() isActive: boolean = false
  @Input() controlName: string

  constructor(public controlContainer: ControlContainer) { }

}
