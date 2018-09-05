import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor() { }

  public getIssues(): void {
    console.log('Getting all issues...');
  }
}
