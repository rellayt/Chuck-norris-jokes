import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesGeneratorComponent } from './jokes-generator.component';

describe('JokesGeneratorComponent', () => {
  let component: JokesGeneratorComponent;
  let fixture: ComponentFixture<JokesGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
