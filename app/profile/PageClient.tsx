"use client";

// app/page.tsx
import Navbar from "./Navbar";
import ProfileHeader from "./ProfileHeader";
import TabMenu, { TabName } from "./TabMenu";
import { StaticImageData } from "next/image";
import React from "react";
import TabContent from "./TabContent";
import { useState } from "react";

type SearchParams = {
  name?: string;
  role?: string;
  image?: string;
};

export default function ClientTab({
  searchParams,
}: {
  searchParams: SearchParams;
}) {

  const name = searchParams?.name ?? "";
  const role = searchParams?.role ?? "";
  const image = searchParams?.image ? decodeURIComponent(searchParams.image) : "";
  const [activeTab, setActiveTab] = useState<TabName>("Biography");

  console.log(name, role, image);
  return (
    <main className="min-h-screen bg-[#0f172a] pb-20">
      <Navbar />
      <ProfileHeader name={name} role={role} image={image} />
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent activeTab={activeTab} />
    </main>
  );
}
