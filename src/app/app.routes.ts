import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/website/layoutwebsite/layoutwebsite.component').then((m) => m.LayoutwebsiteComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/website/home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'catalogo',
                loadComponent: () => import('./pages/website/catalogo/catalogo.component').then((m) => m.CatalogoComponent),
            },
            {
                path: 'carrito',
                loadComponent: () => import('./pages/website/carrito/carrito.component').then((m) => m.CarritoComponent),
            },
            {
                path: 'login',
                loadComponent: () => import('./pages/website/login/login.component').then((m) => m.LoginComponent),
            }
        ]
    },
    {
        path: 'admin',
        loadComponent: () => import('./pages/admin/layoutadmin/layoutadmin.component').then((m) => m.LayoutadminComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/admin/dashboard/dashboard.component').then((m) => m.DashboardComponent),
            },
            {
                path: 'usuarios',
                loadComponent: () => import('./pages/admin/usuarios/usuarios.component').then((m) => m.UsuariosComponent),
            },
            {
                path: 'categorias',
                loadComponent: () => import('./pages/admin/categorias/categorias.component').then((m) => m.CategoriasComponent),
            }
        ]
    }
];
