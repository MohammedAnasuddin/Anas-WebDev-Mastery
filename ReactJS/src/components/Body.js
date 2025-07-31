
import RestaurantCard ,{withBadge} from './RestaurantCard';
import restaurant_List from '../utils/cards_mock_data';
import { useState, useEffect, useContext } from 'react';
import Shimmer_UI from './Shimmer';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserInfo from '../utils/contexts/UserInfo';


const rest_container_styles = {
  height: "70vh",
  margin: "5px",
  display: "flex",
  flexWrap:"wrap",
  justifyContent:"center",
  alignItems:"center",
  padding: "16px",
  borderRadius: "10px",
}
//> This a object passed to style attribute
//Tip: keep all properties in camelCase remove  and also replace ; to ,
//Tip: For example, border-radius turns into borderRadius
//Tip: Also place the values in String

let button_style = {margin:"4px", height:"30px", backgroundColor:"steelblue", color:"whitesmoke", fontWeight:"bolder", border:"0px solid steelblue"};


//> Logic for filtering: 
//> data used to create the UI should change based on the filter then React will only render the available data i,e filtered data
// let filtered_list_restaurants_js = [ 
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '121603',
//       name: 'Kannur Food Point',
//       uuid: '51983905-e698-4e31-b0d7-e376eca56320',
//       city: '1',
//       area: 'Tavarekere',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//       cuisines: ['Kerala', 'Chinese'],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: '₹300 FOR TWO',
//       deliveryTime: 24,
//       minDeliveryTime: 24,
//       maxDeliveryTime: 24,
//       slaString: '24 MINS',
//       lastMileTravel: 3,
//       slugs: {
//         restaurant: 'kannur-food-point-btm',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093',
//       locality: 'SG Palya',
//       parentId: 20974,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '50% off',
//         shortDescriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '50% OFF',
//         shortDescriptionList: [
//           {
//             meta: '',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '3 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '121603',
//         deliveryTime: 24,
//         minDeliveryTime: 24,
//         maxDeliveryTime: 24,
//         lastMileTravel: 3,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '3.9',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//     {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '229',
//       name: 'Meghana Foods',
//       uuid: '4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f',
//       city: '1',
//       area: 'Koramangala',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'xqwpuhgnsaf18te7zvtv',
//       cuisines: [
//         'Biryani',
//         'South Indian',
//       ],
//       tags: [],
//       costForTwo: 50000,
//       costForTwoString: '₹500 FOR TWO',
//       deliveryTime: 16,
//       minDeliveryTime: 16,
//       maxDeliveryTime: 16,
//       slaString: '16 MINS',
//       lastMileTravel: 1.399999976158142,
//       slugs: {
//         restaurant: 'meghana-foods-5th-block-koramangala',
//         city: 'Bangalore',
//       },
//       cityState: '1',
//       address:
//         '124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore',
//       locality: '5th Block',
//       parentId: 635,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '1.3 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '229',
//         deliveryTime: 16,
//         minDeliveryTime: 16,
//         maxDeliveryTime: 16,
//         lastMileTravel: 1.399999976158142,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.4',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '428',
//       name: 'Biryani Pot',
//       uuid: '6db20a8b-dd85-4148-b750-107169f7f826',
//       city: '1',
//       area: 'Btm Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'mdipoyzfzsa7n7igskht',
//       cuisines: ['North Indian', 'Biryani'],
//       tags: [],
//       costForTwo: 50000,
//       costForTwoString: '₹500 FOR TWO',
//       deliveryTime: 19,
//       minDeliveryTime: 19,
//       maxDeliveryTime: 19,
//       slaString: '19 MINS',
//       lastMileTravel: 1.899999976158142,
//       slugs: {
//         restaurant: 'biryani-pot-madiwala-junction-btm',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address: '14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68',
//       locality: 'Maruti Nagar',
//       parentId: 21798,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '20% off',
//         shortDescriptionList: [
//           {
//             meta: '20% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '20% off up to ₹50 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '20% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '20% off up to ₹50 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '1.8 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '428',
//         deliveryTime: 19,
//         minDeliveryTime: 19,
//         maxDeliveryTime: 19,
//         lastMileTravel: 1.899999976158142,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '3.9',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '223',
//       name: 'Truffles',
//       uuid: '8250cc38-4752-4f42-928b-4da5f01e5cbe',
//       city: '1',
//       area: 'Koramangala',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'cd832b6167eb9f88aeb1ccdebf38d942',
//       cuisines: ['American', 'Continental', 'Desserts', 'Italian'],
//       tags: [],
//       costForTwo: 45000,
//       costForTwoString: '₹450 FOR TWO',
//       deliveryTime: 30,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 30,
//       slaString: '30 MINS',
//       lastMileTravel: 1.600000023841858,
//       slugs: {
//         restaurant: 'truffles-ice-spice-5th-block-koramangala',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         "93/A, Appek Building, 'A' Wing,  4th 'B' Cross,  Koramangala Industrial Layout, 5th Block, Koramangala, Bangalore - 560 095",
//       locality: '5th Block',
//       parentId: 218065,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '40% off',
//         shortDescriptionList: [
//           {
//             meta: '40% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹80 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '40% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹80 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6275692~p=4~eid=00000187-2c1c-96f0-0062-eea300b00430',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '1.6 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '223',
//         deliveryTime: 30,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 30,
//         lastMileTravel: 1.600000023841858,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '4.4',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
// ]

const Body=()=> {

const [Component_Data, setComponentData] = useState([]);
const [list_restaurants, setListRestaurants] = useState([])
// const [searchResults, setSearchResults] = useState(filtered_list_restaurants);
const [searchText, setSearchText] = useState("");
// const {user, setUser} = 
const {name:userName, setUserInfo} = useContext(UserInfo);
useEffect( ()=>{
  // console.log("Component Mounted")
   fetchData()
}, [])

const fetchData= async () =>{
const data  = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

const json_data =  await data.json()
const cards_data = json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

setComponentData(cards_data)
setListRestaurants(cards_data)
// console.log(cards_data);


// data.cards[4].card.card.gridElements.infoWithStyle.restaurants
}

const isOnline = useOnlineStatus();

const RCwithBadge = withBadge(RestaurantCard);

if(isOnline==false){
  return (
    <div>
      <h1>No Internet :(</h1>
    <h2>Connect to an Network</h2>
    </div>
  
  )
}

if(list_restaurants.length==0){
  return <Shimmer_UI/>
}

// console.log("Component Data: ", Component_Data)
return (
  <div className="body">
      <div className="search-box">
          <input data-testid="search_inp" type="text" className="search-input" style={{height: "25px", margin:"4px"}} value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button className="search_button" style={button_style} onClick={
            ()=>{
              //> Create a state variable to handle user Input 
              console.log("Searched for: ",searchText)
              const resultsFound= Component_Data.filter((e)=> e.info.name.toLowerCase().includes(searchText.toLowerCase()))
              //- If empty is search " " all the components will load since every name has a space between words in them. 

              console.log("Search Results: ", resultsFound)
              if(resultsFound.length==0){
                alert("N/A")
              }
              else{
                  setListRestaurants(resultsFound)             
              }
            }
          }>Search For It</button>
      </div>
      <div className="search-box">
          <input type="text" className="search-input" style={{height: "25px", margin:"4px"}} value={userName} onChange={(e)=>{
          setUserInfo(e.target.value)
          }}/>
      </div>
      <div className="filter">
        <button className="filter-bth" style={button_style} onClick={()=>{ 
         // Filter Logic
         
          const filtered_data = Component_Data.filter((restaurant)=>{
            return restaurant.info.avgRating>=4.5
          })
          console.log("Search Result: ",filtered_data)
          if(filtered_data.length>0){
            setListRestaurants(filtered_data) 
          }
          }}> 
        Top Rated Restaurants 
        </button>

          <button className="undo" style={button_style} onClick={()=>{
            setListRestaurants(Component_Data);
          }}>Get All</button>
      </div>

      <div className="rest-container" style={rest_container_styles}>
        {/*
        //Tip: Repeating Components should be coded once for modularity */}
        {/* Add Cards here */}
          {/* 
          // > IN JSX, Inline styles are adding as JS object , where key-value are property:value of the CSS
          // > Then the object is given to style attribute using { } (since need to evalaute the object to get the CSS properties)  */}
        {/* <RestaurantCard props={restaurants}/> */}
        {/* <RestaurantCard resData={restaurant_List[0]}/>
        <RestaurantCard resData={restaurant_List[1]}/>
        <RestaurantCard resData={restaurant_List[2]}/>
        <RestaurantCard resData={restaurant_List[3]}/>
        <RestaurantCard resData={restaurant_List[4]}/> */}
        {/* 
        //> props are always creates a new object they are passed as props_obj = { props: Data} */}
      
        {/*
        //. Using iteration 
       */}
        {

          list_restaurants.map(element => <Link style={{ color: 'inherit', textDecoration: 'inherit'}} key={element.info.id} to={"/restaurant/"+element.info.id} >
            {
              (element.info.avgRating >=4.3) ? <RCwithBadge resData={element.info}/> 
              : 
              <RestaurantCard  resData={element.info}/>
              
            }
            {/* <RestaurantCard  resData={element.info}/> */}
            

            </Link>)
        // If the reaaurnat is >4.5 makr irt with crwon 
        
        }

  
     
      </div>

  </div>
)
}





export {Body, rest_container_styles, button_style} 