import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/service/worker.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  constructor(
    public workerService: WorkerService
  ) { }

  ngOnInit() {
  }

}
