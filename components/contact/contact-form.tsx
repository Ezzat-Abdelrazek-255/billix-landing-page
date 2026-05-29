"use client";

import Link from "next/link";
import BubbleButton from "@/components/ui/bubble-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";

const formFields = [
  {
    id: "name",
    label: "Name",
    type: "input",
    required: true,
    placeholder: "e.g. Ezzat Billix",
  },
  {
    id: "email",
    label: "Email",
    type: "input",
    required: true,
    placeholder: "e.g. ezzat@billix.io",
  },
  {
    id: "number",
    label: "Number",
    type: "input",
    required: false,
    placeholder: "e.g. +1 (555) 012-3456",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    required: true,
    placeholder: "Anything you would like us to know?",
  },
];

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));
  };

  return (
    <div
      data-animate-whole
      data-reveal-group
      data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}
      className="bg-background-muted p-xl group/wrap gap-xl flex flex-col rounded-sm"
    >
      <div className="pb-base border-b-foreground/20 relative z-0 flex items-center justify-between overflow-hidden border-b">
        <h2 className="h2">Get In Touch</h2>
        <div className="ease-primary translate-y-3/4 duration-700 group-has-[:focus]/wrap:translate-y-0">
          <LogoSymbolIcon />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="gap-lg flex flex-col">
        {formFields.map(field => (
          <div key={field.id} className="gap-base-sm flex flex-col">
            <label className="body-base text-foreground" htmlFor={field.id}>
              {field.label}
              {field.required && "*"}
            </label>
            {field.type === "textarea" ? (
              <Textarea
                id={field.id}
                name={field.id}
                required={field.required}
                className="h-[17.2rem] border-none shadow-none"
                placeholder={field.placeholder}
              />
            ) : (
              <Input
                id={field.id}
                name={field.id}
                type={field.id === "email" ? "email" : "text"}
                required={field.required}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}

        <p className="body-base-sm">
          By clicking &apos;Send Message&apos; you&apos;re confirming that you agree with our{" "}
          <Link href="/terms" className="underline">
            Terms and Conditions
          </Link>
        </p>

        <div className="flex justify-end">
          <BubbleButton type="submit" variant="tertiary">
            Send Message
          </BubbleButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
