"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const AddFacilityPage = () => {

       const {
          data: session,     
        } = authClient.useSession(); 
        const user=session?.user;
     
   const onSubmit=async(e)=>{
    e.preventDefault()
    const formData=new FormData(e.currentTarget)
    const facility= Object.fromEntries(formData.entries())
    // console.log(facility);
   const res= await fetch("http://localhost:5000/facility",{
   method:"POST",
   headers:{
    'content-type':'application/json'
   },
   body:JSON.stringify(facility)

   })
    const data=await res.json()
    // console.log(data);
    toast.success("data is added !");
    redirect("/facility")
    
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Add New Facility</h1>
          <p className="text-default-500 mt-3">
            Create a new sports facility for players to book online.
          </p>
        </div>

        {/* Card */}
        <Card className="rounded-3xl shadow-2xl border border-default-200">
          <form 
         onSubmit={onSubmit}
          className="p-4 md:p-8 space-y-6">
            {/* Form Heading */}
            <div>
              <h2 className="text-2xl font-semibold">Facility Information</h2>
              <p className="text-default-500 mt-1">
                Fill in all required information before submitting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Facility Name */}
              <div className="md:col-span-2">
                <TextField name="facilityName" isRequired>
                  <Label>Facility Name</Label>
                  <Input
                    placeholder="Elite Football Turf"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Facility Type */}
              <div>
                <Select
                  name="facilityType"
                  isRequired
                  placeholder="Select Facility Type"
                >
                  <Label>Facility Type</Label>

                  <Select.Trigger className="rounded-xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Football">
                        Football
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Cricket">
                        Cricket
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Badminton">
                        Badminton
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Basketball">
                        Basketball
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Swimming">
                        Swimming
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Tennis">
                        Tennis
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="pricePerHour" type="number" isRequired>
                <Label>Price Per Hour (৳)</Label>
                <Input type="number" placeholder="500" className="rounded-xl" />
                <FieldError />
              </TextField>

              {/* Location */}
              <TextField name="location" isRequired>
                <Label>Location</Label>
                <Input placeholder="Uttara, Dhaka" className="rounded-xl" />
                <FieldError />
              </TextField>

              {/* Capacity */}
              <TextField name="capacity" type="number" isRequired>
                <Label>Capacity</Label>
                <Input type="number" placeholder="22" className="rounded-xl" />
                <FieldError />
              </TextField>

              {/* Time Slots */}
              <div className="md:col-span-2">
                <TextField name="availableTimeSlots" isRequired>
                  <Label>Available Time Slots</Label>
                  <Input
                    placeholder="8 AM - 10 AM, 10 AM - 12 PM"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <TextField name="image" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://i.ibb.co/xxxxx/facility.jpg"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Owner Email */}
              <div className="md:col-span-2">
                <TextField name="ownerEmail" isRequired>
                  <Label>Owner Email</Label>
                  <Input
                    value={user?.email}
                    readOnly
                    className="rounded-xl bg-default-100"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe your sports facility..."
                    className="rounded-2xl"
                    rows={3}
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              color="primary"
              className="w-full h-10 rounded-xl text-base font-semibold"
            >
              Add Facility
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddFacilityPage;
