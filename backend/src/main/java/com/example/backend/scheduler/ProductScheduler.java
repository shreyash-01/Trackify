package com.example.backend.scheduler;

import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;
import com.example.backend.service.ProductService;
import com.example.backend.webclient.ProductWebClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Component
@EnableScheduling
public class ProductScheduler {

    private ProductService productService;
    private ProductWebClient productWebClient;
    private ProductRepository productRepository;

    @Autowired
    public ProductScheduler(ProductService productService, ProductWebClient productWebClient, ProductRepository productRepository) {
        this.productService = productService;
        this.productWebClient = productWebClient;
        this.productRepository = productRepository;
    }

    @Scheduled(fixedRate = 1000000)    // 1 sec = 1000
    public void scheduledTask(){
        try {
            List<Product> products = productService.getProducts();
            for(Product p : products){
                System.out.println();
                System.out.print("Checking for "+p.getName());

                // getting the current time
                ZonedDateTime nowInIndia = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
                String formattedNow = nowInIndia.format(formatter);

                p.settime(formattedNow);

                int newPrice = productWebClient.checkPriceScrape(p.getURL(), p.getWebsite()).getPrice();
                if(newPrice!=p.getPrice()){
                    System.out.print(" : Price Changed !!!!!!!!!");
                    productService.sendEmailIfDecreased(p, p.getPrice(), newPrice);
                } else {
                    System.out.print(" : Price same");
                }
                productRepository.save(p);

            }
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }

    }
}
