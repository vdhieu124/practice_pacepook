package com.example.projfb.service;

import com.example.projfb.models.Post;
import com.example.projfb.models.User;
import com.example.projfb.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> findAll() {
        return postRepository.findAll();
    }

    public Post findById(Long postId) {
        Optional<Post> optional = postRepository.findById(postId);
        Post post = null;
        if (optional.isPresent()){
            post = optional.get();
        } else {
            throw new RuntimeException("Not found userId = "+postId);
        }
        return post;
    }

    public Post save(Post post) {
        return postRepository.save(post);
    }

    public void deleteById(Long postId) {
        postRepository.deleteById(postId);
    }
}
