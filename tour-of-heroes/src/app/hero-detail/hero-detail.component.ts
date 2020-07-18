import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { from } from 'rxjs';

import { Router } from '@angular/router'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
message:string;
@Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getHero();
  }


  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
      if(this.hero == null){
        this.message = this.heroService.message2;
      //  this.router.navigate(['dashboard']);
      }
  }

  save(){
    this.heroService.updateHeroes(this.hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  
}
