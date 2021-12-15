package com.ajsa.store.manager.service;

import com.ajsa.store.manager.models.Book;
import com.ajsa.store.manager.repository.BookRepository;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class UploadService {

    @Autowired
    private BookRepository bookRepository;

    private CsvMapper csvMapper = new CsvMapper();
    private ObjectMapper mapper = new ObjectMapper();

    public ResponseEntity uploadBooks(MultipartFile file) {
        try (Reader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            // create csv bean reader
            CsvSchema schema = CsvSchema.emptySchema().withHeader();
            MappingIterator<Map<String,String>> it = csvMapper.readerFor(Map.class)
                    .with(schema)
                    .readValues(file.getInputStream());

            List<Book> books = new ArrayList<>();
            while (it.hasNext()) {
                Map<String,String> rowAsMap = it.next();
                books.add(mapper.convertValue(rowAsMap,Book.class));
            }
            bookRepository.saveAll(books);
            return ResponseEntity.status(HttpStatus.OK.value()).body("All books uploaded to DB");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .body(ex.getMessage());
        }
    }
}
