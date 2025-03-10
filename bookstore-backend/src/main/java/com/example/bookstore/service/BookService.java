package com.example.bookstore.service;
import org.springframework.transaction.annotation.Transactional;
import com.example.bookstore.model.Book;
import com.example.bookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Transactional
    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

   
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

   
    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

   
    public Book updateBook(Long id, Book bookDetails) {
        if (bookRepository.existsById(id)) {
            bookDetails.setId(id);
            return bookRepository.save(bookDetails);
        } else {
            return null; 
        }
    }

 
    public boolean deleteBook(Long id) {
        if (bookRepository.existsById(id)) {
            bookRepository.deleteById(id);	
            return true;
        } else {
            return false; 
        }
    }
}
