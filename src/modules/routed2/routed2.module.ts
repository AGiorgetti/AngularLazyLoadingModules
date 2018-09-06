import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2/component2.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routed2.routes';
import { WidgetModule } from '../widget/widget.module';
import { SharedServiceModule } from '../services/shared-service/shared-service.module';
import { LazyServiceModule } from '../services/lazy-service/lazy-service.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    WidgetModule,
    // add the following registration to have a service that is singleton inside the module
    // ServiceModule.forChild()
    // add the following registration to have a service that is singleton inside the module
    SharedServiceModule.forChild(),
    LazyServiceModule
  ],
  declarations: [Component2Component]
})
export class Routed2Module { }
