import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { ComponentComponent } from './component/component.component';
import { DomainModule } from '../modules/domain/domain.module';
import { ServiceModule } from '../modules/services/service/service.module';
// import { WidgetModule } from '../modules/widget/widget.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),

    ServiceModule.forRoot(),

    // if we add the module here (or we add it to a feature module imported by the root module),
    // it will be embedded in the "main" bundle,
    // otherwise a "common" module with the shared code will be created
    // WidgetModule
    DomainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
