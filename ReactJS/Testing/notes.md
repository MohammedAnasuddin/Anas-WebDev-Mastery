# Testing React App

Testing is performed to ensure that addition of new code does not break the previous  working of the project.

## Types of Testing:

As a dev , you need to perform 2  types of tests:

1. `Unit Testing`: Testing a single unit/component

2. `Integration Testing` : Testing how components works together.

## Setting up Testing:

Use `React-testing-library` to implement testing it follows DOM-testing and uses `jest` 

1. install react-testing-library  and jest as dev dependency 
   
   1. `npm i -D @testing-library/react jest` 

2. `jest` uses babel , hence go jest docs , https://jestjs.io/docs/getting-started#using-babel  and install the recommended libraries.

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

3. create `babel.config.js` file in root directory and add  the below code
   
   ```js
   module.exports = {
     presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
   };
   ```

4. A conflict arises between parcel's babel configuration and jest babel configuration. 
   `Parcel `states: 
   
   > **Note**: JavaScript Babel configs (e.g. `babel.config.js`) should be avoided. These cause Parcel’s caching to be less effective, which means all of your JS files will be recompiled each time you restart Parcel. To avoid this, use a JSON-based config format instead (e.g. `babel.config.json`).

But `jest `requires `babel.config.js` , to solve this :
go to https://parceljs.org/languages/javascript/#usage-with-other-tools

this recommends to disable the babel transpilation of parcel by adding the below code to `.parcelrc` (new file in root directory)

```json
{  
    "extends": "@parcel/config-default", 
    "transformers": {   
        "*.{js,mjs,jsx,cjs,ts,tsx}": [     
            "@parcel/transformer-js",      
            "@parcel/transformer-react-refresh-wrap"   
            ]   
        }
}
```

## Running test cases

To run test cases we need to add a new `script` in `package.json` which runs `jest`

```json
"scripts": {
    "test": "jest",
  }, 
```

run it by executing the command `npm test`

## Creating Jest Configuration

run 

```bash
npm init jest@latest
```

Answers:

> - Typescript: No
> - test-environment:   js-dom (to replicate web interactions  without browser)
> - coverage reports: yes
> - provider: babel
> - mock calls: yes

React-testing Library says : *If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.*

run : `npm install --save-dev jest-environment-jsdom`

## Writing Test Cases

Before Components , lets test `JS` functions.

> Where to keep our test files
> 
> `Jest` looks for test cases inside  folder name `__tests__` . Store all the files over here.
> 
> Here is the regExp used by jest :  `testMatch: **/__tests__/**/*.?([mc])[jt]s?(x), **/?(*.)+(spec|test).?([mc])[jt]s?(x)`
> 
> As you can see in `regExp` , Jest will also considers the file with extensions `fileName.(spec/test).(js/ts)`  total 4 ways to name.
> 
> These files can be stored in the `__tests__` folder as well.

### Creating Test Cases for `JS`

we use `test()` to create tests.  can also  use `it` it is an alias for test

> test cases start to sound good with `it` is paired with description test starting with `Should ...`
> 
> ```js
> it("Should Render the Component",()=>{})
> ```

`Syntax`:

```js
test("description for test case" , ()=>{

//Code to test: 
    // A code that produces a result


    //A code to match the obtained result to the required value
})
```

result can be matched using `expect(result)` and `.toBe(required)` . This state is know as *Assertion* . If result and required are not same the test case gets failed.

`.toBe()` uses Object.is to match

```js
test("Is sum() providing right value", ()=>{

    const result = sum("0",1);
    expect(result).toBe(1);
})
```

This test failed since result was `"01"` and expect was a `Number-1` 

> we also have `not.toBe()` it just inverses the matches just like `!`

## Writing Test Cases for React

### Unit Testing

Testing a component in isolation without any external interference.

#### Test-1: Whether the component has loaded or not?

We need to get the component on `js-dom` to test , to do that we use `render(<Component/>)` 

> Jest does not support `jsx` in `render()` . To solve this we need to install 
> `@babel/preset-react` (`npm i -D @babel/preset-react`) 
> 
> and then modify  the `babel.config.js` by adding 
> `['@babel/preset-react', {runtime:"automatic"}],` to the `presets` array
> 
> Final` babel.config.js`
> 
> ```js
> module.exports = {
>   presets: [
>     ['@babel/preset-env', {targets: {node: 'current'}}],
>     ['@babel/preset-react', {runtime:"automatic"}],
> 
>   ],
> };
> ```
> 
> This ensures that `jest` can convert `jsx` to React Elements



then to get a *matching_criteria*  for the presence of the component on UI, we use `screen` and any associate methods.

> Criteria could be id, class or specific element in the component or the content of the component itself . It just the reference for the required output. think like *"Agar sucess hai toh yeh wala criteria toh pakka match karega."*
> 
> 

then for the assertion you can use `.toBeInTheDocument()` to check whether the result is present in the `Document` of the page or not. 

> to use `toBeInTheDocument()` we need to install `npm i -D @testing-library/jest-dom`



we use `screen.getByRole("semantic)` to get criteria based on  semantic(type) of element. `Note:` Here the *role* is same as accessible role

`screen.getByText("text")` to get criteria based on the content




#### Test-1.2: Testing quantity of components rendered

useful to check whether all the `input` or `cards` are loaded or not

use `screen.getAll..()` to get an array of Elements and use it length to test.

this is known as `querying` and it returns an array of React elements.





> For Every Test case: You
> 
> 1. render a component
> 
> 2. Query it 
> 
> 3. Assert Something.



## Grouping Test Cases

Inside the test file , you can use `describe()` to group test cases

```js
describe("Demo Test Cases", ()=>{
    test()
    test()
    test()    
// can also have another describe
describe("Sub Test Cases", ()=>{
    it()
    it()
    it()
})


})

```

> Add `coverage` folder to .gitIgnore it is used by jest to store all the covered files.










