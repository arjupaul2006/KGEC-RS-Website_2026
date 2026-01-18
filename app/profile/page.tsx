import { degrees } from "framer-motion";
import ClientTabs from "./PageClient";

interface ProfileProps {
  name: string;
  role: string;
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
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<ProfileProps>;
}) {

  const params = await searchParams;
  

  return <ClientTabs searchParams={params} />;
}
