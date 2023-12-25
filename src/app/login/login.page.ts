import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
//import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm! : FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    }) 
  }
  login(){
    this.http.get<any>("http://localhost:3000/signUpUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email &&  a.email === this.loginForm.value.password
      });
      if(user){
        alert("Login Succes");
        this.loginForm.reset();
        this.router.navigate(['create-employee'])
      } else {
        alert("user not found");
      }
    },err=>{
      alert("Something went wrong")
    })
  }

  }