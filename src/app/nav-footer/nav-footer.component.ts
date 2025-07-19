import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-footer',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './nav-footer.component.html',
  styleUrl: './nav-footer.component.css'
})
export class NavFooterComponent {
  fname="";
  lname="";

  submitted=false;
  submitform(){
    this.submitted=true;
    console.log('submit',{name:this.fname,llastname:this.lname})
    alert('submit');
    setTimeout(()=>{

      this.fname='';
      this.lname='';
      this.submitted=false;
    },5000);


  }

}
