package com.example.backend.model;

public class Data {
    private String url;
    private String website;

    public Data(String url, String website) {
        this.url = url;
        this.website = website;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}
