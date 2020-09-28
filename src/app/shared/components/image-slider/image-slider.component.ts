import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight: string = "160px";
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    // console.log(this.imgSlider);
    // this.imgSlider.nativeElement.innerHTML = '<span>hello!!!!</span>';


  }

  ngAfterViewInit(): void {
    // console.log(this.imgs);
    // not recommend this.imgs.forEach(item=>item.nativeElement.style.height = '100px');
    //  this.imgs.forEach(item =>{
    //    this.rd2.setStyle(item.nativeElement,'height','100px');
    //  })

    // setInterval(()=>{
    //   let i = 0;
    //   this.rd2.setProperty(this.imgSlider.nativeElement,'scrollLeft',++i*200)
    // }, 1000);

    // console.log(this.imgSlider);

    // console.log(this.imgSlider.nativeElement.width);
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft', ((this.getIndex(++this.selectedIndex)) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length);
    }, this.intervalBySeconds * 1000);
  }

  handleScroll(ev){

    const ratio =
      ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
      this.selectedIndex = Math.round(ratio);
  }


  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  ngOnDestroy():void{
    clearInterval(this.intervalId);
  }

}
