package com.selman.quizapp.Service;

import com.selman.quizapp.Entity.Role;
import com.selman.quizapp.Entity.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public User getUserByUsername(String username){
        User user = new User();
        user.setUsername(username);
        user.setPassword("{noop}password");
        user.setEnabled(true);
        return user;
    }

    public Role getRoleByName(String name) {
        Role role = new Role();
        role.setName(name);
        return role;
    }

}
