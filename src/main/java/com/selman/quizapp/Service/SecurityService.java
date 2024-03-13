package com.selman.quizapp.Service;

import com.selman.quizapp.Entity.User;
import com.selman.quizapp.Entity.UserPrincipal;
import com.selman.quizapp.Repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class SecurityService implements UserDetailsService {

    private final UserRepository userRepository;
    private final UserService userService;

    public SecurityService(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("This user does not exist"));
        return new UserPrincipal(user);
    }


}
