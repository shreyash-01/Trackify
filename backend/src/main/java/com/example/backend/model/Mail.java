package com.example.backend.model;


public class Mail {
    private Product product;

    public Mail() {
    }

    public Mail(Product product) {
        this.product = product;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getSubject() {
        return "Price Drop Alert";
    }

    public String getBody() {
        return "Price Dropped for "+this.product.getName()+".\nNow only at Rs "+this.product.getPrice()+" To buy click on link - "+this.product.getURL();
    }
}
