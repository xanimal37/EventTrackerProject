package com.skilldistillery.wildlife.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wildlife.entities.Animal;
import com.skilldistillery.wildlife.services.AnimalService;

@RestController
@RequestMapping("api")
public class AnimalController {

	@Autowired
	private AnimalService animalService;
	
	@GetMapping(path="animals")
	List<Animal> getAnimals(){
		return animalService.findAllAnimals();
	}
	
	@GetMapping(path="animals/{id}")
	Animal getAnimalById(@PathVariable int id, HttpServletResponse res){
		Animal animal = animalService.getAnimalById(id);
		if (animal == null) {
			res.setStatus(400);
		} 
		return animal;
	}
}
