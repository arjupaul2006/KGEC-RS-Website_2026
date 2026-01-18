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
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<ProfileProps>;
}) {

  const params = await searchParams;

  return <ClientTabs searchParams={params} />;
}
