package com.skilldistillery.wildlife.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wildlife.entities.Species;
import com.skilldistillery.wildlife.services.SpeciesService;

@RestController
@RequestMapping("api")
public class SpeciesController {
	
	@Autowired
	private SpeciesService speciesService;
	
	@GetMapping(path="species")
	public List<Species> getAllSpecies(){
		return speciesService.allSpecies();
	}

}
