package com.example.backend.service;

import com.example.backend.model.Data;
import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;
import com.example.backend.webclient.ProductWebClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private ProductRepository productRepository;
    private ProductWebClient productWebClient;

    @Autowired
    public ProductService(ProductRepository productRepository, ProductWebClient productWebClient) {
        this.productRepository = productRepository;
        this.productWebClient = productWebClient;
    }

    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    public Product getProductByID(String id){
        return null;
    }

    public Product deleteProduct(String id){
        return null;
    }

    public Product createProduct(Data data){
        Product product = productWebClient.checkPriceScrape(data.getUrl(), data.getWebsite());
        return productRepository.save(product) ;
    }

    public void updateProduct(Product product){
        return ;
    }
}
