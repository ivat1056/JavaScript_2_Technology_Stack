import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [AppComponent, DataComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
