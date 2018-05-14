import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class UserService{
    public user: any;
    public student: any;
    public current: any;

    constructor(private http: Http) {

    }

    getUser(){
        this.http.get("http://127.0.0.1:8080/users.json")
        .subscribe(
            res => {
                this.user = res.json();
                console.log(this.user.name);
            }, error => {
                console.log("Error");
            }
        );
    }

    getStudents(){
        this.http.get("http://127.0.0.1:8080/students.json")
        .subscribe(
            res => {
                this.student = res.json();
                console.log(this.user.name);
            }, error => {
                console.log("");
            }
        );
    }

}