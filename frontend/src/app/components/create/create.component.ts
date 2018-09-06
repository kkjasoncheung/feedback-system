import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../../issues.service';

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

  constructor(private fb: FormBuilder, private issueService: IssuesService) { }

  ngOnInit() {
  }

  /* Submit function */
  submit(): void {
    if (this.issueForm.valid) {
      // Create issue object based on interface
      var newIssue: Issue = {
        title: this.issueForm.value.title,
        response: this.issueForm.value.response,
        description: this.issueForm.value.description,
        severity: this.issueForm.value.severity,
        status: 'Open'
      }

      // make POST request to API
      this.issueService.addIssue(newIssue).subscribe((issue: Issue) => {
        console.log('Successfully added new issue: ' + JSON.stringify(issue));
      }, (error) => {
        console.log(error);
      });
    }
  }

}
