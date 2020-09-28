import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, AfterContentInit } from '@angular/core';

export interface TopMenu {
  id:number;
  title: string;
  link: string;
  //link?:string;            optional
  //readonly link:string     readonly
}


// //for function
// interface AddFunc {
//   (x: number, y: number): number;
// }

// interface Dict{
//   [key:string]:string;
// }


@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit, OnChanges, AfterContentInit {
  selectedIndex = -1;

  title = '拼多多';
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor: '#fff';
  @Input() titleActiveColor: 'yellow';
  @Input() titleColor: 'blue';
  @Input() indicatorColor:'brown'
 
  @Output() tabSelected = new EventEmitter();

  // add: AddFunc = (x, y) => x + y;

  // dick:Dict ={
  //   a: '1',
  //   b:'2'
  // }


  // constructor(){
  //   console.log(this.dick.a);
  // }


  handleSelection(index:number){
   this.selectedIndex = index;
   this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
  constructor() {   
}

ngOnChanges(changes:SimpleChanges):void{
  console.log(changes);
}
  ngOnInit(): void {
  }


  // ngDoCheck():void{
  //   console.log('zaizhi jian ce.')
  // }
  ngAfterContentInit(): void {


  }

}
