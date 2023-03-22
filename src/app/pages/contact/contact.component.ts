import { Component } from '@angular/core';
import { Firestore,collection } from '@angular/fire/firestore';
import { AuthorService } from 'src/app/author.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name:string='';
  email:string='';
  feedback:string='';
  contactdata:any

  constructor(private ob:AuthorService,private fire:Firestore)
  {

  }

  submit()
  {
    const data={
      name:this.name,
      email:this.email,
      feedback:this.feedback
    }

    console.log(data);
    const docRef=collection(this.fire,"contactdata")
    this.ob.insertData(docRef,data)
    this.name='';
    this.email='';
    this.feedback='';
  }

}
