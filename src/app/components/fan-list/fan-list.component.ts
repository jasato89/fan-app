import { Component, OnInit } from '@angular/core';
import { Fan } from 'src/app/models/fan';

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

  constructor() {

    this.fanName  = '';
    this.fanAge = 0;
    this.fanCountry = '';
    this.fanTeam = '';

    this.rosarioFans = [];
    this.barcelonaFans = [];

   }

  ngOnInit(): void {

    this.rosarioFans.push(new Fan('Martina', 24, 'Argentina'));
    this.rosarioFans.push(new Fan('Pedro', 28, 'Argentina'));
    this.rosarioFans.push(new Fan('Motoko', 26, 'Japón'));

    this.barcelonaFans.push(new Fan('Rocio', 27, 'España'));
    this.barcelonaFans.push(new Fan('Alejandro', 28, 'España'));
    this.barcelonaFans.push(new Fan('Miki', 27, 'España'));


  }

  addFan() {
    if(this.fanTeam === 'rosario') {
      this.rosarioFans.push(new Fan(this.fanName, this.fanAge, this.fanCountry));
    }else {
      this.barcelonaFans.push(new Fan(this.fanName, this.fanAge, this.fanCountry));
    }
  }

  deleteFan(index: number, team: string) {
    if(team === 'rosario') {
      this.rosarioFans.splice(index, 1);
    } else {
      this.barcelonaFans.splice(index, 1);
    }
  }

  changeTeam(index: number, team: string) {
    if(team === 'rosario') {
      const fan: Fan = this.rosarioFans.splice(index, 1)[0];
      this.barcelonaFans.push(fan);
    } else {
      const fan: Fan = this.barcelonaFans.splice(index, 1)[0];
      this.rosarioFans.push(fan);
    }

  }

}
