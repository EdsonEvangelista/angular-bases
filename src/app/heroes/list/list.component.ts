import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','SheHulk','Thor'];
  public removedHero?: string

  removeLastHero():void {

    this.removedHero = this.heroNames.pop();
    console.log(this.removedHero);

  }

}
