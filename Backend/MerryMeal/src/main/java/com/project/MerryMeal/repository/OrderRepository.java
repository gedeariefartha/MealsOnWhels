package com.project.MerryMeal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.MerryMeal.entity.Campaign;
import com.project.MerryMeal.entity.Menu;
import com.project.MerryMeal.entity.Order;
import com.project.MerryMeal.entity.Store;


@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{

	@Query(value = "SELECT * FROM order_tb WHERE partner_id = :id and status = 0", nativeQuery = true)
	public List<Order> findByPartner(@Param("id") Long id);
	@Query(value = "SELECT * FROM order_tb WHERE status = 1", nativeQuery = true)
	public List<Order> findByStatusTrue();
}
