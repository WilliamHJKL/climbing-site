import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/observable/of';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { ListComponent } from './routes/list/list.component';
import { RoutesService } from './routes/routes.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    MatTableModule,
  ],
  providers: [RoutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
