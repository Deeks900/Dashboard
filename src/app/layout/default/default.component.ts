import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {


  // variable to operate sidebar state
  sideBarOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

}
