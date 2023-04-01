package com.skilldistillery.wildlife.entities;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

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
	@OneToOne
    @JoinColumn(name="species_id")
	private Species species;
	
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
