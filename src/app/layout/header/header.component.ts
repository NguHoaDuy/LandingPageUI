import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChildren('slides') slides!: QueryList<ElementRef>;

  // constructor() { }
  ngAfterViewInit(): void {
  }

  // ngOnInit(): void {
    
  // }

//   plusSlides(n: number){
//     let slideIndex = 1 + n;
//     let slide = document.getElementsByClassName("mySlides");
//     if (n > slide.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slide.length}
//     slideIndex++;
//     for (let i = 0; i < slide.length; i++) {
//       slide[i].style.display= "none";  
//   }
//   slide[slideIndex-1].style.display = "block";
// }
  
}

