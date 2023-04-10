# EventTrackerProject

## Description
This project is the backend of an app that tracks animals handled wildlife rehabilitation facility. Each animal references a species with associated conservation status (there are endangered and vulnerable species in the upper midwest!) The tracked events currently include:

- when the animal enters the facility
- when the animal leaves the facility (or terminates their rehab)
- what their blood lead level is when admitted (especially for birds but possibly other animals)
- more tbd...

This app lacks a front end and all results are formatted as JSON.

## Entities
- Animal (CREATE, UPDATE, DELETE, GET BY ID, GET ALL, SEARCH BY NICKNAME, GET ALL ANIMALS OF SPECIES)
-- three most recent arrivals
-- three most recent releases
- Feeding (GET ALL BY ANIMAL ID, GET BY ANIMAL ID AND DATE/TIME RANGE)
- Species (GET ALL)

## REST API
| HTTP Verb | URI                        | Request Body                           | Response Body                                           |
|-----------|----------------------------|----------------------------------------|---------------------------------------------------------|
| GET       | `/api/animals`             |                                        | Coll. of representations of all _animal_ resources      |
| GET       | `/api/animals/2`           |                                        | Rep.of _animal_ `2`                                     |
| POST      | `/api/species/23/animals`             | Rep. of a new _animal_ resource with _species_ `23`      |                                                         |
| PUT       | `/api/animals/2`           | Rep. of a new version of _animal_ `2`  |                                                         |
| DELETE    | `/api/animals/2`           |                                        |                                                         |
| GET       | `/api/species/100/animals` |                                        | Coll. of rep. of _animal_ of _species_ `100`           | 
| GET       | `api/animals/1/feedings`   |                                        | Coll. of rep. of _feeding_ for _animal_ `1`            | 
| GET       | `api/species/89`           |                                        | Rep. of _species_ `89` |
| GET       | `api/animals/search/p`     |                                        | Coll. of rep of _animal_ with nickname like `p`  |
| GET | `api/animals/1/feedings/2023-02-09 13:00:00/2023-02-11 12:00:00` |   | Coll. of rep of _feeding_ in date range |
| GET | `api/animals/arrivals` |   | Coll. of 3 most recently arrived _animal_ |
| GET | `api/animals/releases` |   | Coll. of 3 most recently released _animal_ |

### Dictionary
- Conservation Status

### Events
- animal arrives
- animal leaves

## Technologies Used
- JAVA
- Spring Boot
- Spring Data
- postman
- REST API
- JSON
- JavaScript
- Gradle
- git

## Lessons Learned
- start with simple db, classes and methods and build
- RESTART SPRING BOOT AFTER CHANGES
- a field called "somethingANDsomething" will cause problems with Spring Data when attempting to name method findByAnimalIDAndDateAndTime()... renamed to "whenFed"
- postman will do random variables with ${}
- use @PathVariable(value=...) @DateTimeFormat with pattern
- Spring Data JPA has no problem doing a query using LocalDateTime (I read on the internet that times can create problems but it seems to work ok. Might need more testing.)
- can use date for range query
- using VS outside of STS, STS doesn't register changes? nor does git. Switched to Sublime.
- because XHR request is asynchronous, can not parse and save result to outside variable. result will be undefined. Instead, call another function to set or pass the parsed data.
- send path id to send to SERVICE IMPL to map relationships

## Things to Improve
- add enclosure and track cleaning/maintenance
- add medical care tracking table
- more updates
- fill out database
- work on some more complicated queries
- better date formats
- more images
- front end...
