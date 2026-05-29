import ClockIcon from "@/icons/ui/clock-icon";

interface ChangelogEntryDateProps {
  date: string;
  revealDelay?: number;
}

const ChangelogEntryDate: React.FC<ChangelogEntryDateProps> = ({ date, revealDelay = 0 }) => (
  <div
    data-reveal-group
    data-reveal-delay={revealDelay}
    className="sticky top-[calc(var(--header-height)+3.2rem)] flex h-fit w-full"
  >
    <div className="grid aspect-square h-[3.2rem] place-content-center rounded-full border border-dashed">
      <ClockIcon className="w-[2rem]" />
    </div>
    <p className="px-base py-sm border-foreground text-base-sm text-background bg-foreground h-fit w-fit rounded-full border border-dashed font-sans leading-none font-medium">
      {date}
    </p>
  </div>
);

export default ChangelogEntryDate;
