# Routing (Rao-t-es)

using `React Router`

To Develop Routes we need Routing Configuration

install `npm i react-router`

## Routing Configuration

`Routing Configuraton` is the information which describes actions on a route

> using `react-router-dom` throws a error of `dom` so use `react-router`

1. `import {createBrowserRouter} from 'react-router-dom'`
   
       1. This the most used and recommended `BrowserRouter`

2. Defining `paths` A object describing location and corresponding action
   
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

3. Pass this configuration for rendering using `RouterProvider` 
   
   ```js
   import {RouterProvider} from 'react-router'
   //While rendering Root
    root.render(<RouterProvider router={appRouter} />)
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

### Rendering the Components using `Child_Routes`

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

here `resId` is referred as `param`  we use hook `useParams` to get all of the params from the `Route` path

> `useParams` is from `react-router` not form react
> 
> Returns a object with key being the params_idenifier and value: param_value in  the path

in our case:

```js
import {useParams} from 'react-router'

const params = useParams()


// Sinceit;s a obkect we destructure it
const {resId} = useParams()
```

pass this `resId` to api url to get the specific data and render the component
