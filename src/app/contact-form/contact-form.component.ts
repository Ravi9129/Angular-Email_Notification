import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormArray, FormGroup, Validators } from '@angular/forms';

import { ServicesService } from '../services.service';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ServicesService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Firstname: new FormControl('', [Validators.required]),
      Lastname: new FormControl('', [Validators.required]),
      SelectAl: new FormControl('',[Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),

    });
  }


  onSubmit(FormData:any) {

    // FormData.SelectAl=this.SelectAlll.length; 
    // FormData.SelectAl=(this.SelectAlll.length)/28*100; 
    FormData.SelectAl=(this.SelectAlll.length/this.categories.length)*100; 
    



    
    // this.SelectAl(String(FormData.SelectAl / 100));

    // return parseFloat(String(FormData.SelectAl / 100));
    
//     let data={
// FormData.Firstname,
//       ...this.FormData.value.Email,
//     //  ...this.SelectAlll
//     };
    
    console.log(FormData,this.SelectAlll)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
  
  
  SelectAlll: Array<any> = []
  categories = [ 
    {name :"Word 1", id: 1},
    {name :"Word 2", id: 2},
    {name :"Word 3", id: 3},
    {name :"Word 4", id: 4},
    {name :"Word 1", id: 5},
    {name :"Word 2", id: 6},
    {name :"Word 3", id: 7},
    {name :"Word 4", id: 8},
    {name :"Word 1", id: 9},
    {name :"Word 2", id: 10},
    {name :"Word 3", id: 11},
    {name :"Word 4", id: 12},
    {name :"Word 1", id: 13},
    {name :"Word 2", id: 14},
    {name :"Word 3", id: 15},
    {name :"Word 4", id: 16},
    {name :"Word 1", id: 17},
    {name :"Word 2", id: 18},
    {name :"Word 3", id: 19},
    {name :"Word 4", id: 20},
    {name :"Word 1", id: 21},
    {name :"Word 2", id: 22},
    {name :"Word 3", id: 23},
    {name :"Word 4", id: 24},
    {name :"Word 1", id: 25},
    {name :"Word 2", id: 26},
    {name :"Word 3", id: 27},
    {name :"Word 4", id: 28},


    
  ];

  onChange(email:string, isChecked: boolean) {
      if(isChecked) {
        this.SelectAlll.push(email);
      } else {
        let index = this.SelectAlll.indexOf(email);
        this.SelectAlll.splice(index,1);
      }
      console.log(this.SelectAlll)
  }

  // selectAll() {
  //   let checkBoxes = document.querySelectorAll('.form-check-input');
  //   checkBoxes.forEach(ele => ele.click());
  // }

  duplicate() {
    console.log(this.SelectAlll);
  }

  
}


