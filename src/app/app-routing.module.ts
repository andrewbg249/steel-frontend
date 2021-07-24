import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';

import { EditorialComponent } from './components/editorial/editorial.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormAuthorComponent } from './components/author/form-author/form-author.component';
import { FormEditorialComponent } from './components/editorial/form-editorial/form-editorial.component';
import { BookComponent } from './components/book/book.component';
import { FormBookComponent } from './components/book/form-book/form-book.component';


const routes: Routes = [
  { path: '', component: LayoutComponent},
  { path: 'author', component: AuthorComponent},
  { path: 'save-author', component: FormAuthorComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: 'save-editorial', component: FormEditorialComponent},
  { path: 'book', component: BookComponent },
  { path: 'save-book', component: FormBookComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
