# HvA Enquete 📝
![](https://github.com/InjuMichorius/browser-technologies-2021/blob/master/public/img/documentation/cover.JPG)

HvA enquete is a school project I made where HvA students can rate the courses. The project is focused on progressive enhancement, a principle that makes sure the website is accesible for everyone

[Click here for the live demo](https://injumichorius.github.io/hva-enquete)

# Table of Contents 🧭
1. [Goal](https://github.com/InjuMichorius/ReadEar#goal-)
2. [Getting started](https://github.com/InjuMichorius/ReadEar#getting-started-)
3. [Wishlist](https://github.com/InjuMichorius/ReadEar#feature-wishlist--backlog-)
4. [Practises](https://github.com/InjuMichorius/ReadEar#design-patterns-and-best-practices-)
5. [Packages](https://github.com/InjuMichorius/ReadEar#packages-used-)

# Goal 💪🏻
> I want to be able to fill in a survey about the minor Web Development, with various answer options. If I don't finish the survey, I want to pick up where I left off later. (translate)

The goal of HvA enquete is to provide the HvA with data about their students. The information will be send to a correctly structured database, where the HvA admin can look at the results.

# Getting started ✨
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Technical requirements
To run this project you'll need [Git](https://git-scm.com/downloads), [Nodejs](https://nodejs.org/en/download/) and any [code editor](https://code.visualstudio.com/download)

## 📥 Installing
### 1. Clone this repository 👯
Before we can get started, we'll need to clone this repository. We can do this by typing the following line of code in the terminal:
```bash
git clone https://github.com/InjuMichorius/hva-enquete.git
```
### 2. Install the packages 💻
First we need to install the used NPM packages.
```bash
npm install
```
### 3. Start developer environment 🎬
Now we can run our application, by running the following line of code in your terminal:
```bash
npm run dev
```

### 4. Navigate to localhost 🌐
Congratulations! If everything works, you should be able to see the application running in your browser. Please note that the port won't always be the same number.
```
http://localhost:3000
```

# Feature wishlist / backlog 👑
Below is a list of features I'd love to add to this application. The features are split up using the **M**o**SC**o**W** method.

**M** - Must haves
_These features are requirements for the end product_
- [x] Overview page with avaible books
- [x] Possibilty to change pages

**S** - Should haves
_These features are wanted, but not necessary for a usable product_
- [x] Accessible styling
- [x] Easy audio controls

**C** - Could haves
_These features can be added if there is enough time to do so_
- [ ] Database that stores all mp3 files

**W** - Would haves
_These features can be added in the future_
- [ ] Easy way for firends to upload mp3 files

# Design patterns and Best Practices 👩🏻‍💻
__Code standards are important__ when working on any project; your code stays *consistent* and is *readable* for everyone. I defined code standards for __HTML__, __CSS__ and __JS__ while working on this project.

## Javascript code standards
* Variables & functions are written in __camelCase__
* Promises are handled with __async functions__ using await
* I don't use var, only __const__ or __let__
* I put __spaces around operators__ ( = + - * / ) and after commas (exception for for loops)
* I use indentation with __TAB__
* I always end a statement with a __semi-colon;__
* Functions have their opening bracket on the __same line__ as the name, with 1 space in between
* I use __ES6 syntax__ where possible

## CSS code standards
* I try to avoid __!important__ as much as possible
* Layout/general styling is always __above__ more specific styling
* Selectors are not unnecessary __long__ nor __short__
* I use __CSS3 syntax__ where possible
* I avoid old display properties like float
* CSS Selectors must have a __space__ between the name and bracket

## HTML code standards
* I only use IDs when the element is present __once__ on a page and it's necessary for styling or Javascript
* I always write semantic HTML according to __W3C Validator__
* Divs are only used when __necessary__ for styling purposes
* Classes allow easy __re-usage__
* Indentation is always __clear__

# Packages used 📦
* [Express](https://www.npmjs.com/package/express) - Used to setup the server
* [Body-parser](https://www.npmjs.com/package/body-parser) - Used to refer to html elements
* [Ejs](https://www.npmjs.com/package/ejs) - Used for templating
* [Nodemon](https://www.npmjs.com/package/nodemon) - Used for auto refreshing the server

# License 🔐
This project is licensed under the MIT license by © Inju Michorius, 2021. See the [LISENCE.md](https://github.com/InjuMichorius/ReadEar/blob/master/LICENSE) file for details.
