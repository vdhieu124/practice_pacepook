package com.example.projfb.repository;

import com.example.projfb.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT * FROM users ORDER BY RAND() LIMIT 1", nativeQuery = true)
    User findRandomUser();
    Optional<User> findByUsernameAndPassword(String username, String password);
}
