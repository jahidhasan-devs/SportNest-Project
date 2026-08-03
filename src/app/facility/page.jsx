
import AllFacilityCard from "@/Components/AllFacilityCard";
import { Button, Label, SearchField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";


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
      <AllFacilityCard facilities={facilities}></AllFacilityCard>
   
    </section>
  );
};

export default FacilitiesPage;
