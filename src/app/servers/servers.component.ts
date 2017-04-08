import { Component, OnInit } from '@angular/core';

@Component({
  /*Element itself/by class*/
  /*selector: 'app-servers',*/

  /*By attribute*/
  selector: '[app-servers]',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
