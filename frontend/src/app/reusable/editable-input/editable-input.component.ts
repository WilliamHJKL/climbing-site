import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss']
})
export class EditableInputComponent implements OnInit {

  @Input()
  public editing = false;

  @Input()
  public value: string;

  @Input()
  public inputType = 'text';

  constructor() { }

  ngOnInit() {
  }

}
