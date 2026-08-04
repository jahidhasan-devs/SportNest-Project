"use client";

import { Card, CardContent } from "@heroui/react";
import { Building2, CalendarCheck2, Users, Trophy } from "lucide-react";

const stats = [
  {
    number: "50+",
    title: "Sports Facilities",
    icon: Building2,
  },
  {
    number: "5K+",
    title: "Bookings Completed",
    icon: CalendarCheck2,
  },
  {
    number: "2K+",
    title: "Active Players",
    icon: Users,
  },
  {
    number: "99%",
    title: "Customer Satisfaction",
    icon: Trophy,
  },
];

const Status = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
         

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Trusted by
            <span className="text-cyan-600"> Sports Enthusiasts</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
            SportNest connects players with premium sports facilities through a
            fast, secure, and reliable booking experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Card
                key={index}
                className="group rounded-3xl border-0 bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <CardContent className="py-10 px-6 text-center">
                  <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="mt-7 text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                    {stat.number}
                  </h3>

                  <p className="mt-3 text-base font-medium text-gray-600 dark:text-gray-300">
                    {stat.title}
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

export default Status;
