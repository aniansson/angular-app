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

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName: '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  /* We have a HTML tag bc the type of the HTML element of the event is an html input element*/
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
