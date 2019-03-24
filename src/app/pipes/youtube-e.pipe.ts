import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youtubeE'
})
export class YoutubeEPipe implements PipeTransform {
  
  transform(value: string, args?: any): string {
    console.log(value.replace('watch?v=', 'embed/'));
    return value.replace('watch?v=', 'embed/');
  }

}
