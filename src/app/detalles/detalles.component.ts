import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input() contacto: any;
  @Output() cerrar = new EventEmitter();  //creamos un evento para capturar el cierre del componente
  constructor() { }

  ngOnInit() {
  }

  onCerrar() {
    this.cerrar.emit();
  }

}
