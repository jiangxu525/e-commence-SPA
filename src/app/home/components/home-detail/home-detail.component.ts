import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, ImageSlider } from 'src/app/shared';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  selectedTabLink;
  constructor(private route: ActivatedRoute,private service:HomeService) { }
  imgSliders: ImageSlider[] = []
  channels: Channel[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
    })
    this.imgSliders=this.service.getImgSliders();
    this.channels=this.service.getChannels();
  }




}
