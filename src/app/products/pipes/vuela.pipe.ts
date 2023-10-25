import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'vuela'
})

export class VuelaPipe implements PipeTransform{
  transform(value: boolean = false): string {


    return value ? 'Vuela' : 'No vuela';
  }
}
