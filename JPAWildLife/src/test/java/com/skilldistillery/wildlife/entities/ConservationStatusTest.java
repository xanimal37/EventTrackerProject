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

class ConservationStatusTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private ConservationStatus conservationStatus;

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
		conservationStatus = em.find(ConservationStatus.class, 5);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		conservationStatus=null;
	}

	@Test
	void test_ConservationStatus_mapping() {
		assertNotNull(conservationStatus);
		assertEquals("ENDANGERED",conservationStatus.getStatus());
	}

}
