import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  childData: string = '';

  @Output() sendData = new EventEmitter<string>();

  sendDataToParent() {
    this.sendData.emit(this.childData);
  }
}
