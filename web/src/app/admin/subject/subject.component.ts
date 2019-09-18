import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubjectService } from '../../services/subject/subject.service';
import { MessageService } from 'primeng/api';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  subject: any = [];
  public isUpdate;
  categories: any = [];

  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder, private subjectservice: SubjectService, private messageservice: MessageService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      category: ['', Validators.required],
      subject: ['', Validators.required],

    });
    this.getCategory();
    this.getsubject();
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    // console.log(this.registerForm.value);
    let data = this.registerForm.value;
    data.category = data.category._id;

    this.subjectservice.create(data).subscribe(rs => {
      if (rs.status === 200) {
        this.registerForm.reset();
        this.messageservice.add({ severity: 'success', summary: 'Success Message', detail: rs.msg });
        this.getsubject();
      }
      else {
        this.messageservice.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });
  }

  getsubject() {
    this.subjectservice.getAll().subscribe(rs => {
      if (rs.status === 200) {
        this.subject = rs.data;
      } else {
        this.messageservice.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });
  }
 /////////////////////  retrive data ////////////////////
  getCategory() {
    this.categoryService.getAll().subscribe(rs => {
      if (rs.status === 200) {
        this.categories = rs.data;
      } else {
        this.messageservice.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });
  }



  delete(id) {
    this.subjectservice.delete(id).subscribe(rs => {
      if (rs.status === 200) {
        this.messageservice.add({ severity: 'success', summary: 'Success Message', detail: rs.msg });
        this.getsubject();
      } else {
        this.messageservice.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });
  }


  edit(id) {
    this.isUpdate = !this.isUpdate;
  }




}
