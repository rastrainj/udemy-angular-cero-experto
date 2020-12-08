import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.form = this.fb.group({
      nombre: [''],
      apellido: [''],
      correo: [''],
    });
  }

  guardar() {
    console.log(this.form);
  }
}
