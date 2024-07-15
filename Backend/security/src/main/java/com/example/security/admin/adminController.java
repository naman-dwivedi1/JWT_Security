package com.example.security.admin;

import com.example.security.user.User;
import com.example.security.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
public class adminController {

    @Autowired
    private UserRepository userRepository;

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/api/admin/delete")
    public ResponseEntity<?> delete(@RequestParam Integer id)
    {
        User user=userRepository.findById(id).get();
        userRepository.delete(user);
        return ResponseEntity.ok(user);
    }
}
