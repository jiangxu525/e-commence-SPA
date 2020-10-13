import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorizontalGridComponent } from './components/horizontal-grid';
import { ScrollableTabComponent } from './components/scrollable-tab';
import { ImageSliderComponent } from './components/image-slider';
import {AvatarDirective, GridItemDirective, GridItemImageDirective, GridItemTitleDirective, TagDirective} from './directives'
import { CountDownComponent, FooterComponent, ProductCardComponent, VerticalGridComponent } from './components';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    TagDirective,
    AvatarDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    TagDirective,
    AvatarDirective
  ]
})


export class SharedModule {
}
