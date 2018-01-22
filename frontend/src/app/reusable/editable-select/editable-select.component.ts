import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-editable-select',
  templateUrl: './editable-select.component.html',
  styleUrls: ['./editable-select.component.scss']
})
export class EditableSelectComponent implements OnInit {

  @Input() items: string[];
  @Input() value: string;
  @Input() editing: boolean;
  @Output() valueChange = new EventEmitter<MatSelectChange>();

  constructor() { }

  ngOnInit() {
  }
}
