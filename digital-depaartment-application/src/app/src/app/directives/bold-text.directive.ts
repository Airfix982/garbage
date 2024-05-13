import { Directive } from '@angular/core';

@Directive({
  selector: '[appBoldText]',
  standalone: true
})
export class BoldTextDirective {

  constructor() { }

}
