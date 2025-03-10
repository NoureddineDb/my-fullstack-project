import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  standalone: true,
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
  imports :[FormsModule],

})
export class BookAddComponent implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    price: 0,
    description: ''
  };

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {}
  addBook() {
    console.log('Adding book:', this.book);
    this.bookService.addBook(this.book).subscribe({
      next: (response) => {
        console.log('Book added successfully!', response);
        this.router.navigate(['/list']);
      },
      error: (error) => {
        console.error('Error adding book:', error);

        if (error instanceof HttpErrorResponse) {
          console.error('Error status:', error.status);
          console.error('Error message:', error.message);
          console.error('Full error:', error);
        }
      },
    });
  }


}
