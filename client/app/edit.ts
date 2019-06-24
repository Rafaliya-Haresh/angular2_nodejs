import { Component }  from '@angular/core';
import { ActivatedRoute, Router }  from '@angular/router';
import {Http, Headers} from '@angular/http';
import {apiRoot} from './global';

@Component({
  selector: 'my-app',
  templateUrl: 'app/edit.html'
})

export class EditComponent { 
	

	constructor(private http: Http, private router: Router, private route: ActivatedRoute) {
		  this.formData = {};

      if(route.snapshot.params['id']){
    		this.http.get('/users/edit/' + route.snapshot.params['id']).map(response => response.json()).subscribe(
                response => {
                	this.formData  = response;
                },
                error => {
                	console.log("Error: " + error)
                }
            )
      }

  	}

  	update(){
      NProgress.start();
      var obj = {
        _id: this.route.snapshot.params['id'],
        name: this.formData.name,
        description: this.formData.description,
        location: this.formData.location
      }

      let headers = new Headers({ 'Content-Type': 'application/json' });

      this.http.post(apiRoot + '/users/update', JSON.stringify(obj), {headers: headers}).subscribe(
            response => {
              NProgress.done();
              this.router.navigate(['']);
            },
            error => {
              console.log("Error: " + error)
            }
        )
	  }

	cancel(){
		this.router.navigate(['']);
	}
}