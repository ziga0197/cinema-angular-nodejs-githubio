import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name: 'safeLink'
})
export class SafeLinkPipe implements PipeTransform {
  constructor(private _domSanitizer: DomSanitizer) {}
  transform(value: any, args?: any): any {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
