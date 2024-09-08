package com.example.backend.webclient;

import com.example.backend.model.Data;
import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ProductWebClient {

    private ProductRepository productRepository;
    private final RestTemplate restTemplate;


    @Autowired
    public ProductWebClient(ProductRepository productRepository) {
        restTemplate = new RestTemplate();
        this.productRepository = productRepository;
    }

    public Product checkPriceScrape(String url, String website){

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Data> request = new HttpEntity<>(new Data(url,website), headers);
        Product productResponse = restTemplate.postForObject("http://localhost:8083", request, Product.class);

        return productResponse;
    }

    public Product checkPriceDatabase(String id){
        return productRepository.findById(id).get();
    }

    public String sendEmailPriceDrop(Product product){
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Product> request = new HttpEntity<>(product, headers);
        String productResponse = restTemplate.postForObject("http://localhost:8081/mail", request, String.class);

        return productResponse;
    }
}
