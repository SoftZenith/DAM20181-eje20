import { UserService } from './../../services/user';
import { Http } from '@angular/http';
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username: string;
  public password: string;

  formgroup: FormGroup;

  constructor(public navCtrl: NavController,
    public Usersrv: UserService,
    public formBuilder: FormBuilder) {
      this.Usersrv.getUser();
      
      this.formgroup = formBuilder.group({
        username: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
      })
  }

  login(): void{    
    this.Usersrv.user.forEach(user => {
      if(this.username == user.user && this.password == user.pass){
        this.Usersrv.current = user;
        this.navCtrl.push(WelcomePage);
      }
    });
  }

}
