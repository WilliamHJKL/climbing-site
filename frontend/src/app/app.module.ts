import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/observable/of';
import { MatTableModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './routes/list/list.component';
import { RoutesService } from './routes/routes.service';
import { EditableInputComponent } from './reusable/editable-input/editable-input.component';
import { EditableTextareaComponent } from './reusable/editable-textarea/editable-textarea.component';
import { EditableSelectComponent } from './reusable/editable-select/editable-select.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditableInputComponent,
    EditableTextareaComponent,
    EditableSelectComponent,

  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  providers: [RoutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
