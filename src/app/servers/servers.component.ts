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
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {

  /* Properties set to anything */
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];



  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  /* Method for creating a server
     Bindable properties and events*/
  onCreateServer() {
    /* Using directive *ngIf*/
    this.serverCreated = true;
    /* Adding a new server to the servers array*/
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  /* Passing and using data with event binding
     The HTML tag is to let TS know that the HTML element of the event is an html input element*/
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
