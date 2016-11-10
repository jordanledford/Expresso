package com.theironyard.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by rdw1995 on 11/10/16.
 */
@Entity
@Table(name = "likes")
public class Like {
    @Id
    @GeneratedValue
    int id;



}
