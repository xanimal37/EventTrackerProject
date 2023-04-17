package com.skilldistillery.wildlife.controllers;

import java.time.LocalDateTime;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wildlife.entities.Feeding;
import com.skilldistillery.wildlife.services.FeedingService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4202"})
public class FeedingController {
	
	@Autowired
	private FeedingService feedingService;
	
	@GetMapping(path="animals/{id}/feedings")
	public List<Feeding> getFeedingsForAnimal(@PathVariable int id) {
		return feedingService.getAllFeedingsForAnimal(id);
	}
	
	@GetMapping(path="animals/{id}/feedings/{date1}/{date2}")
	public List<Feeding> getAnimalFeedingsInDateRange(
			@PathVariable int id,
			@PathVariable(value = "date1") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") LocalDateTime date1,
			@PathVariable(value = "date2") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") LocalDateTime date2,
			HttpServletResponse res){
		if(date1==null || date2==null) {
			res.setStatus(400);
		}
		return feedingService.getFeedingsForAnimalInDateRange(id, date1, date2);
	}
}
