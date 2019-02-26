import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  title = 'SMS-FrontendChallenge';
  startDate = undefined;
  endDate = undefined;
  arrData: any[];
  currentUser: User;
  users: User[] = [];
    constructor(private httpService: HttpClient , private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.httpService.get('./assets/data.json').subscribe(
        data => {
          this.arrData = data as string [];	 // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrData[1]);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
     }

     ngOnInit() {
      this.loadAllUsers();
  }

  deleteUser(id: number) {
      this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
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
        console.log(FilteredData)
        this.arrData = FilteredData as string []
      }
     }

  }




