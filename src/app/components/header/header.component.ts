import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    header_animation();
  }

}

async function header_animation(): Promise<void> {
  let header_text = ["Hello,", "I'm Cláudia", "Front-End Developer"];

  for (var i = 0; i < header_text.length; i++) {
    var speed = 75;
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'heading' + i);
    h1.append(header_text[i]);
    document.getElementById('header').appendChild(h1);
    var delay = h1.innerHTML.length * speed + speed;

    typeEffect(h1, speed);
    await new Promise(r => setTimeout(r, delay));
  }
}

function typeEffect(element: any, speed: any) {
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};