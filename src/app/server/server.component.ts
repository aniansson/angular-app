import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {

  // properties
  serverId: number = 10;
  serverStatus: string = 'offline';

 constructor() {
   /* 50% chance that the serverStatus will either be online or offline*/
  this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
 }


  // method
  getServerStatus () {
    return this.serverStatus;
  }

  /* Method for changing the background color depending on the servers status*/
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}

