import { Component, OnInit } from '@angular/core';
import { Category } from 'app/layout/models/Category';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from 'app/layout/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
  providers: [CategoryService]
})
export class CreateCategoryComponent implements OnInit {


  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder, private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {

    // the short way
    this.myForm = this._fb.group({
      title: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      description: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
    });

    // subscribe to form changes  
    this.subcribeToFormChanges();

    // Update single value
    (<FormControl>this.myForm.controls['title'])
      .setValue('', { onlySelf: true });
    (<FormControl>this.myForm.controls['description'])
      .setValue('', { onlySelf: true });

    // Update form model
    // const people = {
    // 	name: 'Jane',
    // 	address: {
    // 		street: 'High street',
    // 		postcode: '94043'
    // 	}
    // };

    // (<FormGroup>this.myForm)
    //     .setValue(people, { onlySelf: true });

  }

  subcribeToFormChanges() {
    const myFormStatusChanges$ = this.myForm.statusChanges;
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }

  save(model: Category, isValid: boolean) {
    if (isValid == true) {
      this.submitted = true;
      var category = new Category();
      category.title = model.title;
      category.description = model.description;
      this.categoryService.createCategory(category);
      console.log(model, isValid);
      this.router.navigateByUrl('/dashboard');
    }
    else {
      alert("zupa!!!");
    }
  }

}
