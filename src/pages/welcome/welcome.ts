import { UserService } from './../../services/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentPage } from "./../student/student";
import { ScorePage } from "./../score/score";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  public currentUser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userSrv: UserService) {
      this.userSrv.getStudents();
      this.currentUser = this.userSrv.current;
  }

  ionViewDidLoad() {
    console.log(this.currentUser.name);
  }

  newStudent(): void{
    this.navCtrl.push(StudentPage);
  }

  setScore(): void{
    this.navCtrl.push(ScorePage);
  }

}
