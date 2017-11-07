import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AppService } from './app.service';
import { DetallesComponent } from './detalles/detalles.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { EliminarComponent } from './eliminar/eliminar.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  contactos: any;
  ciudades: any;
  contacto = null;
  contactoEditar = null;
  contactoAgregar = false;


  constructor(private servicio: AppService, private dialog: MatDialog) { 
    this.ciudades = ['Todos', 'Quito', 'Guayaquil', 'Bolivia'] ;
    this.contactos = this.servicio.getContactos();
  }

  ngOnInit() {
    this.servicio.getContactos();
  }

  // Evento del select
  onSelect(event) {
    if (event.value == "Todos") {
      this.contactos = this.servicio.getContactos();
    } else {
      this.contactos = this.servicio.getContactosFiltro(event.value);
    }

    this.contacto = null;
  }

  // Evento que se ejecutan cuando se hacel clic en detalle
  onClick(contacto) {
    this.contacto = contacto;
  }

  // Quita el compomente de detalle
  cerrarDetalle() {
    this.contacto = null;
  }

  onEditar(contacto) {
    this.contactoEditar= contacto;
  }

  // Cierra el furmulario de edicion
  cerrarEdicion() {
    this.contactoEditar = null;
  }

  // Eliminar registro
  onEliminar(contacto) {
    let dialogRef = this.dialog.open(EliminarComponent, {
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(estado => {
      if (estado) {
        this.servicio.removeContacto(contacto.key);
      }
    })
  }

  onAgregar() {
    this.contactoAgregar = true;
  }

}
