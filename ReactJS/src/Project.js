import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import {Body}  from './components/Body';
import  About  from './components/About';
import { BrowserRouter, createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import Route_Error from "./components/Route_Error";
import RestaurantMenu from './components/RestaurantMenu';
const root = ReactDOM.createRoot(document.getElementById("root"));

/* 
. Project Structure
 - Header
  > Logo
  > nav Links
- Body
  >Search Bar
  > Cards_Container
    > Cards
       >Img
       >name of the Restaurat, Rating
       >
- Footer
  > Copyright
  > Links
  > Address
  > Contact

*/

//Tip: Always Start to build the Layout with Top Level Elements
//> We need to define elements before we can use them hence layout is at bottom








//. props
//> passing data to the Compoents 
//> Treat them as Parameters since components are functions




const AppLayout = ()=>(
    <div id="app"> 
    <Header/>
    <Outlet/>
    </div>
)


const appRouter = createBrowserRouter([

  {
    path: "/",
    element:<AppLayout/>,
    errorElement: <Route_Error/>,
    children: [

    {
        path:"/",
        element:<Body/>
    },
    {
        path:"/about",
        element: <About />,
        children: [
          {
            path:"child",
            element: <h2>Child of About Route with Relative Path(no slash / )</h2>
          },
         
        ]
    },
    {
            path:"/about/child",
            element: <h2>Absolute Parent  Route</h2>
    },
    {
      path:"/restaurant/:resId",
      element:<RestaurantMenu/>
    },
    {
      path:"services",
      element:<h1>Services</h1>
    }


    ]
  }
  

])


root.render(<RouterProvider router={appRouter} />);

