import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => {
      return import('./book-list/book-list.component').then((m) => m.BookListComponent)
    },
  },
  {
    path: 'add',
    loadComponent: () => {
      return import('./book-add/book-add.component').then((m) => m.BookAddComponent)

    } ,
  },
  {
    path: 'edit/:id',
    loadComponent: () => {
      return import('./book-edit/book-edit.component').then((m) => m.BookEditComponent)
    } ,
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./book-list/book-list.component').then((m) => m.BookListComponent)
    },
  },
];

