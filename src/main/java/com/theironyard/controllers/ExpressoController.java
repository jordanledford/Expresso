package com.theironyard.controllers;

import com.theironyard.entities.Shop;
import com.theironyard.entities.User;
import com.theironyard.services.LikeRepo;
import com.theironyard.services.ShopRepo;
import com.theironyard.services.UserRepo;
import org.apache.catalina.valves.rewrite.RewriteCond;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by rdw1995 on 11/10/16.
 */

@RestController
public class ExpressoController {
    @Autowired
    ShopRepo shops;

    @Autowired
    UserRepo users;

    @Autowired
    LikeRepo likes;

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public ArrayList<Shop> home(Model model, Shop shop, HttpSession session, String search){
        String name = (String) session.getAttribute("username");
        User user = (User) users.findByName(name);

        ArrayList<Shop> shopList;

        if (search != null){
            shopList = (ArrayList<Shop>) shops.findByNameContainingIgnoreCaseOrLocationOrHoursContainingIgnoreCase(search, search, search);
        }
        else {
            shopList = (ArrayList<Shop>) shops.findAll();
        }

        model.addAttribute("username",user);
        model.addAttribute("shops", shopList);
        return shopList;
    }

    @RequestMapping(path = "/shops", method = RequestMethod.POST)
    public Shop addShop (HttpSession session, @RequestBody Shop shop) throws Exception {
        String name = (String) session.getAttribute("username");
        User user = (User) users.findByName(name);
        if (user == null) {
            throw new Exception("Not logged in.");
        }
        shops.save(shop);
        return shop;
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public User addUser(HttpSession session, @RequestBody User user) throws Exception {
        User userFromDb = (User) users.findByName(user.getName());
        if (userFromDb == null) {
            users.save(user);
        }
        else if (!user.getPassword().equals(userFromDb.getPassword())){
            throw new Exception("Incorrect password - please try again!");
        }
        session.setAttribute("name", user.getName());
        return user;
    }


    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public String logout(HttpSession session){
        session.invalidate();
        return "BYE BTICH! SEE YOU OVER THE WALL! #SALTY";
    }
}
