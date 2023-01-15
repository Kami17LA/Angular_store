import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    /* aquí se puede crear o importar modulos */
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] /* componente principal */
})
export class AppModule { }
