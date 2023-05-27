import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxInfiniteGridModule } from "@egjs/ngx-infinitegrid";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxInfiniteGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
