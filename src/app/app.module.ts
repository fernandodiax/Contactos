import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppService }  from './app.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatOptionModule, MatDialogModule } from '@angular/material';
import { DetallesComponent } from './detalles/detalles.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { AgregarComponent } from './agregar/agregar.component';


//import 'hummerjs';

@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent,
    EditarComponent,
    EliminarComponent,
    AgregarComponent
  ],
  entryComponents: [
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule, 
    AngularFireModule.initializeApp(environment.firebase)    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
