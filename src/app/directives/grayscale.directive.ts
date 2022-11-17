import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appGrayscale]'
})
export class GrayscaleDirective {
  constructor(private readonly el: ElementRef) {
    this.initStyles();
  }

  @HostListener('mouseenter')
  private onMouseEnter(): void {
    this.removeGrayScale();

  }

  @HostListener('mouseleave')
  private onMouseLeave(): void {
    this.addGrayScale();
  }

  private addGrayScale(): void {
    this.el.nativeElement.style.filter = 'grayscale(100%)'
  }

  private removeGrayScale(): void {
    this.el.nativeElement.style.filter = 'grayscale(0%)'
  }

  private initStyles(): void {
    this.el.nativeElement.style.filter = 'grayscale(100%)'
    this.el.nativeElement.style.cursor = 'pointer'
    this.el.nativeElement.style.transition = 'filter 0.35s ease-in-out';
  }

}
