# Optimization using Code Splitting

## Bundling

Bundling is the process of following imported files and merging them into a single file: a “bundle”.

Merges all the `JS` files into a single JS file

Check: Network tab -> Select JS you will find only a single JavaScript file

> Challenge of Bundling:
> It helps to reduce the no. of calls but size of the JS file grows larger as components / operations of project increases.  Especially if you are including large third-party libraries.
> 
> To solve this issue and use bundling as optimizer we use **Chunking**

## Code Splitting

aka Chunking , dynamic bundling , lazy loading

Code-Splitting is a feature supported by bundlers which can create multiple bundles that can be dynamically loaded at runtime.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user.

> While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

> Rule: A bundle should have enough code for the feature.
> 
> This is to request for the js file does not become so heavy that it takes a lot of time to get into browser.

To perform code splitting using dynamic import() syntax (load the imports only when they are required).

Eg: when we go to a page it's respective JS file should be fetched.

`lazy()`  renders a dynamic import as a regular component. Also `lazy` lets you defer loading component’s code until it is rendered for the first time.

we use `lazy()` from `react`, takes a callback which returns a `import()`

this `import()` takes the path of the component.

> `Note`
> 
> `lazy()`   only supports *default exports*. since it uses `module.default` to access the component. 
> 
> and should be called outside of the component at top level. failing to do so will result in disrupting the bundlers scheduling process.

```js
const Later = lazy(()=> import('path/of/Later'));
```

`lazy()` automatically load the bundle containing the `Later` when this component is first rendered. 

`lazy()` uses a `load` function which is a callback function which returns a promise

The component rendered by `lazy()` is known as **Lazy Component**

when we use this value `Later` we receive a new JS file.

> find this file in `dist` folder

> You will get an Error
> 
> reason: React quickly renders the `Later` component but file containing it's code is on its way hence React suspends the rendering and throws the error.

To solve this error we will use **Suspense**

## Suspense

A component hence name starts with Capital S

The lazy component should then be rendered inside a `Suspense` component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.

`fallback` prop is **temporary placeholder** for the lazy Component until it's renders

```jsx
<Suspense fallback={<Compoent/>}><Later></Suspense>
```

 It's is possible wrap multiple lazy components with a single `Suspense` component.

> `CAUTION`
> 
> React will wait until all the lazy components inside that <Suspense> resolve. Until then, the fallback content is shown.

### Handling Errors

If the lazy component fails to load (for example, due to network failure), it will trigger an error. You can handle these errors to show a nice user experience and manage recovery with `Error Boundaries`

```jsx
import MyErrorBoundary from './MyErrorBoundary';
// other imports

<div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
```

## Types of Code Splitting

### Route-Based Route Splitting

 Most people on the web are used to page transitions taking some amount of time to load.  Hence users are unlikely to be interacting with other elements on the page at the same time.

> `Caution`
> 
> When we try to lazily load all the routes in our app, there is a chance of code duplication in the output bundles. Hence we need to be careful about this when we do code splitting at route level.

```jsx
const Login = lazy(() => import('./Login'));
const Dashboard = lazy(() => import('./Dashboard'));

const App = () => (
  <Router>
    <Suspense>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<Dashboard />} />
      </Routes>
    </Suspense>
  </Router>
);
```

### Component Based Code Splitting

 Provides  control over loading specific components, allowing for more precise optimization.

Ideal choice for lazy loading are large components with significant code or resources, conditional components that are not always needed, and secondary or non-essential features.

```jsx
 <div>
      <button onClick={openModal}>Open Modal</button>
      {showModal && (
        <Suspense fallback={<div>Loading Modal...</div>}>
          <Modal onClose={closeModal} />
        </Suspense>
      )}
    </div>
```
