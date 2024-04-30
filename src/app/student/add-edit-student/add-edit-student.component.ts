import {Component, OnInit, Input } from '@angular/core';
import { MySharedService } from '../../my-shared.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-edit-student',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-edit-student.component.html',
  styleUrl: './add-edit-student.component.css'
})
export class AddEditStudentComponent implements OnInit {

  @Input() student:any;
  student_Id:number = 0;
  student_Name: string ="";
  department_Id: number =0;
  gender:string="";
  email_Id:string="";

  constructor(private myService: MySharedService) { }

  ngOnInit(): void {
    this.student_Id = this.student.student_Id;
    this.student_Name = this.student.student_Name;
    this.department_Id = this.student.department_Id;
    this.gender = this.student.gender;
    this.email_Id = this.student.email_Id;
  }

  addStudent(){
    var val = {student_Id:this.student_Id,
      student_Name:this.student_Name,
      department_Id:this.department_Id,
      gender:this.gender,
      email_Id:this.email_Id
    };
      this.myService.addStudent(val).subscribe(res =>{
        alert(res.toString());
      })
  }

  updateStudent(){
    var val = {student_Id:this.student_Id,
      student_Name:this.student_Name,
      department_Id:this.department_Id,
      gender:this.gender,
      email_Id:this.email_Id
    };
      this.myService.updateStudent(val).subscribe(res =>{
        alert(res.toString());
    })
  }
}