import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-worker',
  standalone: true,
  imports: [],
  templateUrl: './service-worker.component.html',
  styleUrl: './service-worker.component.css',
})
export class ServiceWorkerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('test component has loaded!');
    this.loadScript();
  }

  loadScript(): void {
    console.log('service worker component has loaded!');
  }
}
