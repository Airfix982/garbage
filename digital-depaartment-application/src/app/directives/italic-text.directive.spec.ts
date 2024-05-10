import { ElementRef, Renderer2 } from '@angular/core';
import { ItalicTextDirective } from '../directives/italic-text.directive';

describe('ItalicTextDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = new ElementRef(document.createElement('div'));
    const renderer: Renderer2 = jasmine.createSpyObj('Renderer2', ['setStyle']);
    const directive = new ItalicTextDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
