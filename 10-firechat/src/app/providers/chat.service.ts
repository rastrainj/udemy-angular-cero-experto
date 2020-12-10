import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Mensaje } from '../interface/mensaje.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];

  constructor(private firestore: AngularFirestore) {}

  cargarMensajes() {
    this.itemsCollection = this.firestore.collection<Mensaje>('chats');
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes) => {
        console.log(mensajes);
        this.chats = mensajes;
      })
    );
  }

  agregarMensaje(texto: string) {
    // TODO falta el UID del usuario
    let mensaje: Mensaje = {
      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime(),
    };
    return this.itemsCollection.add(mensaje);
  }
}
