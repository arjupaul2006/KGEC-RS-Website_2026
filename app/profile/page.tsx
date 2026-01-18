import ClientTabs from "./PageClient";

interface ProfileProps {
  name: string;
  role: string;
  image?: string;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<ProfileProps>;
}) {

  const params = await searchParams;

  return <ClientTabs searchParams={params} />;
}
