import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../service/worker.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(
    public workerService: WorkerService
  ) { }

  ngOnInit() {
  }

}
