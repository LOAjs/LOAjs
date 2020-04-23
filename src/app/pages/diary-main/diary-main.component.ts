import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-diary-main',
  templateUrl: './diary-main.component.html',
  styleUrls: ['./diary-main.component.css']
})
export class DiaryMainComponent implements OnInit {

  postId;
  test;

  constructor(private route:Router,private http: HttpClient,route2: ActivatedRoute) { 
    this.test = route2.snapshot.params['test'];

  }

  onSaveClick(){
    this.route.navigate(['diary'])
}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/test/').subscribe(data => {
        this.postId = data[0];
        })

        
        
  }

}
