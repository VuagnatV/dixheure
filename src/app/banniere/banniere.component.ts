import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-banniere',
  templateUrl: './banniere.component.html',
  styleUrls: ['./banniere.component.css']
})
export class BanniereComponent {
  constructor(private router: Router) { }
  naviguerVersMonComposant() {
    this.router.navigate(['/auth']);
  }
}
