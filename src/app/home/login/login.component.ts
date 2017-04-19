import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private _fb : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username  : ['', <any>Validators.required],
      password  : ['', <any>Validators.required]
    })
  }
  OnSubmit(value:any){

  }

}
