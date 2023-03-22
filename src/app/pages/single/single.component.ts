import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  data:any
  constructor(private d:HeroService){}
  ngOnInit()
  {
    let id:any=localStorage.getItem('id');
    //console.log(idd);
    let ar=this.d.getdata();
    this.data=ar.filter(e=>e.id===id);
    //console.log(this.data[0]);
  }

}
