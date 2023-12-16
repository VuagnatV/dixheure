import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisteAudioComponent } from './piste-audio.component';

describe('PisteAudioComponent', () => {
  let component: PisteAudioComponent;
  let fixture: ComponentFixture<PisteAudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PisteAudioComponent]
    });
    fixture = TestBed.createComponent(PisteAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
