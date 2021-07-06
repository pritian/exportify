import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})

export class LogginComponent implements OnInit {

  newTaskForm: FormGroup;
  getUserName;

  constructor(private fb: FormBuilder, private router: Router, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.newTaskForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(){
      var res =  this.ApiService.validateUser(this.newTaskForm.valid["userName"],this.newTaskForm.valid["password"]);
      localStorage.setItem('userName', JSON.stringify(this.newTaskForm.value.userName));
      this.getUserName = JSON.parse(localStorage.getItem('userName'))
      // console.log(this.getUserName);

      if(res && this.newTaskForm.valid){
          this.router.navigate(["home"]);
          
      }else{
        alert("invalid User")
      }
  }
}
