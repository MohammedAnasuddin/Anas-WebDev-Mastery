## Creating our own Production Ready App

### npm
1. npm does not stand for "node package manager"

2. npm provides way to get dependencies to our project

3. Making our project use npm: <code>npm init</code>

   ## package.json:

   Is a Configuration of npm for our project.

   Keeps track of every dependency.

   ​	**^**(caret): allows to use the minor updates(2.3.x) of the dependency.

   **~**(tilde): allows only major dependency upto the mentioned version only.

   **Always it is best to use ^**, *since using ~ comes with major updates , which might get unexpected behaviors.* 

##     package-lock.json

- ​	Keeps the exact version of dependencies being used in the project.
  - `package.json` will have dependency versions with ^ or ~  , but `package-lock.json` will  represents the version  of dependency by locking the version currently in use by project. 

## node_modules

- **Transitive Dependencies **
  ***why there are so many modules installed , when a single module is installed?***
- The single dependency uses another modules to work , these modules again uses various modules to work hence the collection of node_modules is formed.
  - **why modules does not have a package-lock.json?**
  - The root `package_lock.json` contains current version of al dependencies.
- Each module has its won package.json where the required dependencies are listed.
- Never push `node_modules` to GitHub/production always put it inside `.gitIgnore`
- Since they could be recreated using package/package-lock configurations and run `npm install`

**Never push things which can be regenerated on GitHub**

### Bundler(Parcel)

- Packages the app to ship it to the production

- React uses web-pack bundler behind the scene.

- ```
  npm install parcel -d
  ```

- parcel automatically refreshes the  page on save. this is is known as Hot Module Replacement(HMR) by utilizing File watching Algorithms

- parcel builds webpage faster by using Caching

- Performs Image Optimization, Minification of code(format) , Consistent Hashing, Code Splitting  as well.

- Performs Differential Bundling i.e, bundling with respect to the browser, making project compatible with the older browsers.

- Beautifies the Error and can host https as well

- Performs Tree Shake - removal of unused code.



## Types of Dependencies

**Dev Dependencies:** dependencies required during development

**Normal Dependencies:** can be used for production as well.



## Igniting our APP

Run `npx parcel index.html`

Parcel has Hosted our app on a server/port

**npx: ** Executes a dependency

***Note:** Remove main:"app.js" from `package.json` since parcel specifies index.html as entry point and npm says app.js they both conflict.*

Run `npx parcel build index.html` this generate a production grade , dist which consists of highly optimized code of our project. 

Note: Don't put parcel-cache and dist folder on GitHub

## Getting React in our app

CDN Scripts is not a good way to get react due to network load and keep modifying the version in URL  for to the latest update.

While using modules, package.json takes care of the version.

`npm install react` 

`npm install react-dom`



## Using Modules in Project

use the `import` keyword

Browser understand JS files as Browser Scripts(plain JS) these files does not have import compatibility.

to fix add `type="module"` attribute to the script tag of the JS file in the HTML



## Making our App compatible with Older Browsers

Go to browserlist.dev and select your requirement based on percentage.

In `package-json` add the following key value pair

```js
"browserslist": [
"last 2 versions" //Requirement
]
```

 
