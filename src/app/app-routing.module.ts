import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DefaultComponent } from './default/default.component';
import { Page3Component } from './page3/page3.component';
import { VoidComponent } from './void/void.component';

const routes: Routes = [
  {path: '', component: DefaultComponent},
  {path: 'pagina1', component: Page1Component},
  {path: 'pagina2', component: Page2Component},
  {path: 'pagina3', component: Page3Component},
  {path: 'vacio', component: VoidComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'vacio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
