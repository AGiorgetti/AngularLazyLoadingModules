import { Component } from '@angular/core';
import { WorkerService } from '../modules/services/service/worker.service';
import { SharedWorkerService } from '../modules/services/shared-service/shared-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    public workerService: WorkerService,
    public sharedWorkerService: SharedWorkerService
  ) { }
}
