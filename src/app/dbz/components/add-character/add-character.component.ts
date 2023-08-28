import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public nuevoChartacter: EventEmitter<Character> = new EventEmitter();

  @ViewChild('name') nameInput!: ElementRef;

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {

    if(this.character.name.length === 0) return;

    this.nuevoChartacter.emit(this.character)

    this.character = { name: '', power: 0 }
    this.nameInput.nativeElement.focus();
  }
}
