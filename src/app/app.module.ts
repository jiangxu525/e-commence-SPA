import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module'
import { HomeModule } from './home';
import {RecommendModule} from './recommend'
import {MyModule} from './my'
import {ProductModule} from './product'
import {CategoryModule} from './category'
import {ChatModule} from './chat'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    RecommendModule,
    MyModule,
    ProductModule,
    CategoryModule,
    ChatModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
