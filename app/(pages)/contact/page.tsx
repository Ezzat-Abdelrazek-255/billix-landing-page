import ContactForm from "@/components/contact/contact-form";
import ContactHeading from "@/components/contact/contact-heading";
import CtaSection from "@/components/ui/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch with the Billix Team",
  description:
    "Have a question or need help? Reach out to the Billix team. We'd love to hear from you about partnerships, enterprise needs, or general inquiries.",
  openGraph: {
    title: "Contact Us | Billix",
    description:
      "Have a question or need help? Reach out to the Billix team.",
    url: "https://billix.io/contact",
  },
  alternates: {
    canonical: "https://billix.io/contact",
  },
};

const ContactPage = () => {
  return (
    <main className="contact-page flex flex-col gap-(--sections-gap) pt-(--page-pt)">
      <div className="grid-12 px-(--container-px)">
        <div className="col-span-12 flex flex-col gap-[8rem] sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
          <ContactHeading />
          <ContactForm />
        </div>
      </div>
      <CtaSection />
    </main>
  );
};

export default ContactPage;
