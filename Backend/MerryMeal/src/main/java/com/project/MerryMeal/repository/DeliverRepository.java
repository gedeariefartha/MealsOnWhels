package com.project.MerryMeal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.MerryMeal.entity.Campaign;
import com.project.MerryMeal.entity.Deliver;
import com.project.MerryMeal.entity.Menu;
import com.project.MerryMeal.entity.Store;


@Repository
public interface DeliverRepository extends JpaRepository<Deliver, Long>{

	@Query(value = "SELECT * FROM deliver_tb WHERE delivered = 0 AND member_id = :id", nativeQuery = true)
	public List<Deliver> findByDeliveredFalse(@Param("id") Long meid);
	@Query(value = "SELECT * FROM deliver_tb WHERE delivered = 0 AND rider_id = :id", nativeQuery = true)
	public List<Deliver> findByRider(@Param("id") Long meid);
}
