package com.example.security.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class userController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/api/read")
    public ResponseEntity<Iterable<User>> read()
    {
        return ResponseEntity.ok(userRepository.findAll());
    }
}
