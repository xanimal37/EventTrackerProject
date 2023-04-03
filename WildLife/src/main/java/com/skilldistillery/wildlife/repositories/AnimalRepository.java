package com.skilldistillery.wildlife.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.wildlife.entities.Animal;
import com.skilldistillery.wildlife.entities.Species;

public interface AnimalRepository extends JpaRepository<Animal, Integer> {

	Animal findById(int id);
	
	List<Animal> findByNicknameLike(String nName);
	
	List<Animal> findBySpecies(Species s);
}
