import { Injectable } from '@angular/core';
import { Channel, ImageSlider, TopMenu } from 'src/app/shared';
import { Product } from 'src/app/shared/domain';


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
      icon:'../../../assets/imgs/00a7e5de72e33a9888e932b1a41be2eb.webp',
      link:'baby'
    },    {
      id: 3,
      title: 'Title',
      icon:'../../../assets/imgs/114c4d54cba1952ba87282b03cd133ef.webp',
      link:'baby'
    },    {
      id: 4,
      title: 'Title',
      icon:'../../../assets/imgs/4f20868a189559675dabfea55549f45b.webp',
      link:'baby'
    },    {
      id: 5,
      title: 'Title',
      icon:'../../../assets/imgs/5178f6accbcadb36ff2bade73e7953f9.webp',
      link:'baby'
    },    {
      id: 6,
      title: 'Title',
      icon:'../../../assets/imgs/5178f6accbcadb36ff2bade73e7953f9.webp',
      link:'baby'
    },    {
      id: 7,
      title: 'Title',
      icon:'../../../assets/imgs/c0d0bec18ebced6b90c2d40176145040.webp',
      link:'baby'
    },    {
      id: 8,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },    {
      id: 9,
      title: 'Title',
      icon:'../../../assets/imgs/c0d0bec18ebced6b90c2d40176145040.webp',
      link:'baby'
    },    {
      id: 10,
      title: 'Title',
      icon:'../../../assets/imgs/b78869a2548a5f774cb2f3d85211f481.webp',
      link:'baby'
    },    {
      id: 11,
      title: 'Title',
      icon:'../../../assets/imgs/aa59aeac07f3f2b7bab6ebb6d2cab7f8.webp',
      link:'baby'
    },    
    {
      id: 12,
      title: 'Title',
      icon:'../../../assets/imgs/5178f6accbcadb36ff2bade73e7953f9.webp',
      link:'baby'
    },
    {
      id: 13,
      title: 'Title',
      icon:'https://img.pddpic.com/goods/2020-04-20/204c9e69a523b2fd6d4a6c7295dbb8e2.png?imageView2/2/w/1300/q/80/format/webp',
      link:'baby'
    },
  ]

  products:Product[]=[
    {
      id:1,
      imageUrl:"../../../assets/imgs/2020-10-12_115505.png",
      title:"Nike Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
      tags:['new','hot'],
      price:666,
      priceDesc:"hot buy",
      buyerAvatars:['../../../assets/avatars/avatar001.png','../../../assets/avatars/avatar002.png']
    },
    {
      id:1,
      imageUrl:"../../../assets/imgs/2020-10-12_115556.png",
      title:"Nike Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
      tags:['new','hot'],
      price:666,
      priceDesc:"hot buy",
      buyerAvatars:['../../../assets/avatars/avatar001.png','../../../assets/avatars/avatar002.png']
    },

    {
      id:1,
      imageUrl:"../../../assets/imgs/2020-10-12_115636.png",
      title:"Nike Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
      tags:['new','hot'],
      price:666,
      priceDesc:"hot buy",
      buyerAvatars:['../../../assets/avatars/avatar001.png','../../../assets/avatars/avatar002.png']
    },
    {
      id:1,
      imageUrl:"../../../assets/imgs/2020-10-12_115726.png",
      title:"Nike Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
      tags:['new','hot'],
      price:666,
      priceDesc:"hot buy",
      buyerAvatars:['../../../assets/avatars/avatar001.png','../../../assets/avatars/avatar002.png']
    }
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

   getProducts(){
     return this.products;
   }


  
}