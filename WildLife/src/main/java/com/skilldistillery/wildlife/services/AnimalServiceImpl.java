package com.skilldistillery.wildlife.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.wildlife.entities.Animal;
import com.skilldistillery.wildlife.repositories.AnimalRepository;

@Service
public class AnimalServiceImpl implements AnimalService {

	@Autowired
	private AnimalRepository animalRepo;

	@Override
	public List<Animal> findAllAnimals() {
		return animalRepo.findAll();
	}

	@Override
	public Animal getAnimalById(int id) {
		return animalRepo.findById(id);
	}

	@Override
	public Animal createAnimal(Animal animal) {
		return animalRepo.saveAndFlush(animal);
	}

	@Override
	public Animal updateAnimal(int id, Animal animal) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteAnimalById(int id) {
		boolean wasDeleted = false;
		Animal animal = animalRepo.findById(id);
		if(animal!=null) {
			animalRepo.delete(animal);
			wasDeleted = true;
		}
		return wasDeleted;
	}

	
}
