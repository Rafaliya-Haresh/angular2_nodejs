import { provideRouter, ROUTER_DIRECTIVES} from '@angular/router';

import { ListComponent }  from './list';
import { CreateComponent }  from './create';
import { HomeComponent }  from './home';
import { EditComponent }  from './edit';


// Route config
const routes: RouterConfig = [
     {path: '', component: ListComponent},
      {path: 'create', component: CreateComponent},
      {path: 'edit/:id', component: EditComponent},
      {path: 'home', component: HomeComponent},
  ]

// Export Routing
export const routing = provideRouter(routes);