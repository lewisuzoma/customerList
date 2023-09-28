import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullModalPage } from './full-modal.page';

describe('FullModalPage', () => {
  let component: FullModalPage;
  let fixture: ComponentFixture<FullModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FullModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
