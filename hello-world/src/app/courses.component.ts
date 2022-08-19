import { Component } from "@angular/core";

@Component({
    selector:"course",
    template:`
    <h2>{{get()}}</h2>
    <ul>
    <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    `
})

export class CoursesComponent{
    title="list of Course";
    get(){
        return this.title;
    }
    courses=["course1","course2","course3"];

}