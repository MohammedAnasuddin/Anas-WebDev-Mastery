import {useEffect, useState} from 'react'
import { RESTAURANT_DATA_URL } from '../utils/constants';

export const useMenuData = (resId)=>{
      const  [resInfo, setResInfo] = useState(null);
useEffect(  ()=>{
     fetchMenu()
    }, [])


    const fetchMenu = async () =>{
        // console.log("REs Endpoint: ",RESTAURANT_DATA_URL+resId)
        const data = await fetch(RESTAURANT_DATA_URL+resId)
        const jsonData = await data.json();
        console.log("Restaurant Data: ", jsonData);
        setResInfo(jsonData.data)
    }


    return resInfo;

}