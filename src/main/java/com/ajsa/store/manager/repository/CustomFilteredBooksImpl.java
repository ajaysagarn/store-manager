package com.ajsa.store.manager.repository;

import com.ajsa.store.manager.models.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

public class CustomFilteredBooksImpl implements CustomFilteredBooks{

    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public Page<Book> getFilteredBooks(Pageable page, Long book_id, String title, String year) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Book> query = cb.createQuery(Book.class);
        Root<Book> book = query.from(Book.class);

        List<Predicate> predicates = getFilterPredicates(cb,book,book_id,year,title);

        query.select(book);

        query.where(cb.and(predicates.toArray(new Predicate[predicates.size()])));

        List<Book> booksPage =  entityManager.createQuery(query)
                .setMaxResults(page.getPageSize())
                .setFirstResult(page.getPageNumber() * page.getPageSize())
                .getResultList();


        CriteriaQuery<Long> cqCount = cb.createQuery(Long.class);
        cqCount.select(cb.count(cqCount.from(query.getResultType())));
        cqCount.where(query.getRestriction());
        long count =  entityManager.createQuery(cqCount).getSingleResult();
        //long count = 4;

        return new PageImpl<Book>(booksPage,page,count);
    }

    private List<Predicate> getFilterPredicates(CriteriaBuilder cb, Root<Book> book, Long book_id, String year, String title){
        List<Predicate> predicates = new ArrayList<>();
        if(book_id != null)
            predicates.add(cb.equal(book.get("book_id"), book_id));
        if(year != null)
            predicates.add(cb.like(book.get("original_publication_year"), (year == null)?"":"%"+year+"%"));
        if(title != null)
            predicates.add(cb.like(book.get("title"), (title == null)?"%%":"%"+title+"%"));
        return predicates;
    }

}
