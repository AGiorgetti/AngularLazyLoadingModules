import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/service/worker.service';
import { SharedWorkerService } from '../../services/shared-service/shared-worker.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  static instance = 0;
  private _instance: number;

  public get instance(): number {
    return this._instance;
  }

  constructor(
    public workerService: WorkerService,
    public sharedWorkerService: SharedWorkerService
  ) {
    DomainComponent.instance++;
    this._instance = DomainComponent.instance;
  }

  ngOnInit() {
  }

}
