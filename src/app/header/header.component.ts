import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {}

  goToSection(section: any) {
    this.scroller.scrollToAnchor(section);
    // document.getElementById(section).scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest"
    //   });
    // section.scrollIntoView();
  }
}
