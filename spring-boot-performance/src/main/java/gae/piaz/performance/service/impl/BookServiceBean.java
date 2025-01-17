package gae.piaz.performance.service.impl;

import gae.piaz.performance.model.Book;
import gae.piaz.performance.repository.BookRepository;
import gae.piaz.performance.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Generated by Springboot-3layer-Generator at Jan 6, 2021, 8:30:41 PM
 */
@Service
public class BookServiceBean implements BookService {

    @Autowired
    private BookRepository repository;

    @Override
    public Book create(Book entity) {
        return repository.save(entity);
    }

    @Override
    public Book update(Book entity) {
        return repository.save(entity);
    }

    @Override
    public Page<Book> read(Book entity, Pageable pageable) {
        Example<Book> example = Example.of(entity);
        return repository.findAll(example, pageable);
    }

    @Override
    public Book readOne(Integer primaryKey) {
        return repository.getOne(primaryKey);
    }

    @Override
    public void delete(Integer primaryKey) {
        repository.deleteById(primaryKey);
    }

    @Override
    public List<Book> readAll() {
        return repository.findAll();
    }

    @Override
    public List<Book> readOne(String isbn) {
        return repository.findByIsbn(isbn.trim());
    }
}