import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EliminarComponent>
  ) { }

  ngOnInit() {
  }

  // Elimina el registro
  onEliminar() {
    this.dialogRef.close(true);
  }
  
  //Cancela la eliminacion del registro
  onCancelar() {
    this.dialogRef.close(false);
  }
}
