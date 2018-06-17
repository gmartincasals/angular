import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Home2Component } from './components/home2/home2.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home_2', component: Home2Component },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});

