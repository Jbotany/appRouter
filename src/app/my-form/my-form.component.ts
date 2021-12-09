import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './model/User';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  constructor() {}

  model: User = new User();

  ngOnInit(): void {}

  onSubmit(myForm: NgForm) {
    // form submitted
    console.log(myForm.valid);
  }
}
