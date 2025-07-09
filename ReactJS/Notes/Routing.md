# Routing (Rao-ting)

Routing is the process of redirecting (moving) users to different pages based on their actions or requests.

Routing is implemented using `Routes` 

- **Routes** are Objects which defines **mappings** between a **URL path** (like `/about`, `/contact`, `/products/42`) and the **component or page** that should be displayed for that path.

- **Routing** is the mechanism that **listens to URL changes** and **renders the right component** based on these routes

In traditional multi-page web applications, each page corresponds to a different URL, and navigation between pages triggers a request to the server for a new HTML page. This leads to Slow navigation → entire HTML, CSS, JS are reloaded even if 90% is the same. (You can notice there URL's ends with .html )

However, in SPAs (Single Page Application) built with React.js, all content is rendered on a single HTML page. When the URL changes, the app dynamically **renders the matching component***  without reloading the whole page.

>  Routing renders the component which is mapped in the route with the current URL.

## Types of Routing:

Routing is classified based on **where it is handled**

1. **Client-Side Routing:**  if handled in the browser using  `JS`
   
   1. App listens to URL changes and updates the view **without reloading the page** Eg: SPA

2. **Server-Side Routing:** Server handles the Routing.
   
   1. Each URL change sends a **new request**  to server and it responds with a new HTML page.

## Implementing Routing

React implements Routing using External Library, `React-Router`

> **Why can't React Handle the Routing?**
> 
> React only deals with UI layer of the web project i.e, to render and update the components. Where as Routing involves:
> 
> 1.   Tracking URL Changes
> 
> 2. Mapping URL's to components
> 
> This is the work of application's architecture layer and `React` does not interfere in that. 

> ### React-Router
> 
> - JS Library to implement Routing in a React App. 
> 
> - It's developed by Shopify.
> 
> - P.S: It logo has 6  map-markers connected as curve stating it can handle "Complex Routes"

To Develop Routes we need Routing Configuration

### Routing Configuration

`Routing Configuraton` defines the `routes` i.e,  Defining which **URL paths** should map to which **React components or pages**

Due to the decoupling of fetching and rendering in the design of the data APIs, **you should create your router outside of the React tree (before rendering the `root` element ) with a statically defined set of routes.**

> using `react-router-dom` throws a error of `dom` so use `react-router`

#### Creating Routes

Routes are objects passed to the router creation functions.

Route Object has below properties:

```js
 interface RouteObject {
  path?: string; //
  index?: boolean; //
  children?: RouteObject[]; //
  caseSensitive?: boolean;
  id?: string;
  loader?: LoaderFunction; //
  action?: ActionFunction; //
  element?: React.ReactNode | null; //
  hydrateFallbackElement?: React.ReactNode | null;
  errorElement?: React.ReactNode | null; //
  Component?: React.ComponentType | null;
  HydrateFallback?: React.ComponentType | null;
  ErrorBoundary?: React.ComponentType | null;
  handle?: RouteObject["handle"];
  shouldRevalidate?: ShouldRevalidateFunction;
  lazy?: LazyRouteFunction<RouteObject>; //
}

//Important properties are marked by '//'
```

##### Route Object Properties:

1. **path**: pattern to match against the URL to determine the `Route` 
   
   **Dynamic Segments**: If a path segment starts with `:` then it becomes a "dynamic segment".
   
   ```js
   path="/teams/:teamId"
   // can have multiple dynamic segements
   path="/c/:categoryId/p/:productId"
   ```
   
   When the `path` of route matches the URL, the dynamic segment will be parsed from the URL and provided as `params` to other router APIs.
   
   we use hook `useParams` to get all of the `params` from the `Route` path
   
   > `useParams` is from `react-router` not form react
   > 
   > Returns a object with key being the `params` and value: `param_value` in the matched URL.
   
   ```js
   import {useParams} from 'react-router'
   
   const params = useParams()
   // Since it;s a object we can destructure it
   const {param1, param2, ..., paramN} = useParams()
   ```

**Optional Segments**:  make a route segment optional by adding a `?` to the end of the segment.

```js
path ="/users/:id?"
// /users and /users/42 will lead to same output
```

   **Splats**:  If a route path pattern ends with `/*` then it will match any characters following the `/`, including other `/` characters. Splats are aka  catchall or star segments 

> Splat: sound a something wet (drops of water) hitting the surface.
> 
> since `/*` is used where `*` resembles the shape of water drop hitting the surface hence these are called `splats`

```js
 path="/files/*"
 // files/a and files/b/c will lead to same output
```

 **Layout Routes**:  Omitting the path makes this route a "layout route". 

Its job is just to **wrap child routes** with shared layout (e.g., navbar/sidebar)

- A **layout route** has **no `path`**, only an `element` with an `<Outlet />`

- The `<Outlet />`is a placeholder where **child routes** will render.
2. **loader**:  loader is called before the route renders and provides data for the element through `useLoaderData`.
   
       Use when without the data, the page **can’t really show anything useful.**
   
   > use `useEffect` for optional data required by the component.

3. **action**: route action is called when a submission is sent to the route.
   
   This is when the below is triggered:
   
   - `<Form method="post">...</Form>`
   
   - `useSubmit()`
   
   - `fetcher.submit()`

4. **element:** The React Element/Component to render when the route matches the URL.

5. **errorElement**: When a route throws an exception while rendering, in a `loader` or in an `action`, this React Element/Component will render instead of the normal `element`/`Component`.

> **JSX way to create Routes**
> 
> `<Route/>` can be use dot create a route where all the properties will become the attributes.
> 
> For multiple routes place all the `<Route/>` under `<Routes> </Routes>`



#### Creating the Router

`Router` is an object which responsible for implementing `Routing Mechanism`

The recommended way to create an `Router` is using `createBrowserRouter`

###### `createBrowserRouter`

Takes An array of `Route` objects with nested routes on the `children` property. as Property.

`import {createBrowserRouter} from 'react-router'`

    1. This the most used and recommended `BrowserRouter`

Defining `paths` A object describing location and corresponding action

```js
const appRouter = createBrowserRouter( [
{
   path: "/", //Intial Load ->  Homepage 
   element: <Component/>
},
{
   path: "/about",
   element: <About/>  
}    

])
```

#### Rendering using Route

##### If `createBrowserRouter` is used:

Render the `Router Provider` passing the Routing Configuration value to its attribute `router`.

```js
import {RouterProvider} from 'react-router'

const appRouter = createBrowserRouter( [
{
   path: "/", //Intial Load ->  Homepage 
   element: <Component/>
})


//While rendering Root
 root.render(<RouterProvider router={appRouter} />)
```

###### if `JSX (<Route/>)` are used:

Render `BrowserRouter` which contains all the route elements.

Note: It does not supports `loader`, `action`

```js
root.render(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
)
```



`react-router-dom` aka `rrd` handles the invalid  paths by itself ( 404 NOT Found) 

## Handling Invalid Paths and Errors:

1. Modify the router by adding `errorElement: <Error_Display_Compoent /> ` property.

```js
//At Top Level of rendering

const appRouter = createBrowserRouter( [
{
 path: "/", //Intial Load -> Homepage aka Root Route
element: <Component/>,
errorElement: <Error_Display_Component/>
},
{
 path: "/about",
 element: <About/>  
}

]) 
```

2. using `useRouteError` Hook for better handling of the error. Returns a object with `Error` information.
   
   ```js
   import {useRouterError} from 'react-router'
   
   const Error_Display_Component = ()=>{
   cosnt err = useRouterError()
   return(
      <div>
          <h1> OOPS Not FOUND </h1>
          <h2>{err.status}</h2>
          <h2>{err.statusText} </h2>     
      </div>
   )    
   
   }         
   ```

## Children Routes:

Used to fix components on a page while routing.

> A header should be visible on every page of the website

Used to push children according to the `route`

### Configuration for Children Routes:

use the `children` property in the configuration object. which takes the same `path` configuration 

```js
  const appRouter = createBrowserRouter([
    {
        path: "/", //Root Route
        element: <Component/>,
        errorElement: <Error_Display_Component/>,
        children: [
                  {
                     path: "/about",
                     element: <About/>  
                   },
                  {
                     path: "/contact",
                     element: <Contact/>  
                   }

  ]
    }


]) 
```

child routes are *relative* to the parent’s path

The path of the parent is automatically included in the child, so this config creates both `"/parent"` and `"/parent/child"` URLs.

hence in the `path` of child route don't specify the `/`.



### Rendering the Components using `Child_Routes`

Child routes are rendered through the `<Outlet/>` in the parent route.

`<Outlet/>` is an React Element used to Renders the matching child route component of a parent route.

we use `Outlet` component: According to the path this `Outlet` component  will be filled( more like replaced ) with the `Component` associate with the path( `element property`) in the `path_configuration`

```js
import {Outlet } from 'react-router';

const AppLayout = ()=>(
    <div id="app"> 
    <Header/>
    <Outlet/>
    </div>
)    
```

## Navigating to Different Route

> **Don't use  <a> tags for Navigation**
> 
> Because they cause to reload (re-render) the whole page.

In `React` we can navigate to a new page without reloading the whole page.

### Navigating using `react-router`

    `<Link/>`  is a enhanced `<a href>` wrapper to **enable navigation with client-side routing**.

   import `Link` (this has same syntax as `<a>`)  but uses `to` rather than `href`

```jsx
<Link to="path"> text </Link> 
```

This does not reloads the page. but just refreshes the components hence `React` is known as `Single page Application`

To remove default decoration of `Link` use the below styling:

```js
style={{ color: 'inherit', textDecoration: 'inherit'}}`
```

`Link` is wrapper of `<a>` which uses `<a>` Behind the scenes.

## Types of Routing

### 1. Client Side Routing:

 All the components are loaded and just refreshed based on the `route` . This leads to React developing `SPA`

### 2. Server Side Routing

        Gets the required `HTMl`  by making a network request to the server on that `Route`

## Dynamic Routing:

 Separate `Route` for Each Component

#### Configuring Dynamic Path:

use `:/id`  use : and specify the identifier , making a Dynamic URL 

```js
  {
      path:"/restaurant/:resId",
      element:<RestaurantMenu/>
    }    
```

> Tip: Speak while you code it will be easier to explain the code during the interview

here `resId` is referred as `param`  

pass this `resId` to api url to get the specific data and render the component
