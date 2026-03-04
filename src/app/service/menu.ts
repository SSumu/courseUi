import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Menu {

  // I have created an object from the BehaviorSubject here.
  // public isOpened = new BehaviorSubject<boolean>(false) // This value is normally false.
  // public opened = false;
  //
  // public toggle(){
  //   this.opened = !this.opened; // this.opened is the value.
  //   this.isOpened.next(this.opened) // This is a class given by the toggle itself, so there is no need to type this separately.
  // }
//   Toggling means clicking. The above method is the old version method.

  private isOpened = new BehaviorSubject<boolean>(false);
  isOpened$ = this.isOpened.asObservable();

  private opened = false;

  toggle(): void{
    this.opened = !this.opened;
    this.isOpened.next(this.opened);
  }
}

// In old versions, constructor(){} is used but in the new versions, it uses inject() function.

// Why Angular changed this
// Angular moved toward:
// ✅ Standalone APIs
// ✅ Functional patterns
// ✅ Less boilerplate code
// ✅ Better tree-shaking
// ✅ Simpler testing

// inject() allows dependency injection without constructors.
