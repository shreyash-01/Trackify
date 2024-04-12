package com.example.backend.service;

import com.example.backend.model.Mail;
import com.example.backend.model.Data;
import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;
import com.example.backend.webclient.ProductWebClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private ProductRepository productRepository;
    private ProductWebClient productWebClient;
    private JavaMailSender javaMailSender;

    @Value("$(spring.mail.username)")
    private String from;

    @Autowired
    public ProductService(ProductRepository productRepository, ProductWebClient productWebClient, JavaMailSender javaMailSender) {
        this.productRepository = productRepository;
        this.productWebClient = productWebClient;
        this.javaMailSender = javaMailSender;
    }




    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    public Product getProductByID(String id){
        return productRepository.findById(id).get();
    }

    public void deleteProduct(String id){
        productRepository.deleteById(id);
    }

    public Product createProduct(Data data){
        Product product = productWebClient.checkPriceScrape(data.getUrl(), data.getWebsite());
        return productRepository.save(product) ;
    }

    public void updateProduct(Product product){
        sendEmailIfDecreased(product);
    }



    public Product sendEmailIfDecreased(Product product) {

        Product current = productWebClient.checkPriceScrape(product.getURL(), product.getWebsite());
        Product previous = product;

        // Send Email if price is Decreased
        if (previous.getPrice() > current.getPrice()) {
            System.out.println("PRice decreased");
            productWebClient.sendEmailPriceDrop(current);

            previous.setPrice(current.getPrice());
            previous.settime("aaxa");
            productRepository.save(previous);

            return current;
        }

        // Don't send email is price is same
        return previous;
    }

    public void sendMail(Mail mailStructure){
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom(from);
        simpleMailMessage.setSubject(mailStructure.getSubject());
        simpleMailMessage.setText(mailStructure.getBody());
        simpleMailMessage.setTo("singhshreyash0075@gmail.com");
        javaMailSender.send(simpleMailMessage);
    }
}
