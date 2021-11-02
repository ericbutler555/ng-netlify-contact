import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactInfo!: FormGroup;
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.contactInfo = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.http.post('/', {...this.contactInfo.value}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    }).subscribe(() => {
      this.formSubmitted = true;
      this.contactInfo.reset();
    });
  }

}
