import { ThisReceiver } from '@angular/compiler';
import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  // backgroundColor: string;

@HostListener('mouseenter') onMouseOver(): void{
  this._renderer.setStyle(this._elementRef.nativeElement,
    'background-color', 'purple');
  }

    @HostListener('mouseout') onMouseOut(){
      this._renderer.setStyle(this._elementRef.nativeElement,
        'background-color', 'white');

// @HostListener('mouseenter') onMouseOver(): void{
//     this.backgroundColor = 'purple';

// @HostListener('mouseout') onMouseOut(),{}
//   this.backgroundColor = 'white';

// @HostBinding('style.backgroundColor') backgroundColor: string;
  // @HostBinding('style.backgroundColor') get setColor(){
  //   return this.backgroundColor;
  // }
  // private backgroundColor: string;

}

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) { }
  }
