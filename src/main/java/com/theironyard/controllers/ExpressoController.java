package com.theironyard.controllers;

import com.theironyard.entities.Shop;
import com.theironyard.services.LikeRepo;
import com.theironyard.services.ShopRepo;
import com.theironyard.services.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;

/**
 * Created by rdw1995 on 11/10/16.
 */

@Controller
public class ExpressoController {
    @Autowired
    ShopRepo shops;

    @Autowired
    UserRepo users;

    @Autowired
    LikeRepo likes;

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String home(Model model, Shop shop, HttpSession session, String search){

    }

}
