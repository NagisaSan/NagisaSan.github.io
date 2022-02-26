import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentSection: BehaviorSubject<String> = new BehaviorSubject('section1');
  sections: string[] = ['section1', 'section2'];

  constructor() {
    document.addEventListener('scroll', () => {
      this.keepTrack()
    });
  }

  ngOnInit(): void {
    // header_animation();
  }

  //#region navigation
  keepTrack() {
    const viewHeight = window.innerHeight;
    for (var section of this.sections) {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < viewHeight / 2) {
        this.currentSection.next(section);
      }
    }
  }

  get sectionsCount(): number {
    return document.getElementsByTagName("section").length;
  }

  get currectSectionNumber(): number {
    return +this.currentSection.value.charAt(this.currentSection.value.length - 1);
  }

  goToNextSection(): void {
    let next_section = this.currectSectionNumber + 1;
    if (next_section <= 2) {
      document.getElementById("section" + next_section).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  goToPreviousSection(): void {
    let next_section = this.currectSectionNumber - 1;
    if(next_section > 0){
      document.getElementById("section" + next_section).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }
  //#endregion
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
    await new Promise(r => setTimeout(r, delay + 400));
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