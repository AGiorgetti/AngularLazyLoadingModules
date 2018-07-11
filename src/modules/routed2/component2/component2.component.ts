import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../service/worker.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(
    public workerService: WorkerService
  ) { }

  ngOnInit() {
  }

}
