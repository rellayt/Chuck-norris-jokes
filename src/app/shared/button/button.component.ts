import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() type: string = 'button'
  @Input() isLoading: boolean = false
  @Input() isDisabled: boolean = false

  constructor() { }

}
