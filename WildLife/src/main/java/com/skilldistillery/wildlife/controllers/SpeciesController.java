package com.skilldistillery.wildlife.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wildlife.entities.Species;
import com.skilldistillery.wildlife.services.SpeciesService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost/"})
public class SpeciesController {
	
	@Autowired
	private SpeciesService speciesService;

	
	@GetMapping(path="species")
	public List<Species> getAllSpecies(){
		return speciesService.allSpecies();
	}
	
}
