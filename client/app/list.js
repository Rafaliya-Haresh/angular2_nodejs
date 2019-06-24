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
const filter_1 = require('./filter');
const http_1 = require('@angular/http');
let ListComponent = class ListComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.data = [];
        this.init();
    }
    init() {
        this.http.get('/users/list').map(response => response.json()).subscribe(response => {
            this.data = response;
            NProgress.done();
        }, error => {
            console.log("Error: " + error);
        });
    }
    createSchool() {
        this.router.navigate(['create']);
    }
    delete(value) {
        this.http.get('/users/delete/' + value._id).map(response => response.json()).subscribe(response => {
            this.init();
        }, error => {
            console.log("Error: " + error);
        });
    }
    onEdit(obj) {
        this.router.navigate(['edit/' + obj._id]);
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/list.html',
        pipes: [filter_1.FilterArray]
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.js.map