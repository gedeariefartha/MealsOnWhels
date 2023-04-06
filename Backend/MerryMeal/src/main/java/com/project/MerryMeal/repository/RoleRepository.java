package com.project.MerryMeal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.MerryMeal.entity.Campaign;
import com.project.MerryMeal.entity.Deliver;
import com.project.MerryMeal.entity.Role;
import com.project.MerryMeal.entity.Store;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{


}
