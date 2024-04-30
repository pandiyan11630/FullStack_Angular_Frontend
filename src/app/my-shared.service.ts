import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MySharedService {

  readonly APIUrl = "http://localhost:5198/ACET";
  constructor(private _httpService: HttpClient) { }
  
    getStudentList(): Observable < any[] > {
        return this._httpService.get < any > (this.APIUrl + '/Student/GetAllStudentData');
    }
    addStudent(val: any) {
      return this._httpService.post(this.APIUrl + '/Student/AddNewStudent', val);
  }
  updateStudent(val: any) {
      return this._httpService.put(this.APIUrl + '/Student/ModifyStudentData/'+ val.student_Id,val);
  }
  deleteStudent(id: any) {
      return this._httpService.delete(this.APIUrl + '/Student/RemoveStudent/' + id);
  }

}
