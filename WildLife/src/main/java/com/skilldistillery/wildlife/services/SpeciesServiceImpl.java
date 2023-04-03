package com.skilldistillery.wildlife.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.wildlife.entities.Animal;
import com.skilldistillery.wildlife.entities.Species;
import com.skilldistillery.wildlife.repositories.SpeciesRepository;

@Service
public class SpeciesServiceImpl implements SpeciesService{

	@Autowired
	private SpeciesRepository speciesRepo;
	
	@Override
	public List<Species> allSpecies() {
		return speciesRepo.findAll();
	}

	@Override
	public Species findById(int id) {
		return speciesRepo.findById(id);
	}

}
