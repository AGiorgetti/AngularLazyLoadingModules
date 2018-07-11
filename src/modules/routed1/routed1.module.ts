import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routed1.routes';
import { WidgetModule } from '../widget/widget.module';
import { ServiceModule } from '../service/service.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    WidgetModule,
    // add the following registration to have a service that is singleton inside the module
    // ServiceModule.forChild()
  ],
  declarations: [Component1Component]
})
export class Routed1Module { }
