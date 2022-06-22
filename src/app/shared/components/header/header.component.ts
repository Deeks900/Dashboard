import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // child component updating data to parent
  // https://angular.io/guide/inputs-outputs
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    // This raises an event
    this.toggleSideBarForMe.emit();
  }

}
