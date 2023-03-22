import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Firestore,collection } from '@angular/fire/firestore';
import { AuthorService } from 'src/app/author.service';
@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent {
  fname:string='';
  lname:string='';
  country:string='';
  state:string='';
  address:string='';
  address2:string='';
  cvv:any='';
  expdate:any='';
  cardname:string='';
  cardnumber:any='';
  username:string='';
  email:string='';

  constructor(private ob:AuthorService,private fire:Firestore ){}


  submit()
  {
    const data={
      fname:this.fname,
      email:this.email,
      address:this.address,
      address2:this.address2,
      cvv:this.cvv,
      cardname:this.cardname,
      cardnumber:this.cardnumber,
      username:this.username,
      expdate:this.expdate,
      lname:this.lname,
      country:this.country,
      state:this.state
    }

    console.log(data);
    const docRef=collection(this.fire,"contactdata")
    this.ob.insertData(docRef,data)
    this.fname='';
    this.lname='';
    this.state='';
    this.country='';
    this.address='';
    this.address2='';
    this.email='';
    this.cvv='';
    this.cardname='';
    this.cardnumber='';
    this.expdate='';
    this.username='';
    



  }


}
