import { Component }  from '@angular/core';
import { Router }  from '@angular/router';
import {FilterArray} from './filter';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: 'app/list.html',
  pipes:[FilterArray]
})

export class ListComponent { 
	

	constructor(private http: Http, private router: Router) {
		this.data  = [];
    this.init();
    }

    init(){
  		this.http.get('/users/list').map(response => response.json()).subscribe(
            response => {
            	this.data  = response;
              NProgress.done();
            },
            error => {
            	console.log("Error: " + error)
            }
        )
  	}

  	createSchool(){
		this.router.navigate(['create']);
	}

	delete(value){
		this.http.get('/users/delete/' + value._id).map(response => response.json()).subscribe(
            response => {
     			    this.init();       	
            },
            error => {
            	console.log("Error: " + error)
            }
        )
	}

	onEdit(obj){
		this.router.navigate(['edit/' + obj._id ]);
	}

}