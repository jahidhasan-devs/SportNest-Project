"use client";

import { Card, CardContent } from "@heroui/react";
import { CalendarCheck, MapPin, ShieldCheck, Trophy } from "lucide-react";

const features = [
  {
    title: "Instant Facility Booking",
    description:
      "Book football turfs, cricket grounds, badminton courts, and more in just a few clicks.",
    icon: CalendarCheck,
  },
  {
    title: "Premium Sports Venues",
    description:
      "Discover high-quality sports facilities with detailed information, pricing, and availability.",
    icon: Trophy,
  },
  {
    title: "Secure & Trusted Platform",
    description:
      "Your bookings are protected with secure authentication and reliable booking management.",
    icon: ShieldCheck,
  },
  {
    title: "Convenient Locations",
    description:
      "Find nearby sports facilities and enjoy hassle-free booking at your preferred location.",
    icon: MapPin,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm mb-4">
            Why Choose SportNest
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            The Smart Way to Book
            <span className="text-cyan-600"> Sports Facilities</span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-8">
            SportNest makes sports facility booking fast, secure, and
            convenient. Discover premium venues, reserve your preferred time
            slot, and enjoy a seamless booking experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={index}
                className="group border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white dark:bg-slate-900"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mt-7 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-7">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
