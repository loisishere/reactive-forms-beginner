import { Component, OnInit } from '@angular/core';
import { Address } from '../../Interface/address';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private address: Address) { }

  ngOnInit() {
  }

}
