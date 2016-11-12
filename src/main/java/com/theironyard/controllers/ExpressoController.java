package com.theironyard.controllers;

import com.sun.org.apache.regexp.internal.RE;
import com.theironyard.entities.Shop;
import com.theironyard.entities.User;
import com.theironyard.services.ShopRepo;
import com.theironyard.services.UserRepo;
import com.theironyard.utitilies.PasswordStorage;
import org.apache.catalina.valves.rewrite.RewriteCond;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
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

    Server h2;

    @PostConstruct
    public void init() throws SQLException, PasswordStorage.CannotPerformOperationException {
        h2 = Server.createWebServer().start();

        if (shops.count() == 0) {
            User user = new User("Bekah", PasswordStorage.createHash("TrumpTrain"));
            users.save(user);
            shops.save(new Shop("Starbucks Coffee", "King Street - Charleston, SC", "5am - 10pm", "https://www.starbucks.com/", "https://www.google.com/search?q=starbucks&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiVncPQjqTQAhVixlQKHcKjCIMQ_AUICigD&biw=1280&bih=703#imgrc=kK0DWhTQx81B6M%3A", "Seattle-based coffeehouse chain known for its signature roasts, light bites and WiFi availability.", 12));
            shops.save(new Shop("Collective Coffee Co", "Mt. Pleasant, SC", "7am - 5pm", "http://collective-coffee.com/", "https://static.squarespace.com/static/50f1db62e4b0ceb75bca6fdd/t/51044ad8e4b00bb1fb60cc11/1359235800677/Counter%20Collective%20Fix-3220%20bg.jpg", "A modern feel with quaint taste.", 7));
        }
    }

    @PreDestroy
    public void destroy() {
        h2.stop();
    }

    @RequestMapping(path = "/user", method = RequestMethod.POST)
    public ResponseEntity<User> addUser (HttpSession session, @RequestBody User user) throws PasswordStorage.CannotPerformOperationException, PasswordStorage.InvalidHashException {
        User userFromDb = users.findFirstByName(user.getName());
        if (userFromDb == null){
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())){
            return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
        }
        session.setAttribute("name", user.getName());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public User getUser (HttpSession session){
        String name = (String) session.getAttribute("name");
        return users.findFirstByName(name);
    }

    @RequestMapping(path = "/shop", method = RequestMethod.POST)
    public ResponseEntity<Shop> addShop (HttpSession session, @RequestBody Shop shop){
        String name = (String) session.getAttribute("name");
        if (name == null){
            return new ResponseEntity<Shop>(HttpStatus.FORBIDDEN);
        }
        shop.setUser(users.findFirstByName(name));
        return new ResponseEntity<Shop>(shops.save(shop), HttpStatus.OK);
    }

    @RequestMapping(path = "/edit-shop", method = RequestMethod.POST)
    public ResponseEntity<Shop> editShop (HttpSession session, @RequestBody Shop shop){
        String name = (String) session.getAttribute("name");
        if (name == null){
            return new ResponseEntity<Shop>(HttpStatus.FORBIDDEN);
        }
        if (!shops.findOne(shop.getId()).getUser().getName().equals(name)){
            return new ResponseEntity<Shop>(HttpStatus.FORBIDDEN);
        }
        shop.setUser(users.findFirstByName(name));
        return new ResponseEntity<Shop>(shops.save(shop), HttpStatus.OK);
    }

    @RequestMapping(path = "/delete-shop", method = RequestMethod.POST)
    public ResponseEntity<Shop> deleteShop (HttpSession session, @RequestBody Shop shop){
        String name = (String) session.getAttribute("name");
        if (name == null){
            return new ResponseEntity<Shop>(HttpStatus.FORBIDDEN);
        }
        if (!shops.findOne(shop.getId()).getUser().getName().equals(name)){
            return new ResponseEntity<Shop>(HttpStatus.FORBIDDEN);
        }
        shops.delete(shop.getId());
        return new ResponseEntity<Shop>(HttpStatus.OK);
    }

    @RequestMapping(path = "/like-shop", method = RequestMethod.POST)
    public ResponseEntity<Shop> likeShop (HttpSession session, @RequestBody HashMap like){
        String name = (String) session.getAttribute("name");
        if (name == null){
            return new ResponseEntity<Shop>(HttpStatus.FORBIDDEN);
        }

        Integer id = (Integer) like.get("shopId");
        Boolean likedShop = (Boolean) like.get("likedShop");
        if (id == null || likedShop == null){
            return new ResponseEntity<Shop>(HttpStatus.FORBIDDEN);
        }

        Shop shop = shops.findOne(id);
        shop.setLikes(shop.getLikes() + (likedShop ? 1 : -1));
        shops.save(shop);

        return new ResponseEntity<Shop>(shop, HttpStatus.OK);
    }

    @RequestMapping(path = "/shop", method = RequestMethod.GET)
    public List<Shop> getShops (HttpSession session) {
         return (List<Shop>) shops.findAll();
    }
}


