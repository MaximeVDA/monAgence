import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {NgForm} from '@angular/forms';
=======
>>>>>>> f2adb2d407f88c8b4f34b011e5c5a34de58f53e5

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitPropertiesForm(form: NgForm) {
    //console.log(form.value);
    const title = form.value['title'];
    console.log(title);
  }
}
