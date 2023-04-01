package com.skilldistillery.wildlife.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class SpeciesTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Species species;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf=Persistence.createEntityManagerFactory("JPAWildLife");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		species = em.find(Species.class, 37);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		species=null;
	}

	@Test
	void test_Species_mapping() {
		assertNotNull(species);
		assertEquals("Great Horned Owl",species.getName());
	}
	
	@Test
	void test_Species_Animal_mapping() {
		assertNotNull(species);
		assertEquals("Crunchy",species.getAnimals().get(0).getNickname());
	}

}
