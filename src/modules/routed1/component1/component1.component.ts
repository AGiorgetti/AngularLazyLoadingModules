import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/service/worker.service';
import { SharedWorkerService } from '../../services/shared-service/shared-worker.service';
import { LazyWorkerService } from '../../services/lazy-service/lazy-worker.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  static instance = 0;
  private _instance: number;

  public get instance(): number {
    return this._instance;
  }

  constructor(
    public workerService: WorkerService,
    public sharedWorkerService: SharedWorkerService,
    public lazyWorkerService: LazyWorkerService
  ) {
    Component1Component.instance++;
    this._instance = Component1Component.instance;
  }

  ngOnInit() {
  }

}
