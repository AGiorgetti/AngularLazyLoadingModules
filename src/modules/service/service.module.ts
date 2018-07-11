import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerService } from './worker.service';

/*

Service modules provide utility services such as data access and messaging.
Ideally, they consist entirely of providers and have no declarations.

Angular's HttpClientModule is a good example of a service module.

The root AppModule is the only module that should import service modules.

*/

// this module will be imported only by the AppModule,
// the provided service will be used by feature and routed modules

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ServiceModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        WorkerService
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        WorkerService
      ]
    };
  }
}
