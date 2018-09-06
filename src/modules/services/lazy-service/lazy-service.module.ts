import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyWorkerService } from './lazy-worker.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class LazyServiceModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LazyServiceModule,
      providers: [
        LazyWorkerService
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: LazyServiceModule,
      providers: [
        LazyWorkerService
      ]
    };
  }
}
