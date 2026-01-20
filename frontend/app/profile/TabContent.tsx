// components/TabContent.tsx
import Biography from "./Biography";
import Degrees from "./Degrees";
import Publications from "./Publications";
import Contacts from "./Contacts";
import { TabName } from "./TabMenu";
import { JSX } from "react";

type TabProps = {
  biography?: string;
  degrees?: any[];
  publications?: any[];
  email?: string;
  office?: string;
  linkedin?: any;
  researchgate?: any;
};

const TAB_COMPONENTS: Record<TabName, (props: TabProps) => JSX.Element> = {
  Biography: (props) => <Biography biography={props.biography} />,
  Degrees: (props) => <Degrees degrees={props.degrees} />,
  Publications: (props) => <Publications publications={props.publications} />,
  Contacts: (props) => <Contacts email={props.email} office={props.office} linkedin={props.linkedin} researchgate={props.researchgate} />,
};

export default function TabContent({
  activeTab,
  biography,
  degrees,
  publications,
  email,
  office,
  linkedin,
    researchgate,
}: {
  activeTab: TabName;
  biography?: string;
  degrees?: any[];
  publications?: any[];
  email?: string;
  office?: string;
  linkedin?: any;
  researchgate?: any;
}) {
  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <div className="mt-6">
      <ActiveComponent biography={biography} degrees={degrees} publications={publications} email={email} office={office} linkedin={linkedin} researchgate={researchgate} />
    </div>
  );
}
