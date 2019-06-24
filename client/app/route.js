"use strict";
const router_1 = require('@angular/router');
const list_1 = require('./list');
const create_1 = require('./create');
const home_1 = require('./home');
const edit_1 = require('./edit');
// Route config
const routes = [
    { path: '', component: list_1.ListComponent },
    { path: 'create', component: create_1.CreateComponent },
    { path: 'edit/:id', component: edit_1.EditComponent },
    { path: 'home', component: home_1.HomeComponent },
];
// Export Routing
exports.routing = router_1.provideRouter(routes);
//# sourceMappingURL=route.js.map