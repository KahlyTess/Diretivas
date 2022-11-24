import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {


  @HostListener('mouseenter') onMouseOver(){
    this.Color = this.highlightColor;
}

  @HostListener('mouseout') onMouseOut(){
    this.Color = this.defaultColor;
}
  @HostBinding('style.backgroundColor') Color: string | undefined;

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'blue';

  constructor() { }

  // ngOnInit() {
  //   this.backgroundColor = this.defaultColor;
  // }

}
