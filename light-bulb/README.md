# Light Bulb Project
This is the first tutorial I have ever made! It's very light and I hope it will spark an interest in you to build more complex projects. In this application you'll learn a little bit about html, css, and javascript. Enjoy!

## The Skeleton 💀 
Click [here](https://cdn-images-1.medium.com/max/1600/1*nm0JcvKyANiyLONtE0K9Rg.png) for a cool slide I found :]


1. Create an HTML document, `index.html`, don't forget to add a `title` 😎
2. Inside the `body`, create an `h1` that says My Light Bulb Application 
3. Underneath your heading, insert your 2 images (light-bulb-on.jpg and light-bulb-off.jpg)
4. Add an `id` attribute to the light-bulb-on image. For example, `id="light-on"`
5. Do the same for your light-bulb-off image
6. Create a button that says ON
7. Add an `id` attribute to your ON button. For example, `id="on-button"`
8. Create another button that says OFF, then add an `id` attribute to your OFF button


✅ Check in with me 💀

## The Brains 🧠
Click [here](https://cdn-images-1.medium.com/max/1600/1*yXJWX1VfK1e3-lm43NJHhA.png) for the 2nd cool slide I found :]


##### Part 1 🚩
1. Link your `script.js` to your `html` document
2. Link your jQuery library. Here is a freebie! You can copy and paste this into your html document right next to where you linked your `script.js` file: `<script src="https://code.jquery.com/jquery-3.1.0.js"></script>`
3. Inside your `script.js` file, create a function that lets you know the document is loaded and ready. If you are unsure, click here. 

✅ Check in with me 🧠

4. Create a separate click handler for each button:
##### Test Your Click Handlers
* Console log `'the on button was clicked'` when the ON button is pressed
* Console log `'the off button was clicked'` when the OFF button is pressed


✅ Check in with me 🧠

## The Skin 🧟
Click [here](https://cdn-images-1.medium.com/max/1600/1*_7xje-aNFRomqrScCrXpjw.png) for the 3rd cool slide I found :]


1. Link your CSS stylesheet, `styles.css` to your `html` document
2. In the html doc give your ON light bulb image a `class` of hidden
3. In the html doc give your OFF light bulb image a `class` of visible
4. In your `styles.css` make a css declaration for the class hidden and another declaration for the class visible. *The goal is to make one light bulb visible and the other invisible.*
* CSS styling reference: https://www.w3schools.com/css/css_syntax.asp
* Add correct visibility for each class declaration: https://www.w3schools.com/cssref/pr_class_visibility.asp


✅ Check in with me 🧟

## More Brains 🧠
#### Part 2 🚩
1. In your `script.js`, create two functions
* `handleOnButton`, have it console log `'handleOnButton function called'`
* `handleOffButton`, have it console log `'handleOffButton function called'`
2. These two functions are not being called/invoked anywhere! So let's do that in your click handlers (remember, invoke and call mean the exact same thing).
* Invoke the `handleOnButton` function when the ON button is clicked
* Call the `handleOffButton` function when the OFF button is clicked


✅ Check in with me 🧠

## Brain Pains 🤯
#### Part 3 🚩
#### In this section, it is very important to understand what your code is doing line by line. Before you run your code, create a hypothesis of what you think will happen and why. 


**Test your code often and make break points while running your code. Get comfortable using the inspector!** Here is an extremely boring video of how to use the inspector. I apologize, but it was the only one I could find that was straight to the point and not over 20 min. 


If you want to grab a chair next to me and see how I do it, that works too. Another option, is just to dive right in and learn by using it yourself. Mess things up! It's good for your coding soul. 😉


1. Explore the jQuery methods, `.removeClass()` and `.addClass()`
You can check out a ton of other cool jQuery methods here. 
2. When the ON button is pressed it will call the `handleOnButton` function. Inside the `handleOnButton` function, make the **on** light bulb **visible** and the **off** light bulb **hidden** with the use of the jquery methods mentioned above
3. When the OFF button is pressed it will call the `handleOffButton` function. Inside the `handleOffButton` function, make the **off** light bulb visible and the **on** light bulb **hidden**

*If you are still extremely confused, let me know and I will point you in the right direction.*


✅ Check in with me 🤯

## Finishing Touches 🎨
* Stack the images on top of one another. Off light bulb should appear in front and the on light bulb behind it. This way when we press the on/off buttons it gives the illusion of one bulb being turned off and on. 

💁🏻‍ **CSS is actually my weakest strength, I always have to search the web to find out how to position my elements.**
* Feel free to center all of your elements on the page, add fonts, a favicon, button styling... the world is your oyster 🌎
* Good rule of thumb: functionality first, then aesthetics. 