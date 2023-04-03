package com.skilldistillery.wildlife.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.wildlife.entities.Feeding;

public interface FeedingRepository extends JpaRepository<Feeding, Integer> {
	
	List<Feeding> findByAnimal_Id(int id);
	
	List<Feeding> findByAnimal_IdAndWhenFedBetween(int id, LocalDateTime start, LocalDateTime end);

}
