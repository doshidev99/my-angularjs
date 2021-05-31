import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { ComponentToViewComponent } from './components/component-to-view/component-to-view.component';
import { ViewToComponentComponent } from './components/view-to-component/view-to-component.component';
import { ToWayBindingComponent } from './components/to-way-binding/to-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { InputComponent } from './components/input/input.component';
import { ChildComponent } from './components/child/child.component';
import { StarsComponent } from './components/stars/stars.component';

// auto import
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ComponentToViewComponent,
    ViewToComponentComponent,
    ToWayBindingComponent,
    StructuralDirectiveComponent,
    HeaderComponent,
    ProductComponent,
    AttributeComponent,
    InputComponent,
    ChildComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
