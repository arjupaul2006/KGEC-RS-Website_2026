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
  dept?: string;
  email?: string;
  office?: string;
  office_hours?: string;
  biography?: string;
  degrees?: string;
  publications?: string;
  linkedin?: string;
  researchgate?: string;
};

export default function ClientTab({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const name = searchParams?.name ?? "";
  const role = searchParams?.role ?? "";
  const image = searchParams?.image
    ? decodeURIComponent(searchParams.image)
    : "";
  const dept = searchParams?.dept ?? "";
  const email = searchParams?.email ?? "";
  const office = searchParams?.office ?? "";
  const office_hours = searchParams?.office_hours ?? "";
  const biography = searchParams?.biography ?? "";
  const degrees = searchParams.degrees ? JSON.parse(searchParams.degrees) : [];
  const publications = searchParams.publications
    ? JSON.parse(searchParams.publications)
    : [];
    const linkedin = searchParams?.linkedin
    ? decodeURIComponent(searchParams.linkedin)
    : "";
    const researchgate = searchParams?.researchgate
    ? decodeURIComponent(searchParams.researchgate)
    : "";


  const [activeTab, setActiveTab] = useState<TabName>("Biography");

  return (
    <main className="min-h-screen bg-[#0f172a] pb-20">
      <Navbar />
      <ProfileHeader
        name={name}
        role={role}
        image={image}
        dept={dept}
        email={email}
        office={office}
        office_hours={office_hours}
      />
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent
        activeTab={activeTab}
        biography={biography}
        degrees={degrees}
        publications={publications}
        email={email}
        office={office}
        linkedin={linkedin}
        researchgate={researchgate}
      />
    </main>
  );
}
