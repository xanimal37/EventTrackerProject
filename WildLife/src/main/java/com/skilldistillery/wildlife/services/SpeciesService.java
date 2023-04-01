package com.skilldistillery.wildlife.services;

import java.util.List;

import com.skilldistillery.wildlife.entities.Animal;
import com.skilldistillery.wildlife.entities.Species;

public interface SpeciesService {

	List<Species> allSpecies();
	
	List<Animal> allAnimalsOfSpecies();
}
