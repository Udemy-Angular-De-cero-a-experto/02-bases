import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }];

  // @Output()
  // public onDeleteId: EventEmitter<number> = new EventEmitter();

  @Output()
  public deleteById: EventEmitter<string> = new EventEmitter();


  // onDeleteCharacter(index: number): void {
  //   this.onDeleteId.emit(index);
  // }

  deleteCharacterById( id: string): void {
    this.deleteById.emit(id);
  }

}
