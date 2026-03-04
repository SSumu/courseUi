import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
// import {MatButton} from '@angular/material/button';
import {Menu} from '../../service/menu';
import {MatList, MatListItem, MatListItemIcon} from '@angular/material/list';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatLine} from '@angular/material/core';

@Component({
  selector: 'app-content',
  imports: [
    MatDrawer,
    MatDrawerContainer,
    // MatButton,
    MatList,
    MatListItem,
    RouterLinkActive,
    MatIcon,
    MatListItemIcon,
    MatDrawerContent,
    RouterOutlet,
    MatLine,
    RouterLink
  ],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  // showFiller = false;
  opened = true;

  constructor(private menuService: Menu) {
    // isOpened$ is what I am going to access. I am subscribing to isOpened$. That means it's holding the value. I am subscribing to that. That means I am holding the value of this until some function in this is finished.
    this.menuService.isOpened$.subscribe(data=>{
      this.opened = data;
    })
  }
}
