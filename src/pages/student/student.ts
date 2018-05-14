import { UserService } from './../../services/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  formgroup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder){
      this.formgroup = formBuilder.group({
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        date: ['', Validators.required]
      })
  }

  saveStudent(): void{
    this.navCtrl.pop();
  }

}
