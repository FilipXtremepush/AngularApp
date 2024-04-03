import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWorkerComponent } from './service-worker.component';

describe('ServiceWorkerComponent', () => {
  let component: ServiceWorkerComponent;
  let fixture: ComponentFixture<ServiceWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceWorkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
