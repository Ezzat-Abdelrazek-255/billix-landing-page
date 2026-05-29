import PageHeading from "../ui/page-heading";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";

const ContactHeading = () => {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(today);

  return (
    <div className="gap-base flex flex-col">
      <PageHeading
        eyebrow="We're Here to help"
        title="Contact us"
        description="Whether you have a question, need support, or want to explore how Billix can fit into your workflow, our team is ready. Drop us a message, and we’ll get back to you as soon as possible."
      />
      <div
        data-reveal-group
        data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}
        className="body-base-sm flex justify-center"
      >
        <div className="border-foreground text-foreground px-base py-sm grid place-content-center rounded-full border border-dashed leading-none">
          Today&apos;s Date
        </div>
        <div className="bg-foreground px-base py-sm text-background grid place-content-center rounded-full leading-none">
          {formattedDate}
        </div>
      </div>
    </div>
  );
};

export default ContactHeading;
