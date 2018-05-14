import { UserService } from './../../services/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

  public students: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public userSrv: UserService) {
      //this.userSrv.getStudents();
      this.students = this.userSrv.student;
  }

  saveScores(): void{
    this.navCtrl.pop();
  }
}
