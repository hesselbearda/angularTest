import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() label = '';
  @Input() helpText = '';
  @Input() selection: Array<any>;

  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {
    this.value = 1;
  }

  update (val: number) {
    this.value = val;
    this.valueChange.emit(this.value);
  }

}
