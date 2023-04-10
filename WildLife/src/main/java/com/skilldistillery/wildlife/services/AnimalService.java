package com.skilldistillery.wildlife.services;

import java.util.List;

import com.skilldistillery.wildlife.entities.Animal;
import com.skilldistillery.wildlife.entities.Species;

public interface AnimalService {
	
	List<Animal> findAllAnimals();
	
	Animal getAnimalById(int id);
	
	Animal createAnimal(Animal animal, int id);
	
	Animal updateAnimal(int id, Animal animal);
	
	boolean deleteAnimalById(int id);

	List<Animal> findByNickname(String nName);
	
	List<Animal> getAllAnimalsOfSpecies(Species s);
	
	List<Animal> getRecentArrivals();

	List<Animal> getRecentReleases();
}
