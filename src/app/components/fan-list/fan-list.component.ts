import { Component, OnInit } from '@angular/core';
import { Fan } from 'src/app/models/fan';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-fan-list',
  templateUrl: './fan-list.component.html',
  styleUrls: ['./fan-list.component.css']
})
export class FanListComponent implements OnInit {

  fanName: string;
  fanAge: number;
  fanCountry: string;
  fanTeam: string;

  rosarioFans: Fan[];
  barcelonaFans: Fan[];

  constructor(private randomUserService: RandomUserService) {

    this.fanName = '';
    this.fanAge = 0;
    this.fanCountry = '';
    this.fanTeam = '';

    this.rosarioFans = [];
    this.barcelonaFans = [];

  }

  ngOnInit(): void {



  }

  addFan() {
    if (this.fanTeam === 'rosario') {
      this.rosarioFans.push(new Fan(this.fanName, this.fanAge, this.fanCountry));
    } else {
      this.barcelonaFans.push(new Fan(this.fanName, this.fanAge, this.fanCountry));
    }
  }

  deleteFan(index: number, team: string) {
    if (team === 'rosario') {
      this.rosarioFans.splice(index, 1);
    } else {
      this.barcelonaFans.splice(index, 1);
    }
  }

  changeTeam(index: number, team: string) {
    if (team === 'rosario') {
      const fan: Fan = this.rosarioFans.splice(index, 1)[0];
      this.barcelonaFans.push(fan);
    } else {
      const fan: Fan = this.barcelonaFans.splice(index, 1)[0];
      this.rosarioFans.push(fan);
    }

  }

  addRandomFans() {
    this.randomUserService.getRandomUsers().subscribe(
      response =>{
        response.results.forEach((user) => {
        const age: number = user.dob.age;
        const country: string = user.location.country;
        const name: string = user.name.first;
        const picture: string = user.picture.large;
        const fan: Fan = new Fan(name, age, country, picture);
        if (this.fanTeam === 'rosario') {
          this.rosarioFans.push(fan);
        } else {
          this.barcelonaFans.push(fan);
        }
      });
    });
  }

  addRandomFan() {
    this.randomUserService.getRandomUser().subscribe(
      response => {
  
          const age: number = response.results[0].dob.age;
          const country: string = response.results[0].location.country;
          const name: string = response.results[0].name.first;
          const picture: string = response.results[0].picture.large;
          const fan: Fan = new Fan(name, age, country, picture);
          if (this.fanTeam === 'rosario') {
            this.rosarioFans.push(fan);
          } else {
            this.barcelonaFans.push(fan);
          }
        });

  }

}
