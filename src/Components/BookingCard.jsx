"use client"

import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import { defaultRoles } from "better-auth/plugins/organization/access";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ facility }) => {

const {
  facilityName,
  facilityType,
  image,
  description,
  location,
  capacity,
  availableTimeSlots,
  pricePerHour,
  ownerEmail,
} = facility;

    const {
        data: session,     
      } = authClient.useSession(); 
      const user=session?.user;
      console.log( " userId:", user?.id,)
     

//date averter ar jonno
 const [departureDate, setDepartureDate] = useState(null);
 

 const handleBooking = async()=>{
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      facilityId: facility._id,
      facilityName,
      facilityType,
      image,
      description,
      location,
      capacity,
      availableTimeSlots,
      pricePerHour,
      ownerEmail,
      departureDate:new Date(departureDate)
    };
   const res =await fetch("http://localhost:5000/booking",{
    method:"POST",
    headers:{
    "content-type":"application/json"
    },
    body:JSON.stringify(bookingData)
   })

   const data=await res.json()
    toast.success("Booking successful !");
 }



  return (
    <div>
      <div>
        <div className="sticky top-24">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Book This Facility</h2>

            <div className="space-y-5">
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Facility</span>
                <span className="font-semibold">{facilityName}</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Price / Hour</span>

                <span className="font-semibold text-green-600">
                  ৳ {pricePerHour}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Capacity</span>

                <span className="font-semibold">{capacity}</span>
              </div>

              <DateField
                onChange={setDepartureDate}
                className="w-full"
                name="date"
              >
                <Label>Departure Date</Label>
                <DateField.Group>
                  <DateField.Input>
                    {(segment) => <DateField.Segment segment={segment} />}
                  </DateField.Input>
                </DateField.Group>
              </DateField>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Time Slot</span>

                <span className="font-semibold text-right">
                  {availableTimeSlots}
                </span>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold mt-5"
              >
                Book Now
              </button>

              <p className="text-xs text-center text-gray-500">
                Secure booking with instant confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;