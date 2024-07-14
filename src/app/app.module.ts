import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import{HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms';
import { AmountTransctionPipe } from './pipes/amount-transction.pipe';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    AmountTransctionPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterLink

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
