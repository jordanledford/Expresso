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
        return "redirect:/";
    }

}
