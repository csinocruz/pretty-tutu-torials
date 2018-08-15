# Basic Portfolio Site
A simple, portfolio page to showcase a few of your projects. Created to help you learn HTML & CSS. 

####🚩 START HERE ➡️ What you will need:

* Text Editor
* Google
* What is [HTML](https://www.w3schools.com/html/html_intro.asp)?
* What is [CSS](https://www.w3schools.com/css/css_intro.asp)? 
     - [CSS Syntax](https://www.w3schools.com/css/css_syntax.asp)
     - [Ways to Incorporate CSS](https://www.w3schools.com/css/css_howto.asp) (for this project, we will be using an external stylesheet)
     - [Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
* How to create [comments](https://www.w3schools.com/html/html_comments.asp) in HTML
* How to create [comments](https://www.w3schools.com/css/css_syntax.asp) in CSS (scroll to bottom)
* [How to use the Google Chrome Inspector](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/) It might look scary, but it will save your life❗

####Dummy Data Filler:
* [Lorem Ipsum](https://loremipsum.io/)
* [Cupcake Ipsum](http://www.cupcakeipsum.com/)
* [Hipster Ipsum](https://hipsum.co/)
* [Bacon Ipsum](https://baconipsum.com/)
* [Veggie Ipsum](http://veggieipsum.com/) (if you were offended by the last one)

## PART 1️⃣
### The Skeleton 💀 
Click [here](https://cdn-images-1.medium.com/max/1600/1*nm0JcvKyANiyLONtE0K9Rg.png) for a cool slide I found 💫

1. Create an HTML document, `index.html`, don't forget to add a `title` 😎
2. Inside the `body`, create a `div` with a `class` called `page-container`
3. Inside your `div` with the class `page-container` add an `h1` tag that says your name 
4. Underneath your `h1` create an `h2`, make it a small blurb about yourself. 
```html
// correct
<h1>Mr. Potato Head</h1>
<h2>Forage af kombucha four loko keytar blue bottle flexitarian pitchfork.</h2>
```
```html
// incorrect
<h1>Mr. Potato Head<h2>Forage af kombucha four loko keytar blue bottle flexitarian pitchfork.</h2></h1>
```
5. Inside the same div create a `ul` with 3 `li`'s, (🤔 but what does it mean? It's an unordered list with 3 list items)
     - Extra Credit: Make each `li` a link (does not have to be a real link anywhere, you can fill the href with '#'
6. Create a new div with a class called `about` underneath the `ul` but still inside the same `page-container` div. Add 3 `p`'s, paragraphs (now would be a good time to use ipsum),  inside the `about` div.

### The Skin 🧟
Click [here](https://cdn-images-1.medium.com/max/1600/1*_7xje-aNFRomqrScCrXpjw.png) for another cool slide I found 💫

1. Create a stylesheet, `styles.css`. Don't forget to link your stylesheet to your `index.html` file or else your styling will not be applied to your html. If you are unsure how to do this, go back and read "Ways to Incorporate CSS" under **START HERE**. 
2. Choose font-family(s) you like ➡️ https://fonts.google.com/
3. Add a background-color and font-family to the `h1` and `body`. For example:
```css
h1 {
     font-family: 'Special Elite', cursive;
}
```
```css
body {
     background-color: lightgrey;
     font-family: 'Josefin Slab', serif;
}
```
You can also select elements by their [class](https://www.w3schools.com/cssref/sel_class.asp) or [id](https://www.w3schools.com/cssref/sel_id.asp). There are many different ways to select elements, you can group multiple elements, every 3rd child, nested elements, only odd numbers, last child, etc. 

It's important to organize your stylesheet and add comments when necessary because it is easy to override other styled elements by specificity or level of importance. This is diving deeper into CSS knowledge, so for more info you can go [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) or [here](https://www.google.com/) 😉.

## PART 2️⃣
### Back to the HTML Skeleton 💀

1. Create a div called `projects-container`, place this div below the `about` div, but still inside `page-container`
2. Create another div inside projects-container, give this div an `id` of "project1" and a class called "column"
3. Inside the div with the class column, create another div with the class photo.
4. Underneath, make an `h2` as a title for the photo
5. Then underneath your `h2` create a `p` tag and add text/ipsum 

#####Should look like this: 
```html
            <div id="project1" class="column">
                <div class="photo">
                    <!-- picture -->
                </div>
                <h2>Wood Smoked</h2>
                <p>
                    Pop-up retro neutra lo-fi. Swag 90's keytar street art kinfolk PBR&B cold-pressed 
                    deep v post-ironic. Pinterest taxidermy artisan freegan tbh trust fund kale chips 
                    ethical meditation YOLO. Tacos quinoa beard locavore hexagon readymade. Shaman 
                    iPhone vape hoodie copper mug helvetica fingerstache food truck venmo live-edge.
                </p>
            </div>
```
Do this 2 more times inside the projects-container div, but each `id` should be unique. As in "project1", "project2", and "project3". It's important to know the difference between `id`'s and `classes`. Check out [this page](https://css-tricks.com/the-difference-between-id-and-class/) for a deeper understanding. 

### Let's add Images 📸
There are different ways to add images onto a page. We are going to do it this way, but feel free to do as you wish. The following will be added to your `styles.css`, not your `index.html` file.
```css
// this selector targets the id called 'project1' and then looks for a child element with the class 'photo'
// for the url you can add a direct link or enter the path to a photo in your directory
 #project1 > .photo {
     background-image: url("https://media.brides.com/photos/5994759d8c2b365d5c23c0c5/1:1/w_767/A.P.%2520Bio%2520rose%2520detail.png");
}
```
For more info on finding the correct file path, you can go [here](https://www.w3schools.com/html/html_filepaths.asp).

Add the following CSS:
```css
// this targets the element with the class 'photo'
.photo {
    border-radius: 5%; 
    height: 200px; 
    min-width: 240px; 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}
```
Border radius will round the corners, we set a height and minimum width size, the 3 background properties center the image inside the div. Best way to understand how these work are to try different properties inside the Chrome inspector. 

### FlexBox - Adding alignment to our images 🐸
Want to become a master at placing elements on a page? [FlexboxFroggy](https://flexboxfroggy.com/) is your friend. 