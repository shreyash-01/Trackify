package com.example.backend.controller;

import com.example.backend.model.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @GetMapping("/products")
    public List<Product> getAllProductsController(){
        return null;
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductByIDController(@PathVariable String id){
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping("/products/")
    public ResponseEntity<Product> updateProductController(@RequestBody Product product){
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PostMapping("/products")
    public ResponseEntity<Product> createProductController(@RequestBody Product product){
        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }

    @DeleteMapping("/products/{id}")
    public HttpStatus deleteProductController(@PathVariable String id){
        return HttpStatus.OK;
    }

}
