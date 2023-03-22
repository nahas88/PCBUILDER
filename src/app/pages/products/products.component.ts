import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private j:HeroService,private r:Router)
  {

  }
  database=this.j.getdata();
  gotopage(id:any)
  {
    localStorage.setItem('id',id)
    this.r.navigate(['/single'])
  }

}
