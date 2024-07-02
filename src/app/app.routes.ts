import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './pages/auth/login.component';
import { ProductListComponent } from './pages/products/product-list.component';
import { ProductDetailComponent } from './pages/products/product-detail.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProductResolver } from './core/resolvers/product-resolver';

export const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent, resolve: { data: ProductResolver } },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '' }
];




