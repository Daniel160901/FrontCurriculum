import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, RouterOutlet} from '@angular/router';
import { AppComponent } from './app.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesModule} from './pages/pages.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTAuthService } from './interceptors/jwtauth.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        PagesModule,
        PagesRoutingModule,
        RouterModule,
        HttpClientModule,
        NoopAnimationsModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JWTAuthService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
