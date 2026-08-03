"use client";

import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    id: 2,
    title: "Play Together. Stay Active. Win Together.",
    description:
      "Find top-rated sports venues near you, check real-time availability, and enjoy hassle-free online booking.",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "Your Ultimate Sports Booking Platform",
    description:
      "Manage your bookings, explore new facilities, and experience a smarter way to play your favorite sports.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 1,
    title: "Book Premium Sports Facilities Anytime",
    description:
      "Discover football turfs, badminton courts, tennis courts, and more. Reserve your favorite venue in just a few clicks.",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1600&q=80",
  },
];

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="w-full ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            enabled: false,
          }}
          breakpoints={{
            768: {
              navigation: {
                enabled: true,
              },
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          className="overflow-hidden"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative  h-[70vh] sm:h-[80vh] md:h-[90vh] bg-cover  object-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full items-center justify-center text-center">
                  <div className="max-w-4xl px-6">
                    <span className="mb-4 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                      ⚽ Welcome to SportNest
                    </span>

                    <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mb-8 text-lg text-gray-200 md:text-xl">
                      {slide.description}
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                      <Link href="/facilities">
                        <Button
                          color="primary"
                          size="lg"
                          className="font-semibold"
                        >
                          Explore Facilities
                        </Button>
                      </Link>

                      <Link href="/bookings">
                        <Button
                          variant="bordered"
                          size="lg"
                          className="border-white text-white hover:bg-white hover:text-black"
                        >
                          My Bookings
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Banner;    
