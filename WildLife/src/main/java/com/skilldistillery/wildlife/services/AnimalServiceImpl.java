package com.skilldistillery.wildlife.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.wildlife.entities.Animal;
import com.skilldistillery.wildlife.entities.Species;
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
		Animal original = animalRepo.findById(id);
		if(original!=null && animal!=null) {
			original.setNickname(animal.getNickname());
			//this method will see the id and know to update
			return animalRepo.saveAndFlush(original);
		}
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
	
	@Override
	public List<Animal> findByNickname(String nName){
		
		if(nName!=null) {
			String search = "%"+nName+"%";
			return animalRepo.findByNicknameLike(search);
		}
		return null;
	}

	@Override
	public List<Animal> getAllAnimalsOfSpecies(Species s) {
		return animalRepo.findBySpecies(s);
	}
	
}
