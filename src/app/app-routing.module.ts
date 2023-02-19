import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginasComParametrosComponent } from './paginas-com-parametros/paginas-com-parametros.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

const routes: Routes = [
  { path: 'primeira-pagina', component: PrimeiraPaginaComponent },
  { path: 'segunda-pagina', component: SegundaPaginaComponent },
  {
    path: 'paginas-com-parametros/:id',
    component: PaginasComParametrosComponent,
  },
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  { path: 'pagina-protegida', component: PaginaProtegidaComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent,},
  { path: '**', component: PaginaNaoEncontradaComponent },
  { path: '', redirectTo: 'primeira-pagina', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
