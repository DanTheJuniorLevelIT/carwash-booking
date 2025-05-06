import { Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { ServiceComponent } from './modules/service/service.component';
import { PriceComponent } from './modules/price/price.component';
import { LocationComponent } from './modules/location/location.component';
import { ContactComponent } from './modules/contact/contact.component';
import { LoginComponent } from './modules/login/login.component';

export const routes: Routes = [
    {path: 'main', component: MainComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'about', component: AboutComponent},
            {path: 'service', component: ServiceComponent},
            {path: 'price', component: PriceComponent},
            {path: 'location', component: LocationComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'login', component: LoginComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'main', pathMatch: 'full'},
];
