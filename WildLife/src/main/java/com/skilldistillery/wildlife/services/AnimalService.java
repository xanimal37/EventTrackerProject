package com.skilldistillery.wildlife.services;

import java.util.List;

import com.skilldistillery.wildlife.entities.Animal;

public interface AnimalService {
	
	List<Animal> findAllAnimals();
	
	Animal getAnimalById(int id);
	
	Animal createAnimal(Animal animal);
	
	Animal updateAnimal(int id, Animal animal);
	
	boolean deleteAnimalById(int id);

}
