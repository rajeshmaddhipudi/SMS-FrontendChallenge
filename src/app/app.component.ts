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
          //  console.log(this.arrData[1]);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
      console.log(this.arrData)
     }
     FilterData() {
      let FilteredData = []
      FilteredData = this.arrData.filter(
        m => new Date(m.start_date) >= new Date(this.startDate) &&
        new Date(m.start_date) <= new Date(this.endDate) &&
        new Date(m.end_date) <= new Date(this.endDate)
        && new Date(m.end_date) >= new Date(this.startDate)
      );
      if (FilteredData.length >= 0) {
        this.arrData = FilteredData as string []
      }
     }

  }




