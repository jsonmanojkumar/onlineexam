import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../services/student/student.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;
  is_submited: Boolean = false;
  students: any = [];
  constructor(private router: Router, private fb: FormBuilder, private studentService: StudentService, private messageService: MessageService) {
    this.addForm = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      course: [null, Validators.required],
      DOB: [new Date('09-11-1989'), Validators.required]
    });

  }

  ngOnInit() {
    this.getStudents();
  }

  create() {

    if (this.addForm.invalid) {
      this.is_submited = true;
      return;
    }
    this.studentService.create(this.addForm.value).subscribe(rs => {
      if (rs.status === 200) {
        this.addForm.reset();
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: rs.msg });
        this.getStudents();
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });
  }

  getStudents() {
    this.studentService.getAll().subscribe(rs => {
      if (rs.status === 200) {
        this.students = rs.data;
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });
  }

  delete(id) {
    this.studentService.delete(id).subscribe(rs => {
      if (rs.status === 200) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: rs.msg });
        this.getStudents();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });
  }

  edit(id) {
    this.router.navigate(['/edit', id]);
  }

}
