package com.example.projfb.util;

import com.example.projfb.models.Post;
import com.example.projfb.models.User;
import com.example.projfb.repository.UserRepository;
import com.github.javafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class UserFaker implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        Faker faker = new Faker();

        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusYears(5);
        java.util.Date date = faker.date().between(
                java.sql.Date.valueOf(startDate),
                java.sql.Date.valueOf(endDate)
        );
        Timestamp createdAt = new Timestamp(date.getTime());

        for (int i = 0; i < 10; i++) {
            User user = new User();
            user.setUsername(faker.name().username());
            user.setEmail(faker.internet().emailAddress());
            user.setPassword(faker.internet().password());
            user.setBio(faker.lorem().sentence());
            user.setCreatedAt(createdAt);
            user.setUpdatedAt(createdAt);

            List<Post> posts = new ArrayList<>();
            for (int j = 0; j < 5; j++) {
                Post post = new Post();
                post.setContent(faker.lorem().paragraph());
                post.setPostImage(faker.internet().image());
                post.setCreatedAt(createdAt);
                post.setUpdatedAt(createdAt);
                post.setUser(user);
                posts.add(post);
            }

            user.setPosts(posts);

            userRepository.save(user);
        }
    }
}

