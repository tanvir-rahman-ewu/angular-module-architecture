import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnifyModule } from './modules/unify/unify.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UnifyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof RoutesRecognized) {
        console.log(event?.state?.root?.firstChild?.data);
      }
    });
  }
}
