import { fireEvent, render, screen } from "@testing-library/react"
import RList_Mock from "../../mocks/RList_Mock.json"
import { act } from 'react';
import { Body } from "../Body"
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
    json: () =>{
        return Promise.resolve(RList_Mock)
    }
                
    })    

})

it("Should render Body Component with Search Button", async ()=>{

    await act(async ()=>  render( 
    <BrowserRouter>
    <Body/> 
    </BrowserRouter>

))
const searchB = screen.getByRole("button", {name: "Search For It"})


expect(searchB).toBeInTheDocument();

})
it("Should Search for Restaurant and No. of Cards be equal as expected", async ()=>{

    await act(async ()=>  render( 
    <BrowserRouter>
    <Body/> 
    </BrowserRouter>

))
const searchB = screen.getByRole("button", {name: "Search For It"})
const searchInput = screen.getByTestId("search_inp");

fireEvent.change(searchInput,{target: {value:"Wok"}})
fireEvent.click(searchB)

const Rcards = screen.getAllByTestId("Rcard")

expect(Rcards.length).toBe(1);

})


it("Top Rated Restaurants should return 2 Restaurants", async ()=>{
        await act(async ()=>  render( 
    <BrowserRouter>
    <Body/> 
    </BrowserRouter>

))

const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"})
fireEvent.click(topRatedBtn);

const result = screen.getAllByTestId("Rcard")
expect(result.length).toBe(2);
})