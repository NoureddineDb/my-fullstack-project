import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) {}


  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }


  addBook(book: Book): Observable<Book> {
    console.log('Sending book:', book);
    return this.http.post<Book>(this.apiUrl, book, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });

  }


  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }


  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }


  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
