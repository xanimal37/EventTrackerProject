import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AdmittalsComponent } from './components/admittals/admittals.component';
import { ReleasesComponent } from './components/releases/releases.component';
import { FaqComponent } from './components/faq/faq.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AnimalService } from './services/animal.service';
import { StatusComponent } from './components/status/status.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AdmittalsComponent,
    ReleasesComponent,
    FaqComponent,
    AnimalsComponent,
    FooterComponent,
    StatusComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AnimalService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
