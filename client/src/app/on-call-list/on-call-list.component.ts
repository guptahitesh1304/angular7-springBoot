import { Component, OnInit } from '@angular/core';
import { OnCallService } from '../shared/onCall/on-call.service';
OnCallService

@Component({
  selector: 'app-on-call-list',
  templateUrl: './on-call-list.component.html',
  styleUrls: ['./on-call-list.component.css']
})
export class OnCallListComponent implements OnInit {

  OnCall: Array<any>;

  constructor(private oncallservice : OnCallService) { }

  ngOnInit() {
    this.oncallservice.getAll().subscribe(data =>{
      this.OnCall = data;
    });
  }

}
