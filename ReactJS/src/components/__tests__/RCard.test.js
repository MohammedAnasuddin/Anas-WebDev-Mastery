import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import RCard_Mock_Data from "../../mocks/RCardMock.json"
import "@testing-library/jest-dom"

it("Should render Restaurant Card with Given Props", ()=>{
    render(
    <RestaurantCard resData={RCard_Mock_Data}/> )

    const card_heading = screen.getByText("Chinese Wok")

expect(card_heading).toBeInTheDocument();
})

it("Should display badge for high rated restaurant", ()=>{
    // render(
    // <RCwithBadge resData={RCard_Mock_Data}/> )
    // const rating = screen.getByText()
  
})