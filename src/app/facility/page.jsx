import Image from "next/image";
import Link from "next/link";


export const metadata={
  title:"all-facility"
}

const FacilitiesPage = async () => {
  const res = await fetch("http://localhost:5000/facility", {
    cache: "no-store",
  });

  const facilities = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">All Facilities</h1>
        <p className="text-gray-500 mt-2">
          Browse and book your favorite sports facilities.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility) => (
          <div
            key={facility._id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-56 w-full">
              <Image
                src={facility.image}
                alt={facility.facilityName}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start gap-3 mb-3">
                <h2 className="text-xl font-bold">{facility.facilityName}</h2>

                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  {facility.facilityType}
                </span>
              </div>

              {/* Fixed Description */}
              <p className="text-gray-600 mb-4 line-clamp-2 min-h-12">
                {facility.description}
              </p>

              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  📍 <span className="font-medium">Location:</span>{" "}
                  {facility.location}
                </p>

                <p>
                  👥 <span className="font-medium">Capacity:</span>{" "}
                  {facility.capacity} Players
                </p>

                <p>
                  🕒 <span className="font-medium">Available:</span>{" "}
                  {facility.availableTimeSlots}
                </p>

                <p>
                  💰 <span className="font-medium">Price:</span> ৳
                  {facility.pricePerHour}/Hour
                </p>
              </div>

              {/* Button Always Bottom */}
              <div className="mt-auto pt-6">
                <Link
                  href={`/facility/${facility._id}`}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition-all duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesPage;
