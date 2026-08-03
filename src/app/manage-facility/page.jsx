import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button, Card, Chip } from "@heroui/react";
import { FiEdit2, FiTrash2, FiMapPin, FiUsers, FiClock } from "react-icons/fi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { DeleteMyAddFacility } from "@/Components/DeleteMyFacility";
import EditModals from "@/Components/EditModals";

const ManageFacility = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/facility/email/${user.email}`,
    {
      cache: "no-store",
    },
  );

  const facilities = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-4xl font-bold ">Manage My Facilities</h1>

        <p className=" text-default-500 mt-1">
          Update or remove your sports facilities anytime.
        </p>
      </div>

      {facilities.length === 0 ? (
        <Card className="p-10 text-center">
          <h2 className="text-2xl font-bold">No Facilities Found</h2>

          <p className="text-default-500 mt-2">
            You haven't added any facilities yet.
          </p>

          <Link href="/add-facility">
            <Button color="primary" className="mt-6">
              Add Facility
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-8">
          {facilities.map((facility) => (
            <Card
              key={facility._id}
              className="overflow-hidden rounded-2xl shadow-lg border border-default-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative lg:w-[380px]">
                  <Image
                    src={facility.image}
                    alt={facility.facilityName}
                    width={400}
                    height={300}
                    className="w-full h-72 lg:h-full object-cover"
                  />

                  <Chip color="primary" className="absolute top-4 left-4">
                    {facility.facilityType}
                  </Chip>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 relative">
                  {/* Action Buttons */}
                  <div className="absolute top-5 right-5 flex gap-2">
                    <EditModals facility={facility}></EditModals>
                    <DeleteMyAddFacility
                      facility={facility}
                    ></DeleteMyAddFacility>
                  </div>

                  <h2 className="text-3xl font-bold">
                    {facility.facilityName}
                  </h2>

                  <p className="mt-3 text-default-500 leading-7">
                    {facility.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-5 mt-8">
                    <div className="flex items-center gap-3">
                      <FiMapPin className="text-blue-500 text-xl" />
                      <div>
                        <p className="text-sm text-default-500">Location</p>
                        <p className="font-medium">{facility.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiUsers className="text-green-500 text-xl" />
                      <div>
                        <p className="text-sm text-default-500">Capacity</p>
                        <p className="font-medium">
                          {facility.capacity} Players
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiClock className="text-orange-500 text-xl" />
                      <div>
                        <p className="text-sm text-default-500">Time Slot</p>
                        <p className="font-medium">
                          {facility.availableTimeSlots}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaBangladeshiTakaSign className="text-emerald-600 text-xl" />
                      <div>
                        <p className="text-sm text-default-500">Price</p>
                        <p className="text-xl font-bold text-emerald-600">
                          {facility.pricePerHour} / Hour
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default ManageFacility;
