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
            },
            {
                path: 'producto/:id',
                loadComponent: () => import('./pages/website/productodetail/productodetail.component').then((m) => m.ProductodetailComponent),
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
                path: 'inventario',
                loadComponent: () => import('./pages/admin/inventario/inventario.component').then((m) => m.InventarioComponent),
            },
            {
                path: 'inventario/nuevo',
                loadComponent: () => import('./pages/admin/create-product/create-product.component').then((m) => m.CreateProductComponent),
            },
            {
                path: 'inventario/:id',
                loadComponent: () => import('./pages/admin/producto-detail-admin/producto-detail-admin.component').then((m) => m.ProductoDetailAdminComponent),
            },
            {
                path: 'usuarios',
                loadComponent: () => import('./pages/admin/usuarios/usuarios.component').then((m) => m.UsuariosComponent),
            },
            {
                path: 'categorias',
                loadComponent: () => import('./pages/admin/categorias/categorias.component').then((m) => m.CategoriasComponent),
            },
            {
                path: 'reportes',
                loadComponent: () => import('./pages/admin/reportes/reportes.component').then((m) => m.ReportesComponent),
            }
        ]
    }
];
