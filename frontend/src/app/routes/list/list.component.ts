import { RouteListItem } from '../route-list-item';
import { RoutesService } from '../routes.service';
import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatTableDataSource, MatSelectChange } from '@angular/material';
import { RouteLevel } from '../route-level';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  levels: string[];
  state: {
    initial: boolean;
    editing: boolean;
    edited: boolean;
    action_row_index: number;
    creating: boolean;
    created: boolean;
    saving: boolean;
    saved: boolean;
    deleting: boolean;
    deleted: boolean;
  };



  dataSource = new MatTableDataSource();
  displayedColumns = [
    'id',
    'location',
    'updated',
    'created',
    'name',
    'description',
    'level',
    'actions'
  ];

  constructor(private routeService: RoutesService) {
    this.state = this.resetState(true);
    this.levels = RouteLevel;
  }


  ngOnInit() {
    this.routeService.getRoutes().subscribe(routes => {
      this.dataSource.data = routes;
    });
  }

  resetState(initial: boolean = false) {
    return {
      initial: initial,
      editing: false,
      edited: false,
      action_row_index: -1,
      creating: false,
      created: false,
      saving: false,
      saved: false,
      deleting: false,
      deleted: false,
    };
  }

  public edit(index: number) {
    this.state = this.resetState();
    this.state.editing = true;
    this.state.action_row_index = index;
    console.log(index);
  }

  public cancel(index: number) {
    this.state = this.resetState(true);
    console.log(index);
  }

  public save(index: number) {
    this.state = this.resetState(true);
    this.state.saving = true;
    this.state.action_row_index = index;
    console.log(index);
  }

  public delete(index: number) {
    this.state = this.resetState();
    this.state.deleting = true;
    this.state.action_row_index = index;
    console.log(index);
  }

  public levelChange(level: MatSelectChange, index: number) {
    (<RouteListItem> this.dataSource.data[index]).level = level.value;
  }
}
