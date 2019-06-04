[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Why did you

### choose MobX

MobX is one of the two state mangement libraries mentioned in React docs. I have used Redux extensively over past few years, so I decided to play with something else here this time, to spice things up.
Benefits of this approach:

- Great performance because of Observer pattern and rendering optimisations
- Less boilerplate
- Less DOM updates
- More architectural freedom (possibility for DI, single or multiple stores, etc.)
- Make it actually look nice

### use Commitizen

Alongside clean code, and comments in the code, meaningful commit measages are great way to convey to other developers the reasons behid code changes. I believe that making better commits makes a diference.

### use Css Modules/Bootstrap

To be honest I love BIO (BEM, ITCSS, OOCSS), and would gladly spend time handcrafting minimal CSS to go along with this project. The thing is, because of the time constraint I have, I had to choose where to focus, so I decided to use something faster to implement. I chosen CSS Modules provide great balance between safety and convinience, and Bootstrap gave me ready made classes.

---

## Future plans

* Increase test coverage
* Add proper API calls and error handling
* Increase support for older browsers
* Move CSS to BIO
* Figure out how to properly use srcset with react-cloudinary
* Create react-cloudinary types declaration
* Replace simple gray background with some nice svg
* Add some loaders

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
