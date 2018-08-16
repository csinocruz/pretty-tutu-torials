# Basic Portfolio Site
A simple, portfolio page to showcase a few of your projects. Created to help you learn HTML & CSS. 

#### 🚩 START HERE ➡️ What you will need:

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

#### Dummy Data Filler:
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
4. Underneath your `h1` create an `h2`, make it a small blurb about yourself (or use the ipsum generator). 
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
6. Create a new div with a class called `about` underneath the `ul` but still inside the same `page-container` div. Add 3 `p` tags, paragraphs, inside the `about` div (now would be a good time to use ipsum).

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

4. To clean up the layout, add these properties to the `.page-container`:
```css
max-width: 55%;
min-width: 300px;
margin: 0 auto;
```
The max-width sets the width of the page-container div to be 55% of the page, but we also gave it a minimum width of 300px (in case your page is being viewed on mobile). Margin 0 auto centers the object, but for a more thorough answer... [click here](https://stackoverflow.com/questions/3170772/what-does-auto-do-in-margin0-auto).

It's important to organize your stylesheet and add comments when necessary because it is easy to override other styled elements by specificity or level of importance. This is diving deeper into CSS knowledge, so for more info you can go [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) or [here](https://www.google.com/) 😉. 

If you want to add some more flare, you can add a left [border](https://www.w3schools.com/css/css_border.asp) to the `h1` element like I did below. If we've been doing everything right, you should have something like this:

![alt text](https://raw.githubusercontent.com/csinocruz/pretty-tutu-torials/master/basic-portfolio/part-1-screenshot.png "Screen Shot of Part 1")

I added a larger font-size to my h1 tag. Feel free to play around with [font-sizes](https://css-tricks.com/almanac/properties/f/font-size/) or other properties like line-height, letter-spacing, etc. 

## PART 2️⃣
### Back to the HTML Skeleton 💀
Read through carefully... 

1. Create a div called `projects-container`, place this div below the `about` div, but still inside `page-container`
2. Create another div inside `projects-container`, give this div an `id` of "project1" and a class called "column"
3. Inside the div with the class column, create another div with the class "photo".
4. Underneath, make an `h2` as a title for the photo
5. Then underneath your `h2` create a `p` tag and add text/ipsum 

##### Should look like this: 
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
Do this 2 more times inside the projects-container div, but each `id` should be unique. As in "project1", "project2", and "project3". The class `photo` will remain the same name for all 3. It's important to know the difference between `id`'s and `classes`. Check out [this page](https://css-tricks.com/the-difference-between-id-and-class/) for a deeper understanding. 

Annnd, just so we have more content to work with on the page, let's create a new div with a class called `section`. This will come after the `projects-container` div ***(still inside `page-container`, but NOT inside the `projects-container`)***. Inside div.section add an `h2` and 2 `p` tags (add text/ipsum). 

Your div with class `section` should look something like this:

![alt text](https://raw.githubusercontent.com/csinocruz/pretty-tutu-torials/master/basic-portfolio/part-1-screenshotA.png "Screen Shot of Part 1A")


### Back to The Skin 🧟
**The following will be added to your `styles.css`, not your `index.html` file.**

In order to see where our elements are on the page, lets give them some borders.

1. Add 2px solid orange to the div with class, `projects-container`
2. Add 2px solid blue to the div with class, `column`
3. Add 2px solid hotpink to the div with class, `photo`

Things are probably looking strange at this point, but that's okay! 👾

### Structure & Size 🏙️
1. Give each div with the class of column a width and min-width:
```css
width: 30%;
min-width: 250px;
```
2. Let's add some flex properties to the projects-container:
```css
display: flex;
justify-content: space-around;
flex-wrap: wrap;
```
🤨 But what is flex?! Flexbox helps you create responsive layout structure. I alway use [this](https://codepen.io/enxaneta/full/adLPwv) as reference while creating layouts. 

3. Everything should start looking a little more normal. However the div(s) with class photo need some height and width properties. Let's do that now. 
```css
height: 200px;
min-width: 240px;
```

4. Time to add some flexbox properties to `.column`. We are going to make the items centered and they will flow from top to bottom instead of left to right. For more help, you can go [here](https://codepen.io/enxaneta/full/adLPwv).
Add the following properties to the selector, `.column`:
```css
display: flex;
flex-direction: column;
align-items: center;
```

5. To make things look a better, add a margin of 15px to `.column` and a margin-top of 50px to the `.projects-container`. On larger screens the projects will line up in a row across the page. As the browser window becomes smaller, the projects will start to stack. Try it out by changing the size of your browser. 

### Let's add Images 📸
There are different ways to add images onto a page. But for this project, we'll be doing it this way 😊. We are going to insert the image(s) into the div(s). 

The selector, `#project1`, targets the element with an `id` called `project1` and then looks (the ">" sign) for a child element with the `class`, `photo`. For the url you can add a direct link or enter the path to a photo in your directory. For more info on finding the correct file path, you can go [here](https://www.w3schools.com/html/html_filepaths.asp).

```css
 #project1 > .photo {
     background-image: url("brown-poodle-mix.jpg");
}
```

You must do the above code for each project id (#project1, #project2, and #project3). But the it's only showing a zoomed in portion of the image! 😩

To cover the entire div and center the image, add the following properties to the selector, `.photo`:

```css
background-size: cover;
background-repeat: no-repeat;
background-position: 50% 50%;
```

🤩 Better?? Since our photos are visible, you can remove the colored borders. Extra Credit: Add a border-radius 🆒 If we've been doing everything correctly, your projects-container should look something like this:

![alt text](https://raw.githubusercontent.com/csinocruz/pretty-tutu-torials/master/basic-portfolio/part-2-screenshot.png "Screen Shot of Part 2")

## PART 3️⃣

### FlexBox 🐸
Want to become a master at placing elements on a page? [FlexboxFroggy](https://flexboxfroggy.com/) is your friend. 