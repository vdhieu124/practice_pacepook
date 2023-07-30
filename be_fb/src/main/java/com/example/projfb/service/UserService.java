package com.example.projfb.service;

import com.example.projfb.models.User;
import com.example.projfb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long userId) {
        Optional<User> optional = userRepository.findById(userId);
        User user = null;
        if (optional.isPresent()){
            user = optional.get();
        } else {
            throw new RuntimeException("Not found userId = "+userId);
        }
        return user;
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public void deleteById(Long userId) {
        userRepository.deleteById(userId);
    }
    public Optional<User> findByUsernameAndPassword(String username, String password){
        return userRepository.findByUsernameAndPassword(username,password);
    }
}
