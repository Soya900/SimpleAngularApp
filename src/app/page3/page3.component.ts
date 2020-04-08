import { Subscription } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit, OnDestroy {

  constructor(private dataService: DataService) { }

  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.dataService.bookDeletedEvent.subscribe(
      (book) => {
        alert(`The book called ${book.title} was deleted`);
      },
      (error) => {
        alert('No books were deleted - the error was ' + error);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteLastBook() {
    this.dataService.deleteBook();
  }

}
