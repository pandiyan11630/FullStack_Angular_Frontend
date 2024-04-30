import { Component, OnInit } from '@angular/core';
import { ShowStudentComponent } from './show-student/show-student.component';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ShowStudentComponent,AddEditStudentComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}