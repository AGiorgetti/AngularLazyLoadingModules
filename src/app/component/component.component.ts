import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../modules/services/service/worker.service';
import { SharedWorkerService } from '../../modules/services/shared-service/shared-worker.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  static instance = 0;
  private _instance: number;

  public get instance(): number {
    return this._instance;
  }

  constructor(
    public workerService: WorkerService,
    public sharedWorkerService: SharedWorkerService
  ) {
    ComponentComponent.instance++;
    this._instance = ComponentComponent.instance;
  }

  ngOnInit() {
  }

}
