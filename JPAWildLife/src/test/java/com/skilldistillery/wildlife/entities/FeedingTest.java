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

public class FeedingTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Feeding feeding;

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
		feeding = em.find(Feeding.class, 2);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		feeding=null;
	}

	@Test
	void test_Feeding_mapping() {
		assertNotNull(feeding);
		assertEquals("JGK",feeding.getEmployee());
	}
	
	@Test
	void test_Feeding_Animal_mapping() {
		assertNotNull(feeding);
		assertEquals("Crunchy",feeding.getAnimal().getNickname());
	}

}
