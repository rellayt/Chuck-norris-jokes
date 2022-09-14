import { Pipe, PipeTransform } from '@angular/core';
import { unescape } from 'lodash';

@Pipe({ name: 'unescape' })
export class UnescapePipe implements PipeTransform {
  transform(content: string): string {
    return `"${unescape(content)}"`
  }
}
