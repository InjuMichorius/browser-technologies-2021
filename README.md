# HvA Enquete
![](https://github.com/InjuMichorius/Filmaholic/blob/master/images/README%20images/READMECOVER.JPG)

Filmaholic is a movie rating application that rates the suitability of movies to its audience using an API, but this time I am doing this server-sided. 

[Click here for the live demo](https://injumichorius.github.io/filmaholic-v2/)

## Goal
The goal of Filmaholic is to provide its audience with information about movies, so they can make a decision on what to watch. They can also search a movie to see other people's opinions. This application will show the overall rating of any movie using the The Movie DataBase API.

## Actor Diagram
![Image of Actor Diagram](https://github.com/InjuMichorius/Filmaholic/blob/master/images/README%20images/actorDiagram.jpg)

## API
I made use of [The Movie DB API](https://www.themoviedb.org/) for this project.
The base endpoint is https://api.themoviedb.org/. All endpoints return either a JSON object or an array. The endpoints I use are popular and ID. This is the structure of a movie array:

```json
{
  "adult": false,
  "backdrop_path":"/8tNX8s3j1O0eqilOQkuroRLyOZA.jpg"
  "genre_ids":[14,28,12],
  "id":458576,"original_language":"en",
  "original_title":"Monster Hunter",
  "overview":"A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity.",
  "popularity":3079.082,
  "poster_path":"/uwjaCH7PiWrkz7oWJ4fcL3xGrb0.jpg",
  "release_date":"2020-12-03",
  "title":"Monster Hunter",
  "video":false,
  "vote_average":7.3,
  "vote_count":869
}
```

The api url needs 3 things.
* The base URL (https://api.themoviedb.org/)
* The endpoint (popular)
* The API key (?api_key=0a00a0a0aaa0aa00a0000a0000a0a0a0)

The returning array will contain result[0] up to result[20]. The result is the movie array I made above.

## Interaction Diagram
![Image of Interaction Diagram](https://github.com/InjuMichorius/Filmaholic/blob/master/images/README%20images/interactionDiagram.jpg)

## Design patterns and Best Practices
__Code standards are important__ when working on any project; your code stays *consistent* and is *readable* for everyone. I defined code standards for __HTML__, __CSS__ and __JS__ while working on this project.

### Javascript code standards
* Variables & functions are written in __camelCase__
* Promises are handled with __async functions__ using await
* I don't use var, only __const__ or __let__
* I put __spaces around operators__ ( = + - * / ) and after commas (exception for for loops)
* I use indentation with __TAB__
* I always end a statement with a __semi-colon;__
* Functions have their opening bracket on the __same line__ as the name, with 1 space in between
* I use __ES6 syntax__ where possible

### CSS code standards
* I try to avoid __!important__ as much as possible
* Layout/general styling is always __above__ more specific styling
* Selectors are not unnecessary __long__ nor __short__
* I use __CSS3 syntax__ where possible
* I avoid old display properties like float
* CSS Selectors must have a __space__ between the name and bracket

### HTML code standards
* I only use IDs when the element is present __once__ on a page and it's necessary for styling or Javascript
* I always write semantic HTML according to __W3C Validator__
* Divs are only used when __necessary__ for styling purposes
* Classes allow easy __re-usage__
* Indentation is always __clear__

## Feature wishlist / backlog
* A register/login page
* A way for users to interact
* A way to rate a movie and update this on the application
* A small trailer of the movie
* Reviews

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Technical requirements
To run this project you'll need [Git](https://git-scm.com/downloads), [TMDB API](https://developers.themoviedb.org/3) and any [code editor](https://code.visualstudio.com/download)

### Installing
First you'll need to clone the repository. You can choose a destination by running cd (change directory). You can clone this repository by using clone https://github.com/InjuMichorius/Filmaholic.git.

```js
cd [ENTER YOUR PATH HERE]
git clone https://github.com/InjuMichorius/Filmaholic.git
```

### Testing
To test if the application works you can open the index.html file. If you see the movie covers it works!

## License
This project is licensed under the MIT license. See the [LISENCE.md](https://github.com/InjuMichorius/Filmaholic/blob/master/LICENSE) file for details
