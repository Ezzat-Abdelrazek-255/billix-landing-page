import ChangelogEntry from "./changelog-entry";
import ChangelogEntryHeading from "./changelog-entry-heading";
import ChangelogEntrySection from "./changelog-entry-section";
import ChangelogEntrySeparator from "./changelog-entry-separator";
import ChangelogEntrySpacing from "./changelog-entry-spacing";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";

const ChangelogEntries: React.FC = () => {
  return (
    <div className="flex flex-col gap-[6.4rem]">
      <ChangelogEntry revealDelay={LOADER_DELAY + INTRO_STAGGER} date="November 1, 2024">
        <ChangelogEntryHeading>
          Retries, task search and filter, version renaming, copy and paste between agents
        </ChangelogEntryHeading>
        <ChangelogEntrySeparator />

        <ChangelogEntrySection
          title="Retries"
          description="You can now retry any action that your agent has run with a single click – perfect for rerunning actions that errored out"
          link=""
          imageSrc="/changelog-1.jpg"
        />

        <ChangelogEntrySpacing size="6xl" />
        <ChangelogEntrySeparator />

        <ChangelogEntrySection
          title="Task search and filter"
          description="You can now search your agent's task list and filter by errored or unread—making task management much easier."
          link=""
          imageSrc="/changelog-1.jpg"
        />
      </ChangelogEntry>

      <ChangelogEntry date="November 1, 2024">
        <ChangelogEntryHeading>
          Retries, task search and filter, version renaming, copy and paste between agents
        </ChangelogEntryHeading>
        <ChangelogEntrySeparator />

        <ChangelogEntrySection
          title="Retries"
          description="You can now retry any action that your agent has run with a single click – perfect for rerunning actions that errored out"
          link=""
          imageSrc="/changelog-1.jpg"
        />

        <ChangelogEntrySpacing size="6xl" />
        <ChangelogEntrySeparator />

        <ChangelogEntrySection
          title="Task search and filter"
          description="You can now search your agent's task list and filter by errored or unread—making task management much easier."
          link=""
          imageSrc="/changelog-1.jpg"
        />
      </ChangelogEntry>
    </div>
  );
};

export default ChangelogEntries;
