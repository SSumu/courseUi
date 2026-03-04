import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {Menu} from '../../service/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, MatIcon, MatToolbar, MatToolbarRow],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // Constructor injection is injected here. Here we are going to call the method in menuService. This is the Dependency Injection (Constructor)
  constructor(private menuService: Menu) {
  }

  toggleMenu(){
    this.menuService.toggle();
  }

}
