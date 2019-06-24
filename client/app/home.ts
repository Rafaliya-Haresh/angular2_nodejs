import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'home',
  template:'<div><h1> Home</h1></div>',
})
export class HomeComponent { 

	constructor(route: ActivatedRoute) {
		console.log('==========')
	    console.log(route.snapshot.params['id']);
	}
}