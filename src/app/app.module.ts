import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthorComponent } from './components/author/author.component';
import { EditorialComponent } from './components/editorial/editorial.component';
import { BookComponent } from './components/book/book.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormBookComponent } from './components/book/form-book/form-book.component';
import { FormAuthorComponent } from './components/author/form-author/form-author.component';
import { FormEditorialComponent } from './components/editorial/form-editorial/form-editorial.component';
import { ObjToArrayPipe } from './objToArray.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    NavbarComponent,
    AuthorComponent,
    EditorialComponent,
    BookComponent,
    LayoutComponent,
    FormBookComponent,
    FormAuthorComponent,
    FormEditorialComponent,
    ObjToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
