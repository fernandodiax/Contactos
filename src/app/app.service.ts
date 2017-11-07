import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AppService {
   
    //contactos: any;
    contactosRef: AngularFireList<any>;
    contactosFiltroRef: AngularFireList<any>;
    contactos: Observable<any[]>;
    // Constructor del componente 
    constructor(public db: AngularFireDatabase){
      this.contactosRef = db.list('contactos');
      this.contactos = this.contactosRef.snapshotChanges().map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
      });
    }

    // Obtiene todos los conctactos desde la bd
    getContactos(){
      this.contactosRef = this.db.list('contactos');
      this.contactos = this.contactosRef.snapshotChanges().map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
      });
            

      return this.contactos;
      
    }
    
    // Filtra los cantactos por ciudad
    getContactosFiltro(filtro: string = 'Todos'){
      this.contactosFiltroRef = this.db.list('contactos/', ref => ref.orderByChild('direccion').equalTo(filtro));
      this.contactos = this.contactosFiltroRef.snapshotChanges().map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
      });
            
      return this.contactos;
    }

    // Actualiza un contacto
    updateContacto(key, contacto) {  // key el id del registro, contacot informacion a modificar
      this.contactosRef.update(key, contacto);
    }

    //Remover contacto
    removeContacto(key) {
      this.contactosRef.remove(key);
    }

    // Agregar contacto
    addContacto(contacto) {
      this.contactosRef.push(contacto);
    }
}

