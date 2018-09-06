import { Injectable } from '@angular/core';
import { SharedServiceModule } from './shared-service.module';

// WARNING: we know we'll have a circular dependency warning, the service is also registered in the
//          module providers list.
@Injectable({
  providedIn: SharedServiceModule
})
export class SharedWorkerService {
  static instance = 0;
  private _instance: number;

  public get name(): string {
    return `SharedWorkerService (${this._instance})`;
  }

  constructor() {
    SharedWorkerService.instance++;
    this._instance = SharedWorkerService.instance;
  }
}
