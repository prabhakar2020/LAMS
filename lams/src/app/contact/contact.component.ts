import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      leavetype: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.messageForm.name);
    if(this.messageForm.invalid){
      console.log("Error")
      return;
    }
    this.success = true;
  }

  ngOnInit() {
  }

}
