import { Injectable } from '@angular/core';
import { LazyServiceModule } from './lazy-service.module';

@Injectable({
  providedIn: LazyServiceModule
})
export class LazyWorkerService {

  static instance = 0;
  private _instance: number;

  public get name(): string {
    return `LazyWorkerService (${this._instance})`;
  }

  constructor() {
    LazyWorkerService.instance++;
    this._instance = LazyWorkerService.instance;
  }
}
