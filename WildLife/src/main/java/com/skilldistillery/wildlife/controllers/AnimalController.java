package com.skilldistillery.wildlife.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wildlife.entities.Animal;
import com.skilldistillery.wildlife.services.AnimalService;

@RestController
@RequestMapping("api")
public class AnimalController {

	@Autowired
	private AnimalService animalService;

	@GetMapping(path = "animals")
	List<Animal> getAnimals() {
		return animalService.findAllAnimals();
	}

	@GetMapping(path = "animals/{id}")
	Animal getAnimalById(@PathVariable int id, HttpServletResponse res) {
		Animal animal = animalService.getAnimalById(id);
		if (animal == null) {
			res.setStatus(400);
		}
		return animal;
	}

	// add animal
	// use servlet request to find where they came from
	@PostMapping(path = "animals")
	Animal putAnimal(@RequestBody Animal animal, HttpServletRequest req, HttpServletResponse res) {
		try {
			animal = animalService.createAnimal(animal);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL(); // define as stringbuffer
			url.append("/").append(animal.getId()); // append id to url so will show user the post url
			res.setHeader("Location", url.toString()); // location
		}

		catch (Exception e) {
			e.printStackTrace();
			res.setStatus(404);
			animal = null;
		}
		return animal;
	}

	// delete post
	// returns empty response body
	@DeleteMapping(path = "animals/{id}")
	void deleteAnimal(@PathVariable int id, HttpServletResponse res) {
		try {
			if (animalService.deleteAnimalById(id)) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
	}
	
	// update animal
	@PutMapping(path = "animals/{id}")
	public Animal update(@PathVariable int id, @RequestBody Animal animal, HttpServletResponse res) {

			try {
				animal = animalService.updateAnimal(id, animal);
				if (animal == null) {
					res.setStatus(404);
				}
			} catch (Exception e) {
				e.printStackTrace();
				res.setStatus(400);
				animal = null;
			}
			return animal;
	}
	
	@GetMapping(path="animals/search/{nName}")
	public List<Animal> nicknameSearch(@PathVariable String nName){
		return animalService.findByNickname(nName);
	}
}
