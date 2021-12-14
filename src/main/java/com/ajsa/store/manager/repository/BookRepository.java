package com.ajsa.store.manager.repository;

import com.ajsa.store.manager.models.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface BookRepository extends PagingAndSortingRepository<Book,Integer>, CustomFilteredBooks {
}
