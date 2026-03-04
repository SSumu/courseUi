import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {Content} from './components/content/content';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet,*/
    Header,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    Content
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('courseUi');

  name:string = 'SADEEPAL'; // name is a variable.
}

// This app.ts is the controller.
