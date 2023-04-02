package com.skilldistillery.wildlife.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.wildlife.entities.Feeding;

public interface FeedingRepository extends JpaRepository<Feeding, Integer> {
	
	List<Feeding> findByAnimal_Id(int id);

}
