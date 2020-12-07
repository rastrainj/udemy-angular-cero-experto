import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import Swal from "sweetalert2";
import { UsuarioModel } from "../../models/usuario.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // Swal.fire({
    //   // allowOutsideClick: () => false,
    //   icon: "info",
    //   text: "Espere por favor...",
    // });
    // Swal.showLoading();

    this.authService.login(this.usuario).subscribe(
      (resp) => {
        console.log(resp);
        // Swal.close();
        this.router.navigateByUrl("/home");
      },
      (err) => {
        console.log(err.error.error.message);
        // Swal.fire({
        //   // allowOutsideClick: () => false,
        //   icon: "error",
        //   text: err.error.error.message,
        // });
      }
    );
  }
}
