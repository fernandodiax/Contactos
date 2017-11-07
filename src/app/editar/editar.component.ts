import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AppService } from '../app.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  form: FormGroup;
  contactoOriginal: any;

  @Input() set contacto(valor) {
    this.crearFormulario();
    if (valor) {
      this.contactoOriginal = valor;
      console.log(valor);
      console.log('clave'+ this.contactoOriginal.key);
      this.form.patchValue({
        nombre: valor.nombre,
        apellidos: valor.apellidos,
        direccion: valor.direccion,
        telefono: valor.telefono,
        email: valor.email,
        empresa: valor.empresa
      });
    }
  }

  @Output() cerrar = new EventEmitter();
  
  
  // Constructor inyectado
  constructor(private service: AppService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.crearFormulario();
  }

  // Creacion de un formulario nuevo
  crearFormulario() {
    this.form = this.fb.group({
      nombre: '',
      apellidos: '',
      direccion: '',
      telefono: '',
      email: '',
      empresa: ''
    });
  }
  
  // Guarda el formulario
  onGuardar() {
    this.service.updateContacto(this.contactoOriginal.key, this.form.value);

    this.onCancelar();
  }

  // Cancela la edicion del contacto
  onCancelar() {
    this.contactoOriginal = null;
    this.cerrar.emit();
  }

}
