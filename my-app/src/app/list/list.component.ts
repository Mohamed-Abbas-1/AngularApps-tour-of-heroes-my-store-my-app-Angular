import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
brews: object;
  title = "List";
  constructor(private _http:HttpService) {
    
   }

  ngOnInit(): void {
    this._http.gettBeer().subscribe(data =>{
      this.brews = data;
      console.log(this.brews);
    });
  }

}
