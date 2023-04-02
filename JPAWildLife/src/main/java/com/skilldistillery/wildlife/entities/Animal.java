package com.skilldistillery.wildlife.entities;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Animal {
	
	//no arg constructor!
	public Animal() {}
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String nickname;
	private String note;
	@CreationTimestamp
	@Column(name="stay_began")
	private LocalDate stayBegan;
	@Column(name="stay_ended")
	private LocalDate stayEnded;
	//relationships
	@ManyToOne
    @JoinColumn(name="species_id")
	private Species species;
	@OneToMany(mappedBy="animal")
	@JsonIgnore
	private List<Feeding> feedings;
	
	public List<Feeding> getFeedings() {
		return feedings;
	}

	public void setFeedings(List<Feeding> feedings) {
		this.feedings = feedings;
	}

	public LocalDate getStayBegan() {
		return stayBegan;
	}

	public void setStayBegan(LocalDate stayBegan) {
		this.stayBegan = stayBegan;
	}

	public LocalDate getStayEnded() {
		return stayEnded;
	}

	public void setStayEnded(LocalDate stayEnded) {
		this.stayEnded = stayEnded;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	

	public Species getSpecies() {
		return species;
	}

	public void setSpecies(Species species) {
		this.species = species;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Animal other = (Animal) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Animal [id=" + id + ", nickname=" + nickname + "]";
	}
	
}
