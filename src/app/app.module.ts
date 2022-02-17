import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AlbumsComponent,
    AlbumsListComponent,
    FooterComponent,
    PeoplesComponent,
    HomeComponent,

  ],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
