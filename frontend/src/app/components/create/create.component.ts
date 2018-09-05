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
    response: ['', Validators.required],
    description: ['', Validators.required],
    severity: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  /* Submit function */
  // TODO: Call API service
  submit(): void {
    // Create issue object based on interface
    var newIssue: Issue = {
      title: this.issueForm.value.title,
      response: this.issueForm.value.response,
      description: this.issueForm.value.description,
      severity: this.issueForm.value.severity,
      status: 'Open'
    }

    console.log('Created new issue: ' + JSON.stringify(newIssue));
  }

}
