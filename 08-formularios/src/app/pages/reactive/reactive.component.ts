import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validadores: ValidadoresService
  ) {
    this.crearFormulario();
    this.cargarDataAlFormulario();
  }

  ngOnInit(): void {}

  get pasatiempos(): FormArray {
    return this.form.get('pasatiempos') as FormArray;
  }

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

  get distritoNoValido(): boolean | undefined {
    return (
      this.form.get('direccion.distrito')?.invalid &&
      this.form.get('direccion.distrito')?.touched
    );
  }

  get ciudadNoValido(): boolean | undefined {
    return (
      this.form.get('direccion.ciudad')?.invalid &&
      this.form.get('direccion.ciudad')?.touched
    );
  }

  get pass1NoValido(): boolean | undefined {
    return this.form.get('pass1')?.invalid && this.form.get('pass2')?.touched;
  }

  get pass2NoValido(): boolean | undefined {
    const pass1 = this.form.get('pass1')?.value;
    const pass2 = this.form.get('pass2')?.value;

    return pass1 === pass2 ? false : true;
  }

  crearFormulario(): void {
    this.form = this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(5)]],
        apellido: ['', [Validators.required, this.validadores.noHerrera]],
        correo: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        pass1: ['', Validators.required],
        pass2: ['', Validators.required],
        direccion: this.fb.group({
          distrito: ['', Validators.required],
          ciudad: ['', Validators.required],
        }),
        pasatiempos: this.fb.array([]),
      },
      {
        validators: this.validadores.passwordsIguales('pass1', 'pass2'),
      }
    );
  }

  cargarDataAlFormulario(): void {
    this.form.reset({
      nombre: 'Juanan',
      apellido: 'Pérez',
      correo: 'juanan@mail.com',
      direccion: {
        distrito: 'Ontario',
        ciudad: 'Ottawa',
      },
    });
  }

  agregarPasatiempo(): void {
    this.pasatiempos.push(this.fb.control(''));
  }

  borrarPasatiempo(i: number): void {
    this.pasatiempos.removeAt(i);
  }

  guardar(): void {
    console.log(this.form);

    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((childControl) =>
            childControl.markAsTouched()
          );
        }
        control.markAsTouched();
      });
    }

    // Posteo de información
    // this.form.reset({
    //   nombre: 'Sin valor',
    // });
  }
}
