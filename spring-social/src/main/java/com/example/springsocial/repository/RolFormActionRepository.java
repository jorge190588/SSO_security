package com.example.springsocial.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.springsocial.model.RolFormAction;

@Repository
public interface RolFormActionRepository extends JpaRepository<RolFormAction, Long> {
    Optional<RolFormAction> findByRolAndFormAction(Long rol, Long formAction);
    Boolean existsByRolAndFormAction(Long rol, Long formAction);
}
