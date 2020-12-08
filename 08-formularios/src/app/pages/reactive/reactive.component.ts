import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  get nombreNoValido(): boolean | undefined {
    return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched;
  }

  get apellidoNoValido(): boolean | undefined {
    return (
      this.form.get('apellido')?.invalid && this.form.get('apellido')?.touched
    );
  }

  get correoNoValido(): boolean | undefined {
    return this.form.get('correo')?.invalid && this.form.get('correo')?.touched;
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
    });
  }

  guardar(): void {
    console.log(this.form);

    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) =>
        control.markAsTouched()
      );
    }
  }
}
