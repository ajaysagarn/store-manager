package com.ajsa.store.manager.repository;

import com.ajsa.store.manager.models.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CustomFilteredBooks {
    Page<Book> getFilteredBooks(Pageable page, Long book_id, String title, String year);
}