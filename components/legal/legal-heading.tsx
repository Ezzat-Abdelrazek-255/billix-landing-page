import PageHeading from "../ui/page-heading";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";

const LegalHeading = ({
  eyebrow,
  title,
  description,
  date = "Septermber 9, 2025",
}: {
  eyebrow: string;
  title: string;
  description: string;
  date?: string;
}) => {
  return (
    <div className="gap-base flex flex-col">
      <PageHeading eyebrow={eyebrow} title={title} description={description} />

      <div
        data-reveal-group
        data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}
        className="body-base-sm flex justify-center"
      >
        <div className="border-foreground text-foreground px-base py-sm grid place-content-center rounded-full border border-dashed leading-none">
          Last Updated
        </div>
        <div className="bg-foreground px-base py-sm text-background grid place-content-center rounded-full leading-none">
          {date}
        </div>
      </div>
    </div>
  );
};

export default LegalHeading;
