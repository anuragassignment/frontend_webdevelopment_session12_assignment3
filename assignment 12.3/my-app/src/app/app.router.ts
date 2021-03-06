// routing configuration file

import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './list/user/user.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// path defined and assigned components accordingly along with default and wildcard routes
export const appRoutes: Routes = [
    { path: 'registration', component: RegistrationComponent },
    { path: 'users/:id/:name', component: UserComponent },
    { path: 'users', component: ListComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRouting = RouterModule.forRoot(appRoutes);