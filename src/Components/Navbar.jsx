"use client";

import Link from "next/link";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemingToggle from "./ThemingToggle";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { signOut } from "better-auth/api";

const Navbar = () => {

      const {
        data: session,     
      } = authClient.useSession(); 
      const user=session?.user;
      // console.log(user);
      
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // signout
  const handleSignOut= async()=>{
    await authClient.signOut();
  }
 

  return (
    <nav
      className="sticky top-0 z-50 bg-white/80
     dark:bg-slate-900/80 backdrop-blur-md border-b
      border-gray-200 dark:border-slate-500"
    >
      <div className="max-w-7xl mx-auto ">
        {/* Navbar */}
        <div className="flex justify-between items-center h-18">
          {/* Logo */}

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/navbarlogo.png"
              width={40}
              height={40}
              alt="Logo"
              className="object-contain"
            />

            <h1
              className="text-3xl font-extrabold tracking-wide
             bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            >
              SportNest
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link className="hover:text-blue-600" href="/">
              Home
            </Link>

            <Link className="hover:text-blue-600" href="/facility">
              All Facilities
            </Link>

            {user && (
              <>
                <Link className="hover:text-blue-600" href="/booking">
                  My Bookings
                </Link>

                <Link className="hover:text-blue-600" href="/add-facility">
                  Add Facility
                </Link>

                <Link
                  className="hover:text-blue-600"
                  href="/manage-my-facilities"
                >
                  Manage My Facilities
                </Link>
              </>
            )}
          </div>

          {/* Right Side */}

          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <Link href="/login">
                  {" "}
                  <Button
                    variant="none"
                    className="text-cyan-500 border border-cyan-500 hover:bg-slate-200"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/signup">
                  <Button color="primary">Register</Button>
                </Link>
              </>
            ) : (
              <div>
                {/* For drop down and avarter */}
                <Dropdown>
                  <Button variant="none">
                    <Avatar>
                      <Avatar.Image alt={user?.name} src={user?.image} />
                      <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold">
                        {user?.name}
                      </span>
                      <span className="text-xs text-gray-500">Student</span>
                    </div>
                  </Button>

                  <Dropdown.Popover>
                    <Dropdown.Menu
                      onAction={(key) => console.log(`Selected: ${key}`)}
                    >
                      <Dropdown.Item id="new-file" textValue="New file">
                        <Link href="/booking">
                          <Label>My Bookings</Label>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item id="copy-link" textValue="Copy link">
                        <Link href="/add-facility">
                          {" "}
                          <Label>Add Facility</Label>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item id="edit-file" textValue="Edit file">
                        <Label>Manage My Facilities</Label>
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="delete-file"
                        textValue="Delete file"
                        variant="danger"
                        onPress={handleSignOut}
                      >
                        <Label>Logout</Label>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </div>
            )}

            {/* theme toggling */}

            <ThemingToggle />
          </div>

          {/* Mobile Button */}

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <Link href="/" className="block px-5 py-4">
            Home
          </Link>

          <Link href="/all-facilities" className="block px-5 py-4">
            All Facilities
          </Link>

          {user && (
            <>
              <Link href="/my-bookings" className="block px-5 py-4">
                My Bookings
              </Link>

              <Link href="/add-facility" className="block px-5 py-4">
                Add Facility
              </Link>

              <Link href="/manage-my-facilities" className="block px-5 py-4">
                Manage My Facilities
              </Link>
            </>
          )}

          {!user ? (
            <div className="p-5 space-y-3">
              <Link href="/login">
                <Button variant="bordered" className="w-full">
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button color="primary" className="w-full">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <div className="p-5">
              <Button
                onClick={handleSignOut}
                variant="danger"
                className="w-full"
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
