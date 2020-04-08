import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/Book';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  lastAccessed = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addBook() {
    const book = new Book();
    book.title = 'Another book';
    book.author = 'Matt';
    this.dataService.addBook(book);
  }

  addBook1() {
    const book = new Book();
    book.title = 'Another book';
    book.author = 'James';
    this.dataService.addBook(book);
  }
}
