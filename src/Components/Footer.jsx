"use client";
import {
  Envelope,
  LogoFacebook,
  LogoGithub,
  LogoTelegram,
} from "@gravity-ui/icons";
import { MapPin, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    // <footer className="bg-slate-950 text-white mt-20">
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/assets/images/navbarlogo.png"
              alt="MediQueue Logo"
              width={200}
              height={200}           
            />
            <h1
              className="text-2xl font-extrabold tracking-wide pl-10 
             bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            >
              SportNest
            </h1>
          </div>

          {/* learning service section */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Our Services</h3>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/tutors" className="hover:text-cyan-400 transition">
                  Football Turf Booking
                </Link>
              </li>

              <li>
                <Link href="/tutors" className="hover:text-cyan-400 transition">
                  Cricket Ground Booking
                </Link>
              </li>

              <li>
                <Link href="/tutors" className="hover:text-cyan-400 transition">
                  Tennis Court Booking
                </Link>
              </li>

              <li>
                <Link href="/tutors" className="hover:text-cyan-400 transition">
                  Badminton Court Booking
                </Link>
              </li>

              <li>
                <Link href="/tutors" className="hover:text-cyan-400 transition">
                  Swimming Pool Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact Information</h3>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-cyan-400" />

                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />

                <p>+88019xxxxxxxx</p>
              </div>

              <div className="flex items-center gap-3">
                <Envelope className="w-5 h-5 text-cyan-400" />
                <Link href="https://gamail.com">
                  <p className="flex items-center hover:text-cyan-400">
                    service@nestsport.com
                    <MdOutlineArrowOutward />
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Follow us section */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Follow Us</h3>

            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <LogoFacebook className="w-5 h-5" />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition duration-300"
              >
                <X className="w-5 h-5" />
              </Link>

              <Link
                href="https://telegram.org"
                target="_blank"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition duration-300"
              >
                <LogoTelegram className="w-5 h-5" />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gray-700 transition duration-300"
              >
                <LogoGithub className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-slate-400 mt-6 leading-relaxed">
              Join the SportNest community to discover top sports facilities,
              receive booking updates, and never miss exciting games and special
              offers.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center">
            © {new Date().getFullYear()} NestSport. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <Link
              href="/privacy-policy"
              className="hover:text-cyan-400 transition"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-cyan-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
