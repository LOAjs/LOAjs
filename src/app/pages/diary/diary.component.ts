import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ["diary.css"]
})
export class DiaryComponent implements OnInit {

  constructor() { }
  
  onSaveClick(){ alert('zz') }

  ngOnInit(): void {
  }

}
