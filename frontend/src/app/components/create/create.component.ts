import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Issue } from '../issue';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public issueForm = this.fb.group({
    title: ['', Validators.required],
    reason: ['', Validators.required],
    description: ['', Validators.required],
    severity: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  /* Submit function */
  // TODO: Call API service
  submit(): void {
    console.log(this.issueForm);
  }

}
