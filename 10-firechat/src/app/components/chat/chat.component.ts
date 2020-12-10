import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [],
})
export class ChatComponent implements OnInit {
  mensaje: string = '';
  constructor(public chatService: ChatService) {
    this.chatService.cargarMensajes().subscribe();
  }

  ngOnInit(): void {}

  enviar_mensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }
    this.chatService
      .agregarMensaje(this.mensaje)
      .then(() => console.log('Mensaje guardado'))
      .catch((err) => console.error('Error al enviar', err));
  }
}
