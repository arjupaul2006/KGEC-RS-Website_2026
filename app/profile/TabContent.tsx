// components/TabContent.tsx
import Biography from "./Biography";
import Degrees from "./Degrees";
import Publications from "./Publications";
import Contacts from "./Contacts";
import { TabName } from "./TabMenu";
import { JSX } from "react";

type TabProps = {
  biography?: string;
};

const TAB_COMPONENTS: Record<TabName, (props: TabProps) => JSX.Element> = {
  Biography: (props) => <Biography biography={props.biography} />,
  Degrees: (props) => <Degrees />,
  Publications: (props) => <Publications />,
  Contacts: (props) => <Contacts />,
};

export default function TabContent({
  activeTab,
  biography,
}: {
  activeTab: TabName;
  biography?: string;
}) {
  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <div className="mt-6">
      <ActiveComponent biography={biography} />
    </div>
  );
}
