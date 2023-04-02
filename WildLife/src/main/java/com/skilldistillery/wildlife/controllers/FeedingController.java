package com.skilldistillery.wildlife.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wildlife.entities.Feeding;
import com.skilldistillery.wildlife.services.FeedingService;

@RestController
@RequestMapping("api")
public class FeedingController {
	
	@Autowired
	private FeedingService feedingService;
	
	@GetMapping(path="animals/{id}/feedings")
	public List<Feeding> getFeedingsForAnimal(@PathVariable int id) {
		return feedingService.getAllFeedingsForAnimal(id);
	}
}
