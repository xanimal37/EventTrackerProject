package com.skilldistillery.wildlife.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.wildlife.entities.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Integer> {

	Animal findById(int id);
}
