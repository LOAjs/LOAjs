import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES = [];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  postId;
  menuItems: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    
    
    this.http.get<any>('http://localhost:3000/getmonth').subscribe(data => {
      this.postId = data;

      for (let k of this.postId) {
    
        ROUTES.push(
          {
            path: "/diary-main/" +k.dates,
            title: k.dates + "("+k.count+")",
            rtlTitle: "",
            icon: "icon-notes",
            class: ""
        
          });
      } 
      
      this.menuItems = ROUTES.filter(menuItem => menuItem)
      })
      

  }
  
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
