package com.ajsa.store.manager.controller.api.v1;

import com.ajsa.store.manager.models.Book;
import com.ajsa.store.manager.repository.BookRepository;
import com.ajsa.store.manager.repository.UploadService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/v1")
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UploadService uploadService;

    private ObjectMapper mapper = new ObjectMapper();

    @GetMapping(value = "/books", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllBooks(@RequestParam @DefaultValue("0") int start,
                                      @RequestParam @DefaultValue("10") int size,
                                      @RequestParam(required = false) Long book_id,
                                      @RequestParam(required = false) String title,
                                      @RequestParam(required = false) String year) throws JsonProcessingException {
        try{
            Pageable page = PageRequest.of(start,size);
            return ResponseEntity.status(HttpStatus.OK.value()).body(bookRepository.getFilteredBooks(page,book_id,title,year));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value()).body(e.getMessage());
        }
    }

    @PostMapping(
            value = {"/books"},
            produces = {"application/json"},
            consumes = {"multipart/form-data"}
    )
    public ResponseEntity uploadBooks(@RequestParam("file") MultipartFile file) {
        try{
           return uploadService.uploadBooks(file);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value()).body(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
        }
    }

    @PostMapping(
            value = {"/book"},
            produces = {"application/json"},
            consumes = {"application/json"}
    )
    public ResponseEntity addBook(@RequestBody Book book) {
        try{
            bookRepository.save(book);
            return ResponseEntity.status(HttpStatus.CREATED.value()).body(HttpStatus.CREATED.getReasonPhrase());
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value()).body(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
        }
    }

}
