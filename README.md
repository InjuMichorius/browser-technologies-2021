# HvA Enquete
![](https://github.com/InjuMichorius/browser-technologies-2021/blob/master/public/img/documentation/cover.JPG)

HvA enquete is a school project I made where HvA students can rate the courses. The project is focused on progressive enhancement, a principle that makes sure the website is accesible for everyone.

[Click here for the live demo](https://injumichorius.github.io/hva-enquete)

## Goal
The goal of HvA enquete is to provide the HvA with data about their students. The information will be send to a correctly structured database, where the HvA admin can look at the results.

## Database
```json
{
  "_id":{"$oid":"606275a73d6d8a2440bab79b"},
  "uuid":"7c99e779-499b-420c-b38e-f83da0f02b66",
  "studentName":"Inju Michorius",
  "studentNumber":"500804843",
  "__v":0
}
```

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
fillt=ertext

## License
This project is licensed under the MIT license. See the [LISENCE.md](https://github.com/InjuMichorius/Filmaholic/blob/master/LICENSE) file for details
