import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  @Input() mostrar: boolean=false;

  @Output() cerrar = new EventEmitter();

  form: FormGroup;
   validationMessages = {
     'nombre': { 'required': 'El nombes ess requerido.'},
     'apellidos': { 'required': 'Los apellidos son requeridos.' },
     'direccion': { 'required': 'La dirección es requerida.' }
   };

  constructor(private service: AppService, private fb: FormBuilder) { }

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

  // Registra el nuevo contacto
  onGuardar() {
    this.service.addContacto(this.form.value);
    this.onCancelar();
  }

  //Cierra el componente
  onCancelar() {
    this.cerrar.emit();
  }
}
