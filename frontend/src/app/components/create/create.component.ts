import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private severity: string;

  constructor() { }

  ngOnInit() {
  }

  /* Submit function */
  // TODO: Call API service
  submit(): void {
    console.log('form is submitted');
  }

}
