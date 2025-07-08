import react from "react";
import {rest_container_styles ,button_style} from './Body';
import RestaurantCard from "./RestaurantCard";

const element = {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '121603',
      name: '',
      uuid: '51983905-e698-4e31-b0d7-e376eca56320',
      city: '1',
      area: '',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: '',
      cuisines: [],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: '24 MINS',
      lastMileTravel: 3,
      slugs: {
        restaurant: '',
        city: '',
      },
      cityState: '1',
      address:
        '6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093',
      locality: 'SG Palya',
      parentId: 20974,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: '',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 3700,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 3700,
        message: '',
        title: 'Delivery Charge',
        amount: '3700',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '121603',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  }

  const Shimmer_Card=()=>{
   
    return (

    <div className="rest-card" style={{backgroundColor:"lightgray"}}>
     <img src={null} style={{width: "100%",height:"50%", borderRadius:"15px 15px 0px 0px"}}/>
     <div className="description">
      <h3 style={{lineHeight:"20px"}}>{}</h3>
      <h4 style={{fontWeight:'lighter', color:'GrayText'}}>{``}</h4>
      
      <p style={{fontWeight: "bold", lineHeight:"20px"}}> <span style={{color:"darkslategray", fontWeight:"bolder",}}> {}</span> </p>
      <p style={{fontWeight: "bold"}}> <span style={{color:"goldenrod", fontWeight:"bolder"}} >{}</span> </p>
     </div>
  </div>
  
  )
    
  }

const Shimmer_UI = ()=>{
return(
    <div className="rest-container" style={rest_container_styles} >
      <Shimmer_Card></Shimmer_Card>
      <Shimmer_Card></Shimmer_Card>
      <Shimmer_Card></Shimmer_Card>
      <Shimmer_Card></Shimmer_Card>
      <Shimmer_Card></Shimmer_Card>
      <Shimmer_Card></Shimmer_Card>
      <Shimmer_Card></Shimmer_Card>
      <Shimmer_Card></Shimmer_Card>
    </div>
)
}
export default Shimmer_UI;