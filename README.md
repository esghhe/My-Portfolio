# My_Portfolio

## Description
My personal portfolio built using React and Bootstrap. I'm continually adding projects, modifying content, and updating the look and functionality.

## Demo
![](public/assets/My-Portfolio-demo.gif)


## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)


* [Credits](#credits)
​
* [Questions](#questions)

## Installation

To build a similar, single page portfolio or website for yourself, you'll want first create a new React app:
```
npx create-react-app <projectname>
```

Then for the single page, smooth scrolling, install react-scroll. To deploy to Github Pages, install gh-pages:
```
npm install react-scroll gh-pages
```
You can also fork and clone this repo to use as a template and then just run npm install.

## Usage

You'll be able to run the app locally by running npm start:
```
npm start
```
All your changes should update the local host in real time. If you want to deploy your app, you'll need to make a few changes to the package.json file. Directions below for deploying to Github Pages:

1. Add a homepage: <name-of-the-page-deploying-to> to your package.json in the root
  ```
  "homepage": "https://esghhe.github.io/My-Portfolio/"
  ```
2. In the "scripts" property of your package.json, add two scripts:
  ![scripts](https://user-images.githubusercontent.com/62451633/93928045-931f8380-fcce-11ea-96a3-c1e1e8f9fef6.png)

3. Now, after you merge your changes and pull the most up-to-date master, open a new terminal and run npm run deploy:
```
npm run deploy
```
  
4. This creates a new branch, gh-pages. Open your deploy settings in Github and change the deploy branch to gh-pages
  ![deploysettings](https://user-images.githubusercontent.com/62451633/93927549-e04f2580-fccd-11ea-9afc-aa442020ecbe.png)

5. Every time you want your deployed site to update with the changes you've made, you need to run npm run deploy

## ## License

This project is licensed under the MIT license.

## Credits

Any icons are from Material-icons.

## Questions

Questions or feedback-- we welcome them all! Feel free to reach me out for any questions about the repo, open an issue or contact me and I'll get back to you soon!
