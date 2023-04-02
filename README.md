# EventTrackerProject

## Description
This project is the backend of an app that tracks animals handled wildlife rehabilitation facility. Each animal references a species with associated conservation status (there are endangered and vulnerable species in the upper midwest!) The tracked events currently include:

- when the animal enters the facility
- when the animal leaves the facility (or terminates their rehab)
- when the animal is fed, including who did the feeding and any notes
- more tbd...

This app lacks a front end and all results are formatted as JSON.

## Entities
- Animal (CREATE, UPDATE, DELETE, GET BY ID, GET ALL, SEARCH BY NICKNAME)
- Feeding (GET ALL BY ANIMAL ID)
- Species (GET ALL)

### Dictionary
- Conservation Status

### Events
- animal arrives
- animal leaves
- animal is fed

## Technologies Used
- JAVA
- Spring Boot
- Spring Data
- REST API
- JSON
- Gradle
- git

## Lessons Learned
- start with simple db, classes and methods and build
- RESTART SPRING BOOT AFTER CHANGES

## Things to Improve
- add enclosure and track cleaning/maintenance
- add medical care tracking table
- front end...
