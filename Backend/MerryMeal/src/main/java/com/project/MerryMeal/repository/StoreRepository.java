package com.project.MerryMeal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.MerryMeal.entity.Store;


@Repository
public interface StoreRepository extends JpaRepository<Store, Long>{

	
	@Query(value = "SELECT c FROM Store c WHERE c.name LIKE '%' || :keyword || '%'"
			+ " OR c.phone LIKE '%' || :keyword || '%'"
			+ " OR c.localities LIKE '%' || :keyword || '%'")
	public List<Store> search(@Param("keyword") String keyword);
	public Store findByPhone(String no);
}
