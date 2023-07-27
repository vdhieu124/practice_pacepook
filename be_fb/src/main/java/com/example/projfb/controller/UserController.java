package com.example.projfb.controller;

import com.example.projfb.models.User;
import com.example.projfb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable Long userId) {
        return userService.findById(userId);
    }

    @PostMapping("")
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }

//    @PutMapping("/{userId}")
//    public User updateUserById(@PathVariable Long userId, @RequestBody User user) {
//        return userService.
//    }

    @DeleteMapping("/{userId}")
    public void deleteUserById(@PathVariable Long userId) {
         userService.deleteById(userId);
    }
}
