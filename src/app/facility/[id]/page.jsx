
import Image from "next/image";
import { FiMapPin, FiClock, FiUsers, FiMail } from "react-icons/fi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import BookingCard from "@/Components/BookingCard";
// import BookingCard from "@/components/BookingCard";

const FacilityDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/facility/${id}`, {
    cache: "no-store",
  });

  const facility = await res.json();

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

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Hero Image */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={image}
            alt={facilityName}
            width={1600}
            height={900}
            priority
            className="w-full h-[280px] md:h-[420px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Title */}
        <div className="mt-8">
          <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
            {facilityType}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            {facilityName}
          </h1>

          <div className="flex items-center gap-2 mt-4 text-gray-500">
            <FiMapPin className="text-lg" />
            <span>{location}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-10 mt-10">
          {/* Left */}
          <div className="lg:col-span-2">
            {/* Information Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Capacity */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <FiUsers className="text-2xl text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">Capacity</h3>
                    <p className="text-gray-500">{capacity} People</p>
                  </div>
                </div>
              </div>

              {/* Time */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                    <FiClock className="text-2xl text-green-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">Available Time</h3>
                    <p className="text-gray-500">{availableTimeSlots}</p>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                    <FaBangladeshiTakaSign className="text-2xl text-yellow-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">Price Per Hour</h3>

                    <p className="text-2xl font-bold text-green-600">
                      ৳ {pricePerHour}
                    </p>
                  </div>
                </div>
              </div>

              {/* Owner */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                    <FiMail className="text-2xl text-purple-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">Owner Email</h3>

                    <p className="text-gray-500 break-all">{ownerEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mt-8">
              <h2 className="text-3xl font-bold mb-5">About This Facility</h2>

              <p className="text-gray-600 leading-8 text-justify">
                {description}
              </p>
            </div>
          </div>

          {/* Right Side */}

          {/* <BookingCard facility={facility} /> */}
          <BookingCard facility={facility} />
        </div>
      </div>
    </div>
  );
};

export default FacilityDetailsPage;
