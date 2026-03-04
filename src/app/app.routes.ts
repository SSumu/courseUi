import { Routes } from '@angular/router';
import {Car} from './components/car/car';

export const routes: Routes = [
  {path:'',component:Car}, // This is the default routing. If something is not in the path, which means path:'', we can give a component in the initial state, like a car component.
  {path: 'cars',component:Car} // If the path says cars ( path: 'cars' ), set the Car component ( component:Car ) as such. That means if the path is cars, it tells to load the code in car.html.
];

// This Routes is an array.
// Website linking is created inside this file. In order for the car.html website to run, there must be a unique path to this website. To do this, there is a file called app.routes.ts in the app module which is this file. This is where all the routes are set.
