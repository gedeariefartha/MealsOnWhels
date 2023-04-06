package com.project.MerryMeal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.MerryMeal.entity.Store;
import com.project.MerryMeal.entity.Volunteer;


@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long>{

	@Query(value = "SELECT * FROM volunteer_tb WHERE  email = :ema AND campaign_id = :cid", nativeQuery = true)
	public Volunteer findByEmailCampaign(@Param("ema") String email, @Param("cid") Long campaignid);
}
