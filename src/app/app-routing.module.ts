import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConstant } from './enums/app-constant.enum';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { AirPollutionComponent } from './components/air-pollution/air-pollution.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';

const routes: Routes = [
  {
    path: `${AppConstant.DASHBOARD}`,
    component: DashboardComponent
  },
  {
    path: `${AppConstant.CURRENT_WATHER}`,
    component: CurrentWeatherComponent
  },
  {
    path: `${AppConstant.FORECAST}`,
    component: ForecastComponent
  },
  {
    path: `${AppConstant.AIR_POLLUTION}`,
    component: AirPollutionComponent
  },
  {
    path: '**',
    redirectTo: `${AppConstant.DASHBOARD}`,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
