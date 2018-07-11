import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // registers the service in the main application module (even id the module is imported in a lazy loaded module)
})
export class WorkerService {
  static instance = 0;
  private _instance: number;

  public get name(): number {
    return this._instance;
  }

  constructor() {
    WorkerService.instance++;
    this._instance = WorkerService.instance;
  }
}
