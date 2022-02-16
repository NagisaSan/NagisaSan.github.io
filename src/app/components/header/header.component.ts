import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let wrapper: any;
    const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

    async function writingAll(stringTarget: string, container: string) {
      wrapper = document.querySelector('[' + container + ']');
      const stringsContainer = document.getElementsByClassName(stringTarget);

      while (wrapper) {
        for (var i = 0; i < stringsContainer.length; i++) {
          const string = stringsContainer[i].textContent;
          await write(string);
          await sleep(1000);
          await erase();
          await sleep(1000);
        };
      }
    };

    async function write(text: string | null) {
      let index = 0;
      if(text !== null){
        while (index < text.length) {
          const timeout = 100;
          await sleep(timeout);
          index++;
          wrapper.innerHTML = text.substring(0, index);
        }
      }
    };

    async function erase() {
      while (wrapper.textContent.length) {
        const timeout = 100;
        await sleep(timeout);
        wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2);
      }
    };

    writingAll('item', 'data-text');
    // writingAll('item2', 'data-text');
    // writingAll('item3', 'data-text');
  }
}