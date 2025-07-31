import { render, screen, fireEvent } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import Menu_Mock_Data from "../../mocks/Menu_Mock_Data.json"
import appStore from "../../utils/store"
import { Provider } from "react-redux"
import {act} from 'react';
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router"
import "@testing-library/jest-dom";
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(Menu_Mock_Data)
        }
    })
})

it("Should load Restaurant Menu ", async()=>{
    await act(async ()=>{
        return render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
            </BrowserRouter>
        )
    })

    const heading = screen.getByText("We Love To Serve:");
    // fireEvent.click(category);

    // const dishes = screen.getAllByTestId("Dcard");
    // expect(dishes.length).toBe(3)

    // const addBtns = screen.getAllByRole("button", {name:"Add +"})
    // fireEvent.click(addBtns[0]);

    // const cartUpdate = screen.getByText("Cart- 1 items")

    expect(heading).toBeInTheDocument()
})


it("Should Update the cart ", async()=>{
    await act(async ()=>{
        return render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
            </BrowserRouter>
        )
    })

    const category = screen.getByText("Pot Rice");
    fireEvent.click(category);

    // const dishes = screen.getAllByTestId("Dcard");
    // expect(dishes.length).toBe(3)

    const addBtns = screen.getAllByRole("button", {name:"Add +"})
    fireEvent.click(addBtns[0]);

    const cartUpdate = screen.getByText("Cart- 1 items")

    expect(cartUpdate).toBeInTheDocument()
    
    fireEvent.click(cartUpdate)
    const bill_items = screen.getAllByTestId("order_item")

    expect(bill_items.length).toBe(1);
})