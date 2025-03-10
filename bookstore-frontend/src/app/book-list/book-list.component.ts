import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }


  editBook(id: number): void {
    console.log('Navigating to edit with ID:', id);
    this.router.navigate([`/edit/${id}`]);
  }


  deleteBook(id: number): void {
    if (confirm('Are you sure to delete this book ?')) {
      this.bookService.deleteBook(Number(id)).subscribe(() => {
        this.books = this.books.filter(book => book.id !== id);
      });
    }
  }
}


