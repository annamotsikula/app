// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProductResolver } from './core/resolvers/product-resolver.resolver'; // Ensure the path is correct

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'products/:id', component: ProductDetailComponent, resolve: { product: ProductResolver } },
  { path: '**', redirectTo: '' }
];

export const appRoutes = routes;



