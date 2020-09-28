import { Route } from '@angular/compiler/src/core';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  TopMenu } from 'src/app/shared';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  topMenus: TopMenu[]=[]
  
  //  scrollableTabBgColor = 'red';
   handleTabSelected(topMenu:TopMenu){
    this.router.navigate(['home',topMenu.link])
   }
  
  // ngAfterViewInit():void{
  // }

  constructor(
    private router:Router, 
    private service : HomeService,
    @Inject(token) private baseUrl:string) { }

  ngOnInit() {
    this.topMenus = this.service.getTabs();
    console.log(this.baseUrl);
  }

}
