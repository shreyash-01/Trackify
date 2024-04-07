package com.example.backend.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Products")
public class Product {
    @Id
    private String ID;
    private String name;
    private String URL;
    private String imageurl;
    private String website;
    private String time;
    private int price;


    public Product(String ID, String name, String URL, String imageurl, String website, String time, int price) {
        this.ID = ID;
        this.name = name;
        this.URL = URL;
        this.imageurl = imageurl;
        this.website = website;
        this.time = time;
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

    public String getimageurl() {
        return imageurl;
    }

    public void setimageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String gettime() {
        return time;
    }

    public void settime(String time) {
        this.time = time;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    @Override
    public String toString() {
        return "Product{" +
                "ID=" + ID +
                ", name='" + name + '\'' +
                ", URL='" + URL + '\'' +
                ", imageurl='" + imageurl + '\'' +
                ", website='" + website + '\'' +
                ", time=" + time +
                ", price=" + price +
                '}';
    }
}
