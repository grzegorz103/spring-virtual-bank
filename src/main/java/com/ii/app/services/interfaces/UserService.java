package com.ii.app.services.interfaces;

import com.ii.app.dto.in.UserIn;
import com.ii.app.dto.out.UserOut;
import com.ii.app.models.user.JwtToken;
import com.ii.app.models.user.UserRole;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    UserOut create(UserIn userIn);

    UserOut getByUsername(String username);

    List<UserOut> findAllByUserType(UserRole.UserType userType);
}
