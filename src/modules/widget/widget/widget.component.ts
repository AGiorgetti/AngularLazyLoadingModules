import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/service/worker.service';

/*

The Widget Component works together with the WorkerService exposed application-wise
by ServiceModule.

All the Modules can import this Module and use this Component.

*/

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
  providers: [WorkerService]
})
export class WidgetComponent implements OnInit {

  constructor(
    public workerService: WorkerService
  ) { }

  ngOnInit() {
  }

}
