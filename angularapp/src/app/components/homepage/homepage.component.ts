import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public users: any;

  constructor(private http: HttpClient) {
    // http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
    //   this.forecasts = result;
    // }, error => console.error(error));
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.http.get(`https://localhost:7009/api/Users`).subscribe({
      next: result => this.users = result,
      error: (error) => console.log(error),
      complete: () => {"Request has completed"}
    })
  }
}




