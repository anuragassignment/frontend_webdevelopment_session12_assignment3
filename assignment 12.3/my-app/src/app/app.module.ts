import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Capitalize } from './capitalize.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { InputDataService } from './services/input-data.service';
import { UserComponent } from './list/user/user.component';
import { appRouting } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    Capitalize,
    FilterPipe,
    ListComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    appRouting // routes added to the module Import
  ],
  providers: [InputDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
