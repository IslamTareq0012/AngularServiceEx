import { Component, OnInit } from '@angular/core';
import { ReferenceService } from './services/reference.service';
import { Employee } from './models/employee';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Service app';
  Objects: any;
  constructor(public referService: ReferenceService, public http: Http) { }
  getAllEmployees() {
    this.referService.getAllEmployees()
      .subscribe((result: any) => {

        console.log('the employess data:' + result);
        this.Objects = result;
      },
      (error) => {
        console.log('done employees method', error);
      });
  }
  ngOnInit() {
    this.getAllEmployees();
  }
}
