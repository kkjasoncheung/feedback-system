import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from './components/issue';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issuesURL = 'http://localhost:3000/issues';

  constructor(private http: HttpClient) { }

  // GET request to get all issues
  public getIssues(): Observable<Object> {
    return this.http.get(this.issuesURL);
  }

  // POST request to add issue to db
  // TODO: Add error handling
  public addIssue(issue: Issue) {
    return this.http.post<Issue>(this.issuesURL + '/add', issue);
  }
}
