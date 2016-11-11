package com.theironyard.entities;

import org.springframework.stereotype.Controller;

import javax.persistence.*;

/**
 * Created by rdw1995 on 11/10/16.
 */
@Entity
@Table(name = "shops")

public class Shop {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String name;

    @Column(nullable = false)
    String location;

    @Column(nullable = false)
    String hours;

    @Column(nullable = false)
    String website;

    @Column(nullable = false)
    String image;

    @Column(nullable = false)
    String info;

    public Shop() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getHours() {
        return hours;
    }

    public void setHours(String hours) {
        this.hours = hours;
    }

    public String getWebsite() {
        return website;
    }

    public String getImage() {
        return image;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public Shop(int id, String name, String location, String hours, String website, String image, String info) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.hours = hours;
        this.website = website;
        this.image = image;
        this.info = info;
    }

    public Shop(String name, String location, String hours, String website, String image, String info) {
        this.name = name;
        this.location = location;
        this.hours = hours;
        this.website = website;
        this.image = image;
        this.info = info;
    }
}


