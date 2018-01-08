import { RoutesService } from '../routes.service';
import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'location', 'updated', 'created', 'name', 'description', 'level'];

  constructor(private routeService: RoutesService) { }

  ngOnInit() {
    this.routeService.getRoutes().subscribe(routes => {
      this.dataSource.data = routes;
    });
  }
}
