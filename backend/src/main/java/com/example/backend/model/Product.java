package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collation = "products")
public class Product {
    @Id
    private int ID;
    private String name;
    private String URL;
    private String imageURL;
    private String website;
    private LocalDateTime dateTime;
    private int price;


    public Product(int ID, String name, String URL, String imageURL, String website, LocalDateTime dateTime, int price) {
        this.ID = ID;
        this.name = name;
        this.URL = URL;
        this.imageURL = imageURL;
        this.website = website;
        this.dateTime = dateTime;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    @Override
    public String toString() {
        return "Product{" +
                "ID=" + ID +
                ", name='" + name + '\'' +
                ", URL='" + URL + '\'' +
                ", imageURL='" + imageURL + '\'' +
                ", website='" + website + '\'' +
                ", dateTime=" + dateTime +
                ", price=" + price +
                '}';
    }
}
