import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { FilterPipe } from './filter.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    PhotoGalleryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
