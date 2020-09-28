import { Injectable } from '@angular/core';
import { Channel, ImageSlider, TopMenu } from 'src/app/shared';


@Injectable({providedIn: 'root'})
export class HomeService {
    constructor() { }
    
  topMenus: TopMenu[] = [
    {
      id:1,
      title: 'hot',
      link: 'hot'
    },
    {
      id:2,
      title: 'cell',
      link: 'cell'
    }, 
    {
      id:3,
      title: 'men',
      link: 'men'
    },
    {
      id:4,
      title: 'other',
      link: 'other'
    },
    {
      id:5,
      title: 'other',
      link: 'other'
    },
    {
      id:6,
      title: 'other',
      link: 'other'
    },
    {
      id:7,
      title: 'other',
      link: 'other'
    },
    {
      id:8,
      title: 'other',
      link: 'other'
    },
    {
      id:9,
      title: 'other',
      link: 'other'
    },
    {
      id:10,
      title: 'other',
      link: 'other'
    },
    {
      id:11,
      title: 'other',
      link: 'other'
    }
   ];


   
   imgSliders:ImageSlider[]=[
    {
      imgUrl:"https://media.istockphoto.com/photos/newspaper-with-tablet-on-wooden-table-picture-id691796820",
      link:"",
      caption:""
    },
  
    {
      imgUrl:"https://media.istockphoto.com/photos/group-of-business-people-picture-id925256780",
      link:"",
      caption:""
    },
  
    {
      imgUrl:"https://media.istockphoto.com/photos/newspapers-on-grey-background-picture-id1129301528",
      link:"",
      caption:""
    },
  
  
   ]
  
  
  
  
  channels: Channel[] = [
    {
      id: 1,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },
    {
      id: 2,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },    {
      id: 3,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },    {
      id: 4,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },    {
      id: 5,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },    {
      id: 6,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },    {
      id: 7,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },    {
      id: 8,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },    {
      id: 9,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },    {
      id: 10,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },    {
      id: 11,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },    
    {
      id: 12,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },
    {
      id: 13,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },
  ]


   getTabs(){
       return this.topMenus;
   }

   getImgSliders(){
     return this.imgSliders;
   }

   getChannels(){
     return this.channels;
   }
  
}