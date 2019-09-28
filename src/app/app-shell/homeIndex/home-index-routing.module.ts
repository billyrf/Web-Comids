import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homeIndexRouting'
})
export class HomeIndexRoutingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}