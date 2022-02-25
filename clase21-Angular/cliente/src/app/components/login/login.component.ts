import { Component, OnInit } from '@angular/core';
// Importacion de modulo para realizar grupos de formularios

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // variables de tipo formgroup

    loginForm: FormGroup;
    validacionEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
  constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        // usuario:['', [Validators.required, Validators.email]],
        usuario:['', [Validators.required, Validators.pattern(this.validacionEmail)]],

        password: ['', Validators.required]
      });
  }

  ngOnInit(): void {
  }
 accesoUsuario(){
     console.log(this.loginForm);
 }
}
