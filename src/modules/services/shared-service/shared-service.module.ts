import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedWorkerService } from './shared-worker.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    // SharedWorkerService
  ]
})
export class SharedServiceModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServiceModule,
      providers: [
        SharedWorkerService
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedServiceModule,
      providers: [
        SharedWorkerService
      ]
    };
  }
}
