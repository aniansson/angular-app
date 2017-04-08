import { Component, OnInit } from '@angular/core';

@Component({
  /*Element itself/by class*/
  selector: 'app-servers',

  /*By attribute*/
  /*selector: '[app-servers]',*/

  /* Calling a single line of code - internal
  template: '<app-server></app-server><app-server></app-server>',*/

/* Calling a external files*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
