package com.skilldistillery.wildlife.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.wildlife.entities.Species;

public interface SpeciesRepository extends JpaRepository<Species, Integer>{

}
