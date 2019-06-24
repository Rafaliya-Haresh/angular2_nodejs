import { bootstrap }  from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideRouter, ROUTER_DIRECTIVES} from '@angular/router';
import { Component }  from '@angular/core';

import { DemoComponent }  from './demo';
import { HomeComponent }  from './home';

@Component({
    selector: 'my-app',
  	template: "<router-outlet></router-outlet>",
  	directives: [ROUTER_DIRECTIVES]
})
class AppComponent {}


[
	provideRouter([
      {path: '', component: DemoComponent},
      {path: 'home', component: HomeComponent},
    ]),
    { provide: LocationStrategy, useClass: HashLocationStrategy}
];