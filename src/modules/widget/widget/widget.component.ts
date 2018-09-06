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
  providers: [WorkerService] // it will have its own private instance of the WorkerService
})
export class WidgetComponent implements OnInit {

  static instance = 0;
  private _instance: number;

  public get instance(): number {
    return this._instance;
  }

  constructor(
    public workerService: WorkerService
  ) {
    WidgetComponent.instance++;
    this._instance = WidgetComponent.instance;
  }

  ngOnInit() {
  }

}
