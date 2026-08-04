import Banner from "@/Components/Banner";
import WhyChooseUs from "@/Components/Choose";
import FeatureFacilitiesPage from "@/Components/FeatureFacility";
import Status from "@/Components/Status";
import Image from "next/image";

export default function Home() {
  return (
    <div>

   <Banner></Banner>
   <FeatureFacilitiesPage/>
   <WhyChooseUs/>
   <Status/>

    </div>
  );
}
