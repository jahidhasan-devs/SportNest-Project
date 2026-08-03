import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FiCalendar, FiClock } from "react-icons/fi";
import { BookingDeletePage } from "@/Components/BookingDelete";

const BookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
    cache: "no-store",
  });

  const bookings = await res.json();
//   console.log("Bookings data check",bookings);

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-8">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center">
          <h2 className="text-2xl font-semibold">No Booking Found</h2>
          <p className="text-gray-500 mt-2">
            You haven't booked any sports facility yet.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="relative md:w-72 h-65">
                  <Image
                    src={booking.image}
                    alt={booking.facilityName}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">
                         {booking.facilityName}
                      </h2>

                      <p className="text-blue-600 font-medium mt-1">
                        {booking.facilityType}
                      </p>
                    </div>

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        booking.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : booking.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {booking.status || "Pending"}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-5 mt-6">
                    <div>
                      <p className="text-gray-500 flex items-center gap-2">
                        <FiCalendar />
                        Booking Date
                      </p>

                      <h3 className="font-semibold">
                        {new Date(booking.departureDate).toLocaleDateString()}
                      </h3>
                    </div>

                    <div>
                      <p className="text-gray-500 flex items-center gap-2">
                        <FiClock />
                        Time Slot
                      </p>

                      <h3 className="font-semibold">
                        {booking.availableTimeSlots}
                      </h3>
                    </div>

                    <div>
                      <p className="text-gray-500">Price</p>

                      <h3 className="flex items-center font-semibold text-green-600">
                        <FaBangladeshiTakaSign />
                        {booking.pricePerHour}
                      </h3>
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                  <BookingDeletePage bookingId={booking._id}></BookingDeletePage>
                
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingPage;
