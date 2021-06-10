import { LoginServiceService } from './login-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = { login: '', senha: '' };

  constructor(
    private loginService: LoginServiceService, 
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { }
 
  ngOnInit() {
  }

  login(): void {
    this.loginService.login(this.usuario) 
  }

  adm(): void {
    if(this.usuario.login == "adm" && this.usuario.senha == "adm") this.loginService.adm(this.usuario);
    else{
      this.loginService.showMessage('Login ou senha incorretos!', true)
    }
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  
 
 
}
