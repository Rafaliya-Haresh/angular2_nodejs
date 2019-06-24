import { bootstrap }  from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Component }  from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {routing} from './route';

import { provideRouter, ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector: 'my-app',
  	template: "<router-outlet></router-outlet>",
  	directives: [ROUTER_DIRECTIVES]
})
class AppComponent {}


bootstrap(AppComponent, [HTTP_PROVIDERS, routing]);