package com.skilldistillery.wildlife.services;

import java.time.LocalDateTime;
import java.util.List;

import com.skilldistillery.wildlife.entities.Feeding;

public interface FeedingService {

	List<Feeding> getAllFeedingsForAnimal(int id);
	
	List<Feeding> getFeedingsForAnimalInDateRange(int id, LocalDateTime start, LocalDateTime end);
}
