package com.skilldistillery.wildlife.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class AnimalTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Animal animal;

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
		animal = em.find(Animal.class, 2);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		animal=null;
	}

	@Test
	void test_Animal_mapping() {
		assertNotNull(animal);
		assertEquals("Cutie Pie",animal.getNickname());
	}

}
