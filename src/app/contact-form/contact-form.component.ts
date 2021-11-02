import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactInfo!: FormGroup;
  formSubmitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.contactInfo = new FormGroup({
      'name': new FormControl("Somebody", [Validators.required]),
      'email': new FormControl("eric@whatever", [Validators.required, Validators.email]),
      'message': new FormControl("Here is a message for ya!", [Validators.required])
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    this.contactInfo.reset();
  }

}
