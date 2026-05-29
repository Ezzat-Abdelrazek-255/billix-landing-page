import React from "react";
import ChangelogEntryCard from "./changelog-entry-card";
import ChangelogEntryDate from "./changelog-entry-date";

interface ChangelogEntryProps {
  date: string;
  children: React.ReactNode;
  revealDelay?: number;
}

const ChangelogEntry: React.FC<ChangelogEntryProps> = ({ date, children, revealDelay = 0 }) => (
  <div className="grid-12 gap-base relative z-0">
    <div className="col-span-12 sm:col-span-3">
      <ChangelogEntryDate revealDelay={revealDelay} date={date} />
    </div>
    <div className="col-span-12 col-start-1 sm:col-span-8 sm:col-start-5 md:col-span-6 md:col-start-7">
      <ChangelogEntryCard revealDelay={revealDelay}>{children}</ChangelogEntryCard>
    </div>
  </div>
);

export default ChangelogEntry;
