import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public cities = [
    { value: 'NY', viewValue: 'New York' },
    { value: 'LA', viewValue: 'Los Angeles' },
    { value: 'PH', viewValue: 'Phoenix' },
    { value: 'DL', viewValue: 'Dallas' },
    { value: 'CH', viewValue: 'Chicago' },
    { value: 'AT', viewValue: 'Atlanta' },
    { value: 'NJ', viewValue: 'New Jersey' },
  ];
  public ngOnInit(): void {
  }

}
