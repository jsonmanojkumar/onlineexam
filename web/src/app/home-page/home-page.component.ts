import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../services/category/category.service';
import { SubjectService } from '../services/subject/subject.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  model: any = {};
  categorys: any;
  subjects: any;
  categories: any = [];
  constructor(private router: Router, private subjectservice: SubjectService, private formBuilder: FormBuilder, private categoryService: CategoryService, private messageservice: MessageService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      category: ['', Validators.required],
      subject: ['', Validators.required],

    });

    this.getCategory();

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let data = this.registerForm.value;

    let cid = data.category._id;
    let sid = data.subject._id;
    this.router.navigate(['/questions', cid, sid]);

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

  getSubject(id) {
    this.subjectservice.getByCategory(id).subscribe(rs => {
      if (rs.status === 200) {
        this.subjects = rs.data;
      } else {
        this.messageservice.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });
  }

  onCategoryChange(event) {
    this.getSubject(event.value._id);
  }

}
