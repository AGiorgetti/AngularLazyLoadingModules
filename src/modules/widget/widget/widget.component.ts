import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../service/worker.service';

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
