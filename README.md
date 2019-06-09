[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Why did you

### choose MobX

MobX is one of the two state mangement libraries mentioned in React docs. I have used Redux extensively over past few years, so I decided to play with something else here this time, to spice things up.
Benefits of this approach:

- Great performance because of Observer pattern and rendering optimisations
- Less boilerplate
- Less DOM updates
- More architectural freedom (possibility for DI, single or multiple stores, etc.)

### use Commitizen

Alongside clean code, and comments in the code, meaningful commit measages are great way to convey to other developers the reasons behid code changes. I believe that making better commits makes a diference.

### use Css Modules/Bootstrap

To be honest I love BIO (BEM, ITCSS, OOCSS), and would gladly spend time handcrafting minimal CSS to go along with this project. The thing is, because of the time constraint I have, I had to choose where to focus, so I decided to use something faster to implement. I have chosen CSS Modules because it provides great balance between safety and convinience, and Bootstrap gave me ready made classes.

### choose masonry layout for grid

I just like it :-)

---

## Future plans

* Increase test coverage
* Add proper API calls and error handling
* Increase support for older browsers
* Move CSS to BIO
* Replace simple gray background with some nice svg for Placeholder
* Add loading indicators
* Clean up the code a little
* Proper error handling
* Add Error boundaries
* Create algorithm to make sure the images are properly distributed in the masonry grid
  * calculate the heights of images in grid
  * make sure each columns get the set of images that will create roughly same sized columns
* Make the app look nice
* Lazy load images below the fold
* Make Main view into "infinite scroll"
  * Add some nice animations to the the new apperaing items
  * Reflect the progress through a scroll in url using react-router
  * "Virtualize" items out of the fold, for a a better performance with long scrolls
  * Intersection Observer
* Create sizes method for generating sizes property on Picture (for example for the grid, where desktop may use smaller image than mobile)
* Add alt tag to image

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
