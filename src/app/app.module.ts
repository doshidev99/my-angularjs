import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminRoutes } from 'src/routes/admin.routing';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/Login/Login.component';


const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'login', component: LoginComponent },
]

// auto import
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotfoundComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminRoutes,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
