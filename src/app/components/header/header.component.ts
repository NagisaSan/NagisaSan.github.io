import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    // application
    var speed = 75;
    var h1 = document.querySelector('h1');
    var delay = h1.innerHTML.length * speed + speed;
    
    // type affect to header
    typeEffect(h1, speed);
    
    // type affect to body
    setTimeout(function(){
      // p.style.display = "inline-block";
      // var p = document.querySelector('p');
      var p = document.createElement('p')
      p.append('webdesigner')
      document.body.append(p);
      typeEffect(p, speed);
    }, delay);
  }
}

function typeEffect(element: any, speed: any) {
  var text = element.innerHTML;
  element.innerHTML = "";
  
  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};