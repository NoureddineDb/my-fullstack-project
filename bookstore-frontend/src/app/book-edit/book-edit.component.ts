import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  imports : [FormsModule],
})
export class BookEditComponent implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    price: 0,
    description: ''
  };
  id: number | null = null;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log('Book ID:', this.id);
    if (this.id) {
      this.bookService.getBookById(this.id).subscribe(
        (response) => {
          this.book = response;
          console.log('Book data:', this.book);
        },
        (error) => {
          console.error('There was an error', error);
        }
      );
    }
  }









  updateBook(): void {
    if (this.id) {
      this.bookService.updateBook(this.id, this.book).subscribe(
        (response) => {
          console.log('Book updated successfully!', response);
          this.router.navigate(['/list']);
        },
        (error) => {
          console.error('There was an error!', error);
        }
      );
    }
  }
}
