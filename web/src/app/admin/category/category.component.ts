import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CategoryService } from '../../services/category/category.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;
 category: any=[];
 public isUpdate;
 
  constructor(private formBuilder: FormBuilder , private categoryservice:CategoryService , private messageservice:MessageService , private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
    });
    this.getcategory();
   
}

get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    
    this.categoryservice.create(this.registerForm.value).subscribe(rs => {
      if (rs.status === 200) {
        this.registerForm.reset();
        this.messageservice.add({ severity: 'success', summary: 'Success Message', detail: rs.msg });
        this.getcategory();
      }
      else {
        this.messageservice.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
      }
    });
}



getcategory() {
  this.categoryservice.getAll().subscribe(rs => {
    if (rs.status === 200) {
      this.category = rs.data;
    } else {
      this.messageservice.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
    }
  });
}


delete(id) {
  this.categoryservice.delete(id).subscribe(rs => {
    if (rs.status === 200) {
      this.messageservice.add({ severity: 'success', summary: 'Success Message', detail: rs.msg });
      this.getcategory();
    } else {
      this.messageservice.add({ severity: 'error', summary: 'Error Message', detail: rs.msg });
    }
  });
}


edit(id) {
  // this.router.navigate(['/edit', id]);
  this.isUpdate=!this.isUpdate;  
}

}

