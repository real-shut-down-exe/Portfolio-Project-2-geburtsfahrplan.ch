import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    //   {
    //     path: '',
    //     loadComponent: () =>
    //       import('./pages/shell/shell.component').then(m => m.ShellComponent),
    //     children: [
    //       {
    //         path: '',
    //         pathMatch: 'full',
    //         loadComponent: () =>
    //           import('./pages/home/home.page').then(m => m.HomePage),
    //         title: 'Home',
    //       },
    //       {
    //         path: 'auth',
    //         loadChildren: () =>
    //           import('./features/auth/auth.routes').then(m => m.authRoutes),
    //       },
    //     ],
    //   },
    //   { path: 'not-found', loadComponent: () => import('./pages/not-found/not-found.page').then(m => m.NotFoundPage) },
    //   { path: '**', redirectTo: 'not-found' },
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
            import('./pages/home/home').then(m => m.Home),
        title: 'Home',
    },
    // {
    //     path: 'not-found',
    //     loadComponent: () =>
    //         import('./pages/not-found/not-found.page').then(m => m.NotFoundPage),
    //     title: 'Not Found',
    // },
    { path: '**', redirectTo: 'not-found' },
];