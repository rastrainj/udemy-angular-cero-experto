import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { UsuarioModel } from "../../models/usuario.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(this.usuario).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err.error.error.message);
      }
    );
  }
}
