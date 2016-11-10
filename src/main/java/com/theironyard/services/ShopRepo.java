package com.theironyard.services;

import com.theironyard.entities.Shop;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by rdw1995 on 11/10/16.
 */
public interface ShopRepo extends CrudRepository <Shop, Integer> {
    List<Shop> findByNameOrLocationOrHours (String name, String location, String hours);
}
