import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter:number = 0;
  name:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    this.clickCounter +=1;
  }


  setClasses(){
    let myClasses = {
      disable: this.clickCounter < 5,
      active: this.clickCounter > 4,
      extreme: this.clickCounter > 8
    }
    return myClasses;
  }
}
