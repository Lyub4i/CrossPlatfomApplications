import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InterfacepageClassPage } from './interfacepage.page';

describe('InterfacepageClassPage', () => {
  let component: InterfacepageClassPage;
  let fixture: ComponentFixture<InterfacepageClassPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterfacepageClassPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InterfacepageClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
