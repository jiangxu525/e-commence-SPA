import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TabItem } from './shared/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedIndex$:Observable<number>;
  handleTabSelected(tab:TabItem){
    this.router.navigate([tab.link])
  }
  constructor(private router:Router){

  }

  ngOnInit():void{
    this.selectedIndex$ = this.router.events.pipe(
      filter(ev=>ev instanceof NavigationEnd),
      map((ev:NavigationEnd)=>{
        const arr = ev.url.split("/");
        return arr.length >1 ? arr[1]:"home";
      }),
      map(path=>this.getSelectedIndex(path))
    );
  }

  getSelectedIndex(tab:string){
    return tab==="recommend"
    ? 1
    :tab==="category"
    ? 2
    :tab==="chat"
    ? 3
    :tab==="my"
    ? 4
    : 0;
  }

}
