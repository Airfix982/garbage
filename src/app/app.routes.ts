import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UserNameComponent } from './user-name/user-name.component';
import { ConfirmActivateGuard } from './guards/confirm-activate.guard';
import { ConfirmDeactivateGuard } from './guards/confirm-deactivate.guard';
import { TheCoolWallComponent } from './the-cool-wall/the-cool-wall.component';
import { LapTimeComponent } from './lap-time/lap-time.component';
import { CarReviewComponent } from './cars/car-review/car-review.component';
import { EngineModuleComponent } from './engine-module/engine-module.component';

export const routes: Routes = [
    { path: '', component: EngineModuleComponent , title: 'Engine' },
    { path: 'gear', component: AboutPageComponent, title: 'Gear Box'},
    { path: 'user/:name', component: UserNameComponent, title: 'Fuel System'},
    { path: "coolwall", component: TheCoolWallComponent, title: "The Cool Wall" },
    { path: "cars", component: CarReviewComponent, title: "Cars Review" },
    { path: "laptime", component: LapTimeComponent, title: "Lap Times" }
];
