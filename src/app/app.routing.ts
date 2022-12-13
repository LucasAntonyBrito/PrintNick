import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule, Routes } from "@angular/router";
import { CustomizadoComponent } from './Components/customizado/customizado.component';
import { HomeComponent } from "./Components/home/home.component";
import { VitrineComponent } from "./Components/vitrine/vitrine.component";


const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: "vitrine", component: VitrineComponent},
    {path: "customizado", component: CustomizadoComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);

