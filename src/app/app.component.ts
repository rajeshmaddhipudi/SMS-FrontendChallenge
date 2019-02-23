import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMS-FrontendChallenge';
  startDate = undefined;
  endDate = undefined;
  arrData: any[];
    constructor(private httpService: HttpClient) {
      this.httpService.get('./assets/data.json').subscribe(
        data => {
          this.arrData = data as string [];	 // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
      console.log(this.arrData)

     }
     changeName() {
       console.log(this.arrData);
       console.log(this.endDate)
     }

  }

// let start = "01-02-2017;
// let end = "06-07-2017";

// let selectedMembers = this.arrData.filter(
//   m => new Date(m.dat
// );



