import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: 'Rubén',
    apellido: 'Astráin',
    correo: 'rastrain@outlook.es',
  };
  constructor() {}

  ngOnInit(): void {}

  guardar(form: NgForm): void {
    console.log(form);
    console.log(form.value);
  }
}
