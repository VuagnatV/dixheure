import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private router: Router) {}

 
  authenticate(email: string, password: string) {
 
    if(email === 'user' && password === 'password') {
      this.router.navigate(['/home']); // Redirection vers 'home' si authentifié
    } else {
      alert('Authentification échouée');
    }
  }
}