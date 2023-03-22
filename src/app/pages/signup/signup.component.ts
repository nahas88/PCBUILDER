import { Component,OnInit } from '@angular/core';
import { AuthorService } from 'src/app/author.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
{
  ngOnInit(){}
  fname:string='';
  lname:string='';
  address:string='';
  city:string='';
  email:string='';
  password:string='';
  user:any;

  constructor(private auth:AuthorService)
  {

  }

  register()
  {
    if(this.fname == '')
    {
      alert('Please enter your First Name');
      return;
    }
    if(this.lname == '')
    {
      alert('Please enter your Last Name');
      return;
    }
    if(this.address == '')
    {
      alert('Please enter your Address');
      return;
    }
    if(this.email == '')
    {
      alert('Please enter your Email');
      return;
    }
    if(this.city == '')
    {
      alert('Please enter your City');
      return;
    }
    if(this.password == '')
    {
      alert('Please enter your Password');
      return;
    }

    const cred={
      fnamne:this.fname,
      lname:this.lname,
      city:this.city,
      address:this.address,
      email:this.email,
      password:this.password
    }

    this.auth.register(cred);
    this.fname='';
    this.lname='';
    this.city='';
    this.address='';
    this.password='';
    this.email='';

    


    



  }


}




