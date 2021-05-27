import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  downloadTextFile({ content, fileName = 'example' }) {
    let text = 'Jokes: \n\n'
    content.forEach((line: string, index: number) => text += `${index + 1} - ${line} \n`)

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
  }

}
