"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const http_1 = require('@angular/http');
const global_1 = require('./global');
let CreateComponent = class CreateComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.formData = {};
    }
    add() {
        NProgress.start();
        if (this.formData.name) {
            var obj = {
                name: this.formData.name,
                description: this.formData.description,
                location: this.formData.location
            };
            let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            this.http.post(global_1.apiRoot + '/users/create', JSON.stringify(obj), { headers: headers }).subscribe(response => {
                NProgress.done();
                this.router.navigate(['']);
            }, error => {
                console.log("Error: " + error);
            });
        }
    }
    cancel() {
        this.router.navigate(['']);
    }
};
CreateComponent = __decorate([
    core_1.Component({
        selector: 'create',
        templateUrl: 'app/create.html'
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.js.map