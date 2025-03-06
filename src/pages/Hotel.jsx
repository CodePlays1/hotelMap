import React from 'react';
import SideBar from '../components/SideBar'; // Import the Sidebar component
import Map from '../components/HotelMap';
export default function Hotel() {
  return(
<div className='flex w-[1100px] mx-auto items-center justify-center h-[100vh]' >
   <SideBar  /> 
   <Map />

</div>
  )
}
