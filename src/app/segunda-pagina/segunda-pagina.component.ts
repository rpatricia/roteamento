import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-segunda-pagina',
  templateUrl: './segunda-pagina.component.html',
  styleUrls: ['./segunda-pagina.component.css'],
})
export class SegundaPaginaComponent {
  constructor(private router: Router) {}

  moverParaPrimeiraPagina() {
    this.router.navigate(['primeira-pagina']);
  }
}
