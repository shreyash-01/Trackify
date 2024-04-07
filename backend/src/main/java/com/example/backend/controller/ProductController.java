package com.example.backend.controller;

import com.example.backend.model.Data;
import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public List<Product> getProductsController(){
        return productService.getProducts();
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductByIDController(@PathVariable String id){
        Product product = productService.getProductByID(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PutMapping("/products/")
    public ResponseEntity<Product> updateProductController(@RequestBody Product product){
        productService.updateProduct(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping("/products")
    public ResponseEntity<Product> createProductController(@RequestBody Data data){
        Product product = productService.createProduct(data);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Product> deleteProductController(@PathVariable String id){
        Product product = productService.deleteProduct(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

}
