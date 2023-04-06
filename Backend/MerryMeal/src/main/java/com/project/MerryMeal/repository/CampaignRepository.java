package com.project.MerryMeal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.MerryMeal.entity.Campaign;


@Repository
public interface CampaignRepository extends JpaRepository<Campaign, Long>{

	public List<Campaign> findByStatusTrue();
	
	public List<Campaign> findByStatusFalse();
}
