// import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const FeatureFacilitiesPage = async () => {

  // const {token}=await auth.api.getToken({
  //   headers:await headers()
  // })

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facility`, {
    cache: "no-store",
  });

  const facilitiesData = await res.json();
  const facilities = facilitiesData.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto pt-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Feature Facilities</h1>
        <p className="text-gray-500 mt-2">
          Browse and book your favorite sports facilities.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility) => (
          <div
            key={facility._id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={facility.image}
                alt={facility.facilityName}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
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

              <div className="mt-auto pt-6">
                <Link href={`/facility/${facility._id}`}>
                  <Button variant="ghost" className="mt-1 text-cyan-500">
                    Book Now
                    <LuExternalLink />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureFacilitiesPage;
