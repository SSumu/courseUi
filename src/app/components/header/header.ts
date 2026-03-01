import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, MatIcon, MatToolbar, MatToolbarRow],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  toggleMenu(){

  }

}
