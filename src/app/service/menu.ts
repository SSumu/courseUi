import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Menu {

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
