import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieListComponentComponent } from './movie/movie-list-component/movie-list-component.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Project module waarin alle componenten staan. 
// Kan worden opgesplist in submodules.
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieListComponentComponent,
    MovieDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // Bootstrap = Waar is het vertrekpunt van de rest van de toepassing
  bootstrap: [AppComponent]
})
export class AppModule { }
