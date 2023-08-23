import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common' //Aqui tambien pude hacer BrowserModule pero ya lo investigaré despues
                                              // las diferencias entre CommonModule y BrowserModule
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
exports: [
  HeroComponent,
  ListComponent,
],
imports: [
  CommonModule
]
})
export class HeroesModule {}
