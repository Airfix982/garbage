import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  standalone: true
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, uppercase: boolean = false): string {
    let modifiedValue = value.replace(/\n/g, '<br>');
    if(uppercase) modifiedValue = modifiedValue.toUpperCase();
    return modifiedValue;
  }

}
