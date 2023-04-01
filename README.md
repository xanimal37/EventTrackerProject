# EventTrackerProject

## Description
This project is the backend of an app that tracks animals handled wildlife rehabilitation facility. Each animal references a species with associated conservation status (there are endangered and vulnerable species in the upper midwest!) Each animal also has an enclosure. The tracked events currently include:

- when the animal enters the facility
- when the animal leaves the facility (or terminates their rehab)
- when the animal is fed, including who did the feeding and any notes
- when the animal is medically treated (if they need it)
- when its enclosure has been cleaned
- more tbd...

## Entities
- Animal (CREATE, UPDATE, DELETE, GET BY ID, GET ALL, SEARCH BY NICKNAME)
- Enclosure
- Species (GET ALL)

### Dictionary
- Conservation Status

### Events
- Enclosure Maintenance
- Animal Treatment
- Animal Feeding

## Technologies Used
- JAVA
- Spring Boot
- Spring Data
- REST API
- Gradle
- git

## Lessons Learned
- start with simple db, classes and methods and build

## Things to Improve
