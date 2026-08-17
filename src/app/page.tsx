import { Hero } from "@/components/sections/Hero";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { ServiceList } from "@/components/sections/ServiceList";
import { PriceTeaser } from "@/components/sections/PriceTeaser";
import { WarrantyNote } from "@/components/sections/WarrantyNote";
import { ShippingInfo } from "@/components/sections/ShippingInfo";
import { StoreLocation } from "@/components/sections/StoreLocation";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 sm:px-6 sm:py-14">
      <Hero />
      <ContactStrip />
      <ServiceList />
      <PriceTeaser />
      <WarrantyNote />
      <ShippingInfo />
      <StoreLocation />
    </div>
  );
}
