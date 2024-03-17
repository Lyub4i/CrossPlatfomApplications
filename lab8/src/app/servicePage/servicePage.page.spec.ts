import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ServicePagePage } from './servicePage.page';

describe('ServicePagePage', () => {
  let component: ServicePagePage;
  let fixture: ComponentFixture<ServicePagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicePagePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
