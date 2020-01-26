<br><br>

# Engineering Guidelines

This is the basic guidelines of Engineering process of the **The Cube Restaurant** project. Follow these instruction for contributing to the project.

### Engineering philosophy
I have planned a common methods/approach to this project. It includes Coding styles and rules of different files and Code editors settings. This page also includes basic guideline of development Life cycle. Read it carefully before contributing to the project

### Coding Patterns to follow
All types of files and code follows same patter through out the whole project. Files extensions like .html, .css, .scss, .js and more are included in the project.
* **JavaScript - [AirBnB](https://github.com/airbnb/javascript)**
* **Html - [HTMLHint](https://github.com/htmlhint/HTMLHint)**
* **SCSS and CSS - 
[StyleLint](https://github.com/stylelint/stylelint)**


### File Naming Conventions
**The Cube Restaurant** project follows same naming convention for files to the project. Normal files are named in camel Case while JavaScript Class Files or Component files names are in Pascal Case.

* **Normal File** : `someFile.html`
* **JavaScript Class Files** : `Clock.js`
* **Component Files**: `MainComponent.vue`

### What About Prettier?
**[Prettier](https://prettier.io/)** is commonly mentioned with **[eslint](https://github.com/eslint/eslint)**. Many projects uses eslint+prettier configuration for the development. **The Cube Restaurant** uses Airbnb plugin which forces to write the code in specific way. Using Airbnb and prettier at same time may create issues with linting (as prettier changes the format of code). The rules prettier follows, they conflicts with the Airbnb rules. So it will be better not to use them together. So next time Prettier!

More linting guidelines are provided in Specific [Coding guidelines](/coding-guidelines/) pages for each languages.