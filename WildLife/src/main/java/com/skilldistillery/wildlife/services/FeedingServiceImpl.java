package com.skilldistillery.wildlife.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.wildlife.entities.Feeding;
import com.skilldistillery.wildlife.repositories.FeedingRepository;

@Service
public class FeedingServiceImpl implements FeedingService {

	@Autowired
	private FeedingRepository feedingRepo;

	@Override
	public List<Feeding> getAllFeedingsForAnimal(int id) {
		return feedingRepo.findByAnimal_Id(id);
	}
	
	@Override
	public List<Feeding> getFeedingsForAnimalInDateRange(int id, LocalDateTime start, LocalDateTime end){
		
		return feedingRepo.findByAnimal_IdAndWhenFedBetween(id, start, end);
	}
}
