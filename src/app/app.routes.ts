import { Routes, RouterModule } from '@angular/router';
import { EngineModuleComponent } from './engine-module/engine-module.component';
import { GearModuleComponent } from './gear-module/gear-module.component';

export const routes: Routes = [
    { path: '', component: EngineModuleComponent , title: 'Engine' },
    { path: 'gear', component: GearModuleComponent, title: 'Gear Box'},
    //{ path: 'fuel', component: FuelModuleComponent, title: 'Fuel System'},
];
