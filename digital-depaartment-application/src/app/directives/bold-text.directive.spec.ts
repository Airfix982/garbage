import { BoldTextDirective } from './bold-text.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('BoldTextDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {} as ElementRef;
    const rendererMock = {} as Renderer2;
    const directive = new BoldTextDirective(elementRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
