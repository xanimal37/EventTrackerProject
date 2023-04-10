package com.skilldistillery.wildlife.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
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

	// no arg constructor!
	public Animal() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nickname;
	private String tag;
	@Column(name = "blood_lead")
	private Double bloodLead;
	private String note;
	private String reason;

	@CreationTimestamp
	private LocalDateTime arrived;

	private LocalDateTime released;
	// relationships
	@ManyToOne
	@JoinColumn(name = "species_id")
	private Species species;
	@OneToMany(mappedBy = "animal")
	@JsonIgnore
	private List<Feeding> feedings;

	public List<Feeding> getFeedings() {
		return feedings;
	}

	public void setFeedings(List<Feeding> feedings) {
		this.feedings = feedings;
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

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	public Double getBloodLead() {
		return bloodLead;
	}

	public void setBloodLead(Double bloodLead) {
		this.bloodLead = bloodLead;
	}

	

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public LocalDateTime getArrived() {
		return arrived;
	}

	public void setArrived(LocalDateTime arrived) {
		this.arrived = arrived;
	}

	public LocalDateTime getReleased() {
		return released;
	}

	public void setReleased(LocalDateTime released) {
		this.released = released;
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
