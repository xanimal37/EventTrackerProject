package com.skilldistillery.wildlife.services;

import java.util.List;

import com.skilldistillery.wildlife.entities.Feeding;

public interface FeedingService {

	List<Feeding> getAllFeedingsForAnimal(int id);
}
