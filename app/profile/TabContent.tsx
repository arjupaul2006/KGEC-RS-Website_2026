// components/TabContent.tsx
import Biography from "./Biography";
import Degrees from "./Degrees";
import Publications from "./Publications";
import Contacts from "./Contacts";
import { TabName } from "./TabMenu";
import { JSX } from "react";

const TAB_COMPONENTS: Record<TabName, JSX.Element> = {
  Biography: <Biography />,
  Degrees: <Degrees />,
  Publications: <Publications />,
  Contacts: <Contacts />
};

export default function TabContent({ activeTab }: { activeTab: TabName }) {
  return <div className="mt-6">{TAB_COMPONENTS[activeTab]}</div>;
}
