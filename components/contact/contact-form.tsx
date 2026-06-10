"use client";

import BubbleButton from "@/components/ui/bubble-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import { Link } from "@/i18n/navigation";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import { useTranslations } from "next-intl";

const formFields = [
  {
    id: "name",
    type: "input",
    required: true,
  },
  {
    id: "email",
    type: "input",
    required: true,
  },
  {
    id: "number",
    type: "input",
    required: false,
  },
  {
    id: "message",
    type: "textarea",
    required: true,
  },
] as const;

const ContactForm = () => {
  const t = useTranslations("contact");

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
        <h2 className="h2">{t("form.title")}</h2>
        <div className="ease-primary translate-y-3/4 duration-700 group-has-[:focus]/wrap:translate-y-0">
          <LogoSymbolIcon />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="gap-lg flex flex-col">
        {formFields.map(field => (
          <div key={field.id} className="gap-base-sm flex flex-col">
            <label className="body-base text-foreground" htmlFor={field.id}>
              {t(`form.fields.${field.id}.label`)}
              {field.required && "*"}
            </label>
            {field.type === "textarea" ? (
              <Textarea
                id={field.id}
                name={field.id}
                required={field.required}
                className="h-[17.2rem] border-none shadow-none"
                placeholder={t(`form.fields.${field.id}.placeholder`)}
              />
            ) : (
              <Input
                id={field.id}
                name={field.id}
                type={field.id === "email" ? "email" : "text"}
                required={field.required}
                placeholder={t(`form.fields.${field.id}.placeholder`)}
              />
            )}
          </div>
        ))}

        <p className="body-base-sm">
          {t.rich("form.terms", {
            link: chunks => (
              <Link href="/terms" className="underline">
                {chunks}
              </Link>
            ),
          })}
        </p>

        <div className="flex justify-end">
          <BubbleButton type="submit" variant="tertiary">
            {t("form.submit")}
          </BubbleButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
