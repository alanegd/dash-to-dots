import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MorseInputComponent} from "./game/components/morse-input/morse-input.component";

const routes: Routes = [
  { path: '',   redirectTo: 'learn', pathMatch: 'full' },
  { path: 'learn', component:  MorseInputComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
