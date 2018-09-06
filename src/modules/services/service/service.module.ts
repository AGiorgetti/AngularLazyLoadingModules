import { NgModule, ModuleWithProviders } from '@angular/core';
import { WorkerService } from './worker.service';

/*

Service modules provide utility services such as data access and messaging.
Ideally, they consist entirely of providers and have no declarations.

Angular's HttpClientModule is a good example of a service module.

The root AppModule is the only module that should import service modules.

There will be some service modules that exists only to support other feature module
of the application and that will be imported by those said modules.

*/

// this module will be imported only by the AppModule,
// the provided service will be used by feature and routed modules

@NgModule({
  imports: [],
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
