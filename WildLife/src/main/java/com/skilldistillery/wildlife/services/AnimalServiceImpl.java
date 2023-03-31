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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Animal updateAnimal(int id, Animal animal) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteAnimalById(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	
}
