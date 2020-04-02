import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary-main',
  templateUrl: './diary-main.component.html',
  styleUrls: ['./diary-main.component.css']
})
export class DiaryMainComponent implements OnInit {

  constructor(private route:Router) { }

  onSaveClick(){
    this.route.navigate(['diary'])
}

  ngOnInit(): void {
  }

}
