import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternativeimage',
})
export class NoimagePipe implements PipeTransform {
  transform(image: any, ...args: unknown[]): string {
    if (!image) {
      return 'assets/img/alternativeimage.png';
    }
    return image;
  }
}
