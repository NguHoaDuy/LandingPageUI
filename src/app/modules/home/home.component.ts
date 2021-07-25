import { Component, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private elem: ElementRef) {

  }

  ngOnInit(): void {
    let items = this.elem.nativeElement.querySelectorAll('.carousel .carousel-item')

    items.forEach((el: { nextElementSibling: any; appendChild: (arg0: any) => void; }) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
      }
    })
  }
}
