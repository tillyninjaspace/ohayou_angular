import {Component} from '@angular/core';
import { CoursesService } from './courses.service';
// import { FormsModule } from '@angular/forms';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>  
    
    <div (click)="onDivClick()">
    <button [style.backgroundColor]="isActive? 'blue' : 'green'"
    (click)="onSave($event)"
    >Style Binding</button>
    </div>

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `

})
export class CoursesComponent {
    title= "List of Courses";
    colSpan = 2;
    courses;
    isActive=false;
    onDivClick() {console.log("Div was clicked.")}
    onSave($event:any) {console.log("Button was clicked info", $event)}
    
    email = "me@example.com"; 
    onKeyUp() {
        console.log(this.email)
    }


    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

}