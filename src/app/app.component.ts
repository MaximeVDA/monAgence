import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'monAgence';

  constructor() {
    const firebaseConfig = {
    apiKey: 'AIzaSyAYQbkMbgriFlSMZ4qpOzAMd0f3Zzvv58Q',
    authDomain: 'monagence-b680d.firebaseapp.com',
    databaseURL: 'https://monagence-b680d.firebaseio.com',
    projectId: 'monagence-b680d',
    storageBucket: 'monagence-b680d.appspot.com',
    messagingSenderId: '973686147244',
    appId: '1:973686147244:web:be680babff5f752576f709'
    };
    firebase.initializeApp(firebaseConfig);
  }
}
