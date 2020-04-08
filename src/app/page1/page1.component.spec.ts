import { DataService } from './../data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Component } from './page1.component';
import { Book } from '../model/Book';
import { MockDataService } from '../mocks/MockDataService';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page1Component],
      providers: [
        {
          provide: 'DataServiceInterface', useExisting: DataService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Number of books written by matt is incremented correctly', () => {
    const startValue = component.numberOfBooksWrittenByMatt;
    const book = new Book();
    book.author = 'Matt';
    const dataService = fixture.debugElement.injector.get(DataService);
    dataService.addBook(book);
    expect(component.numberOfBooksWrittenByMatt).toEqual(startValue + 1);
  });

  it('Number of books written by matt is incremented correctly version 2', () => {
    const book = new Book();
    book.author = 'Matt';
    const dataService = new MockDataService();
    component = new Page1Component(dataService);
    component.ngOnInit();
    const startValue = component.numberOfBooksWrittenByMatt;
    dataService.addBook(book);
    expect(component.numberOfBooksWrittenByMatt).toEqual(startValue + 1);
  });
});
