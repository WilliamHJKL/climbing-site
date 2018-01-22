import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editable-textarea',
  templateUrl: './editable-textarea.component.html',
  styleUrls: ['./editable-textarea.component.scss']
})
export class EditableTextareaComponent implements OnInit {

  @Input()
  public editing = false;

  @Input()
  public value: string;

  constructor() { }

  ngOnInit() {
  }

}
