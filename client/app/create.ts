import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import {Http, Headers} from '@angular/http';
import {apiRoot} from './global';

@Component({
  selector: 'create',
  templateUrl:'app/create.html'
})
export class CreateComponent { 

	constructor(private http: Http, private router: Router) {
		this.formData = {};
	}

	add(){
		NProgress.start();
		if(this.formData.name){
			var obj = {
				name: this.formData.name,
				description: this.formData.description,
				location: this.formData.location
			}
			let headers = new Headers({ 'Content-Type': 'application/json' });
			
			this.http.post(apiRoot + '/users/create', JSON.stringify(obj), {headers: headers}).subscribe(
	            response => {
	  				NProgress.done();
	  				this.router.navigate(['']);
	            },
	            error => {
	            	console.log("Error: " + error)
	            }
	        )
		}
	}

	cancel(){
		this.router.navigate(['']);
	}
}