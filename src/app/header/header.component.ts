import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showMobileMenu = false;
  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  goToSection(section: any) {
    this.showMobileMenu = false;
    this.scroller.setOffset([0, 72]);
    this.scroller.scrollToAnchor(section);
    // document.getElementById(section).scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest"
    //   });
    // section.scrollIntoView();
  }
}
