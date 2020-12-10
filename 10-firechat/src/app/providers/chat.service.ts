import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: any[] = [];

  constructor(private firestore: AngularFirestore) {}

  cargarMensajes() {
    this.itemsCollection = this.firestore.collection<any>('chats');
    return this.itemsCollection.valueChanges();
  }
}
