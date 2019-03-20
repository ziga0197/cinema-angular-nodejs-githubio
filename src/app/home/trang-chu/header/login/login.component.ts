import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/_core/model/my-error-state-matcher';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router) { }
  matcher = new MyErrorStateMatcher();

  // valid form control
  tkFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z0-9]*')
  ]);
  mkFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z0-9]*')
  ]);
  // form group
  formLogin = new FormGroup({
    tkFormControl: new FormControl(''),
    mkFormControl: new FormControl('')
  });

  ngOnInit() {

  }

  onSubmit(value) {
    // TODO: Use EventEmitter with form value
    console.warn(this.formLogin.value);
  }

}
