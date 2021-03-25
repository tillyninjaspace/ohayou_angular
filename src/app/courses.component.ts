import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

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
    <button [style.backgroundColor]="isActive? 'blue' : 'white'">Style Binding</button>
    `

})
export class CoursesComponent {
    title= "List of Courses";
    colSpan = 2;
    courses;
    isActive=false;
    
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

}