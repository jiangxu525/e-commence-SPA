import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[appGridItemTitle]' })




export class GridItemTitleDirective implements OnInit {
    @HostBinding('style.font-size') @Input()  appGridItemTitle = "'2rem'";
    @HostBinding('style.grid-area') area = 'title';

    
    
    constructor(private elr:ElementRef, private rd2:Renderer2) {
     }
    ngOnInit(): void {
        // this.rd2.setStyle(this.elr.nativeElement,'grid-area','title');
    }
}