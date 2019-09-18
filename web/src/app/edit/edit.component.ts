import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../services/student/student.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  is_submited: Boolean = false;
  students: any = [];
  student_id: any;
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private studentService: StudentService, private messageService: MessageService) {
    this.editForm = this.fb.group({
      _id: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      course: [null, Validators.required],
      DOB: [new Date('09-11-1989'), Validators.required]
    });

    this.route.params.subscribe(params => {
      this.student_id = params.id;
      this.getStudent();
    });

  }

  ngOnInit() {
  }

  getStudent() {
    this.studentService.getById(this.student_id).subscribe(rs => {
      if (rs.status === 200) {
        let student = rs.data;
        this.editForm.patchValue(student);

      } else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });

  }

  update() {
    if (this.editForm.invalid) {
      this.is_submited = true;
      return;
    }

    let student_data = this.editForm.value;
    this.studentService.update(student_data._id, student_data).subscribe(rs => {
      if (rs.status === 200) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: rs.msg });
        this.router.navigate(['/add']);

      } else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });
  }

}
