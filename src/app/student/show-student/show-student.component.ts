import { Component, OnInit } from '@angular/core';
import { MySharedService } from '../../my-shared.service';
import { CommonModule } from '@angular/common';
import { AddEditStudentComponent } from '../add-edit-student/add-edit-student.component';

@Component({
  selector: 'app-show-student',
  standalone: true,
  imports: [CommonModule,AddEditStudentComponent],
  templateUrl: './show-student.component.html',
  styleUrl: './show-student.component.css',
})
export class ShowStudentComponent implements OnInit {

  studentList:any = [];
  modalTitle:any;
  activateAddEditStuCom:boolean = false;
  student:any;

  constructor(private studentService:MySharedService){}

  ngOnInit(): void {
    this.refreshStudentList();
  }

  refreshStudentList() {
    this.studentService.getStudentList().subscribe(data =>{
      this.studentList = data;
    });
  }
  AddStudent(){
    this.student={
      student_Id:0,
      student_Name:"",
      department_Id:0,
      gender:"",
      email_Id:""
    }
    this.modalTitle = "Add Student";
    this.activateAddEditStuCom = true;
  }

  EditStudent(item: any){
    this.student = item;
    this.activateAddEditStuCom = true;
    this.modalTitle = "Update Student";
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.studentService.deleteStudent(item.student_Id).subscribe(data =>{
        alert(data.toString());
        this.refreshStudentList();
      })
    }
  }

  closeClick(){
    this.activateAddEditStuCom=false;
    this.refreshStudentList();
  }
}

