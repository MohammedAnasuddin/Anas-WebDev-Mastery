import Contact from "../Contact";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
// test("Contact Page Rendered", ()=>{
//     render(<Contact/>)

//     const heading = screen.getByRole("heading")

//     expect(heading).toBeInTheDocument();

// })

// test("is email present", ()=>{
//     const result = screen.getByText("@gmail.com")

//     expect(result).toBeInTheDocument();
// })


test("are LinkedIn and GitHub button are available",()=>{
    const buttons = screen.getAllByRole("paragraph")

    expect(buttons.length).toBe(2);
})