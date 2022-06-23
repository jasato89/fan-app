import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  private readonly baseUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }


  getRandomUsers(): Observable<RandomUser> {
    return this.http.get<RandomUser>(this.baseUrl + "?results=5");
  }

  getRandomUser(): Observable<RandomUser> {
    return this.http.get<RandomUser>(this.baseUrl);
  }

}

export interface RandomUser {

  results: [{
    name: {
      title: string,
      first: string,
      last: string
    }
    dob: {
      age: number
    }
    location: {
      country: string
    }
    picture: {
      large: string
    }
  }]
}
