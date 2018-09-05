import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issuesURL = 'http://localhost:3000/issues';

  constructor(private http: HttpClient) { }

  public getIssues(): Observable<Object> {
    return this.http.get(this.issuesURL);
  }
}
