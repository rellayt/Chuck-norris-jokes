import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appInteger]'
})
export class IntegerDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('input') valueChanges() {
    const { nativeElement: { value } } = this.elementRef
    const pattern = /^(?:\d{1,3}(?:.\d{3})*|\d+)$/;

    const formattedValue = value.replace(/,/g, '').match(pattern);
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', +formattedValue)
  }
}
