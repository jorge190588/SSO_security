package com.example.springsocial.repository;

import com.example.springsocial.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>, 
										PagingAndSortingRepository<User, Integer>, 
										JpaSpecificationExecutor<User>, JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);
    User findById(Long id);
    Boolean existsByEmail(String email);

}
