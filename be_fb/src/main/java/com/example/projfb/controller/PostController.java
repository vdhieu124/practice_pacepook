package com.example.projfb.controller;

import com.example.projfb.models.Post;
import com.example.projfb.models.User;
import com.example.projfb.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping("")
    public List<Post> getAllPosts() {
        return postService.findAll();
    }

    @GetMapping("/{postId}")
    public Post getPostById(@PathVariable Long postId) {
        return postService.findById(postId);
    }

    @PostMapping("")
    public Post createPost(@RequestBody Post post) {
        return postService.save(post);
    }

//    @PutMapping("/{postId}")
//    public ResponseEntity<Post> updatePostById(@PathVariable Long postId, @RequestBody Post post) {
//        Optional<Post> existingPost = postService.findById(postId);
//        if (existingPost.isPresent()) {
//            post.setPostId(postId);
//            return ResponseEntity.ok(postService.save(post));
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }


    @DeleteMapping("/{postId}")
    public void deletePostById(@PathVariable Long postId) {
        postService.deleteById(postId);
    }
}
