import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterNames } from './core/const/enum';
import { CatGuard } from './core/guard/cat-guard.guard';
import { LoggedInComponent } from './layouts/logged-in/logged-in.component';
import { LoginGuard } from './core/guard/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./modules/welcome/welcome.module")
    .then(module => module.WelcomeModule)
  },
  {
    path: '',
    component: LoggedInComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: RouterNames.DOGS,
        loadChildren: () => import("./modules/dogs/dogs.module")
          .then(module => module.DogsModule)
      },
      {
        path: RouterNames.CATS,
        canActivate: [CatGuard],
        loadChildren: () => import("./modules/cats/cats.module")
          .then(module => module.CatsModule)
      },
      {
        path: RouterNames.MICE,
        loadChildren: () => import("./modules/mice/mice.module")
          .then(module => module.MiceModule)
      },
      {
        path: RouterNames.HOME,
        loadChildren: () => import("./modules/home/home.module")
          .then(module => module.HomeModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: RouterNames.HOME
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
