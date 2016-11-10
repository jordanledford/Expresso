package com.theironyard.services;

import com.theironyard.entities.Like;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by rdw1995 on 11/10/16.
 */
public interface LikeRepo extends CrudRepository <Like, Integer> {

}
