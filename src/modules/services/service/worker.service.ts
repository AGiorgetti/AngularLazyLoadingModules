import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // registers the service in the main application module (even if the module is imported in a lazy loaded module)
})
export class WorkerService {
  static instance = 0;
  private _instance: number;

  public get name(): string {
    return `WorkerService (${this._instance})`;
  }

  constructor() {
    WorkerService.instance++;
    this._instance = WorkerService.instance;
  }
}
