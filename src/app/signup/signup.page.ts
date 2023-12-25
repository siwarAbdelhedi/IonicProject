import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
//import { AppPreferences } from '@ionic-native/app-preferences/ngx';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
  }

  signup(){
    this.http.post<any>('http://localhost:3000/signUpUsers', this.signupForm.value)
    .subscribe(res=>{
      alert('Signup Succesfull');
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert("Something went wrong")
    })
  }

}
