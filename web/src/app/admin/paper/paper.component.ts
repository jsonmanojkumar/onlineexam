import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PaperService} from '../../services/paper/paper.service';
import { MessageService } from 'primeng/api';
import { from } from 'rxjs';
import { Router } from '@angular/router';

import { CategoryService } from '../../services/category/category.service';
import { SubjectService } from '../../services/subject/subject.service';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public isUpdate;
  paper: any=[];
  categories:any=[];
  subjects:any=[];

  constructor(private subjectservice:SubjectService, private categoryService: CategoryService,private formBuilder: FormBuilder, private paperservice:PaperService, private messageservice:MessageService, private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        category: ['', Validators.required],
        subject: ['', Validators.required],
        question: ['', Validators.required],
        Option1: ['', Validators.required],
        Option2: ['', Validators.required],
        Option3: ['', Validators.required],
        Option4: ['', Validators.required],
        correct: ['', Validators.required],
    });
    this.getCategory();
   
    this.getpaper();
}

get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    // console.log(this.registerForm.value);
    this.paperservice.create(this.registerForm.value).subscribe(rs => {
      if (rs.status === 200) {
        this.registerForm.reset();
        this.messageservice.add({ severity: 'success', summary: 'Success Message', detail: rs.msg });
        this.getpaper();
      }
      else {
        this.messageservice.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });
}


getpaper() {
  this.paperservice.getAll().subscribe(rs => {
    if (rs.status === 200) {
      this.paper = rs.data;
    } else {
      this.messageservice.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
    }
  });
}

/////////////////////  reyrive data ///////////////////
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
/////////////////////  end reyrive data ///////////////////


delete(id) {
  this.paperservice.delete(id).subscribe(rs => {
    if (rs.status === 200) {
      this.messageservice.add({ severity: 'success', summary: 'Success Message', detail: rs.msg });
      this.getpaper();
    } else {
      this.messageservice.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
    }
  });
}


edit(id) {
  this.isUpdate=!this.isUpdate;  
}

onCategoryChange(event) {
  this.getSubject(event.value._id);
}


}