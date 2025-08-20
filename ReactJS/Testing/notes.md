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

> Analysis of Testing:
> In the `coverage/lcov-report` folder run `index.html` it will have complete analysis of our testing process.
> 
> >  The name **Istanbul** appears in coverage reports because Istanbul is the **underlying library/tool** responsible for generating code coverage metrics.
> > 
> > **Istanbul** is an open-source JavaScript library that instruments your code to measure how much of it is being executed during tests.
> > 
> > - Created by **Yahoo**, it's named **Istanbul** as a play on “coverage” — **Turkey (Istanbul)** is partly in **Asia** and **Europe**, much like how coverage spans your entire codebase.
> >   
> >   > "*Istanbul is a city that spans two continents, just like code spans multiple functions, branches, and files. It’s about coverage.*" - Official Documentation 

> Test Coverage should be `>=85%` overall but always try for `100%`

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

then for the assertion you can use `.toBeInTheDocument()` to check whether the result is present in the `Document` of the page or not. 

> to use `toBeInTheDocument()` we need to install `npm i -D @testing-library/jest-dom`

we use `screen.getByRole("semantic)` to get criteria based on  semantic(type) of element. `Note:` Here the *role* is same as accessible role

`screen.getByText("text")` to get criteria based on the content. It can also use an RegExp to match content.

> #### To get a single element
> 
> If there exist multiple elements of single role , to get the required one use 
> 
> `const button = screen.getByRole("role",{name:"element_text"})`  
> 
> this will give the single element with the matched text.

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

> ### Fixing TextEncoder Error
> 
> **When using `testEnvironment: 'jsdom'`, Jest uses the JSDOM environment**, which **doesn't inherit Node’s globals** like `TextEncoder` by default.
> 
> So even in Node 18 or 20, you still **need to manually inject `TextEncoder`** into the global scope **if JSDOM is your test environment**.
> 
> Replace the current `jest.config.js` with below code:
> 
> ```js
> // jest.config.js
> const { TextEncoder, TextDecoder } = require('util');
> 
> global.TextEncoder = TextEncoder;
> global.TextDecoder = TextDecoder;
> 
> 
> const config = {
>   clearMocks: true,
>   collectCoverage: true,
>   coverageDirectory: "coverage",
>   testEnvironment: "jsdom",
> 
> 
>   setupFilesAfterEnv: ['<rootDir>/jest.config.js'],
>                         //path to config file
> };
> 
> module.exports = config;
> ```

#### Test 1.3 : Testing Components which uses External Libraries

On testing `Header` Component , it throws error since we use Redux . `js-dom` can oly understand React and JS not external things from Redux like `useSelector()` and others.

Just like we wrapper `Providers` for whole app for devlopment , we need to wrap teh unit with the provider.

So we need to *wrap with all the Providers* which are used by the components in the unit

For Example: `Header` component uses `store` and `<Link/>` hence need to wrap with the providers `Redux` and `REact Router`

> If `React Router` is used then Wrap the unit with `<BrowserRouter> </BrowserRouter>`

> ## Use GUI for Jest
> 
> Majestic:   https://github.com/Raathigesh/majestic/tree/master
> `npm install majestic -g` then run using `npx majestic`

#### Test 1.4: Testing Event Handlers, Outcomes of Events.

use `fireEvent.event(element)`

1. Get the target element

2. Perform the Event

3. get the new element and perform assertion
   
   ```js
   const loginB = screen.getByRole("button", {name: "Login"})
   
   fireEvent.click(loginB);
   
   const logoutB = screen.getByRole("button", {name: "Logout"})
   expect(logoutB).toBeInTheDocument(); 
   ```

#### Test 1.5: Testing Components which uses props

We use mock data to replicate the actual rendering of the component. Create a new folder `mocks` to store all the mock data to be used.

use mock data: `import mock_data from "/path/to/mock/data.json`

then to assert se any unique criteria to match Eg: heading . 

### Integration Testing

 To test components works together or not

#### Test 2.1 :  Testing Async Operations

Since we work on `js-dom` it does not have `fetch()`(since it s given by Browsers)

So we need to mock fetch function 

1. Replace at global level: `global.fetch` this initializes our function as fetch in the scope.

2. Assign it to `jest.fn()`

3. ``Recreate the `fetch` inside this function
   
   1. fetch returns a promise (we hard code it to resolve)
   
   2. this promise returns Object consisting of property `json` having the value as a function which returns a new promise.
   
   3. this new promise would be  resolving with our data
   
   ```js
   global.fetch = jest.fn(()=>{
       return Promise.resolve({
       json: () =>{ //tip .resolve() needs value not promises
           return Promise.resolve(data)
       }
   
       })    
   
   })
   ```

#### Handling States while testing

we need to use `act()` it returns a Promise , hence use it `await` also prefix the callback function of test with `async`   

> Importing `act()`
> 
> `import { act } from 'react-dom/test-utils'`  is deprecated
> 
> use `import { act } from 'react'`

`act()` will take a *async callback function* which returns the `render()`

```js
await act(async ()=>  render( <Body/> ))
```

> ### Selecting Elements by `data-testid` (small id)
> 
> When you can't find a way to select an element just add the attribute 
> 
>  `<Component data-testid="value" /> `  now you can get this element by using `.getByTestId("value")` in the test case.
> 
> #### To get the quantity of the Components
> 
> Provide the `data-testid` attribute and select them by *All* method and you can get the length of array which is no. of components rendered.

> **Typing into an Input**
> 
> Since we don't have `e` from the browser in `js-dom` we need to explicitly pass the target and value. 
> 
> `fireEvent.change(searchInput,{target: {value:"Value"}})`

    

> **To perform an operation before/After Testing**
> 
> 1. `beforeEach(()=> {})`: Anything inside callback will run before every test
> 
> 2. `beforeAll(()=> {})`: Anything inside callback will run before `describe`  
> 
> 3. similarly we have `afterEach()` and `afterAll()` to for post execution. 

### Test 2.2: Testing whole cart flow

> `Note`
> 
> Don't think that you can check any text using `getByText()` it will only check for text of rendered component specified in the `render()` method.
> 
> `Tip`
> 
> While checking multiple components together (here Header and Menu) use them together in the `render()` Method.
