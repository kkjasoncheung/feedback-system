import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public issuesList: Issue[];
  public noIssues: boolean;

  constructor(private issuesService: IssuesService) {
  }

  ngOnInit() {
    this.updateIssuesList();
  }

  public delete(id) {
    console.log('Delete issue with ' + id);
    this.issuesService.deleteIssue(id).subscribe(() => {
      // Show an updated list of issues
      this.updateIssuesList();
    });

  }

  public updateIssuesList() {
    this.issuesService.getIssues().subscribe((issues: Issue[]) => {
      console.log(issues);
      this.issuesList = issues;
      this.noIssues = this.issuesList.length === 0;
    }, (error) => {
      console.log(error);
    });
  }
}
