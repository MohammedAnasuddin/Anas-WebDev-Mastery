import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from '../../utils/store'
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("Should render Header with Login Button", ()=>{
 render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
 )

const button = screen.getByRole("button",{name:"Login"})
expect(button).toBeInTheDocument(); 

})

it("Does Header has Cart", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
 )

const result = screen.getByText(/Cart/)
expect(result).toBeInTheDocument(); 
})


it("Does changes Login to Logout on Click", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
 )

const loginB = screen.getByRole("button", {name: "Login"})

fireEvent.click(loginB);

const logoutB = screen.getByRole("button", {name: "Logout"})
expect(logoutB).toBeInTheDocument(); 
})