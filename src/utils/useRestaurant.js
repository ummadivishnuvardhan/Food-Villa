import { useState } from "react";

const useRestaurant=()=>{
  const [restaurant,setRestaurant]=useState(null);
 
  //Get data from API

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=3241&catalog_qa=undefined&query=Biryani&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
//return restaurant data
  
}

export default useRestaurant;