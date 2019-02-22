import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SMS-FrontendChallenge';
    constructor(private httpService: HttpClient) { }
    arrData: string [];

    ngOnInit() {
      this.httpService.get('./assets/data.json').subscribe(
        data => {
          this.arrData = data as string [];	 // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
    }
  }

