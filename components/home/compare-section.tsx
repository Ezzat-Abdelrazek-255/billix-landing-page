import DotsPattern from "@/components/ui/dots-pattern";
import Eyebrow from "@/components/ui/eyebrow";
import MinusIcon from "@/icons/ui/minus-icon";
import PlusIcon from "@/icons/ui/plus-icon";
import { useTranslations } from "next-intl";

const ComparisonItem = ({
  text,
  colorScheme,
  Icon,
}: {
  text: string;
  colorScheme: "foreground" | "primary";
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => {
  const borderColor = colorScheme === "primary" ? "border-primary" : "border-foreground";
  const bgColor = colorScheme === "primary" ? "bg-primary" : "bg-foreground";
  const textColor = colorScheme === "primary" ? "text-primary" : "text-foreground";

  return (
    <li
      className={`p-base ${borderColor} gap-base bg-background-muted grid grid-cols-[auto_1fr] items-center rounded-full border border-dashed`}
    >
      <div className={`${bgColor} text-background grid h-[4rem] w-[4rem] place-content-center rounded-full`}>
        <Icon />
      </div>
      <p className={`body-base-sm ${textColor}`}>{text}</p>
    </li>
  );
};

const ComparisonColumn = ({
  title,
  items,
  colorScheme,
  Icon,
  dotsColorVariable,
}: {
  title: string;
  items: string[];
  colorScheme: "foreground" | "primary";
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  dotsColorVariable?: string;
}) => (
  <div className="bg-background-muted p-xl gap-xl relative z-0 flex flex-col rounded-xs">
    <DotsPattern colorVariable={dotsColorVariable} />
    <h3 className="text-center font-sans text-[2.4rem] font-medium">{title}</h3>
    <ul data-reveal-group className="gap-base-sm flex flex-col">
      {items.map((item, index) => (
        <ComparisonItem key={index} text={item} colorScheme={colorScheme} Icon={Icon} />
      ))}
    </ul>
  </div>
);

const CompareSection = () => {
  const t = useTranslations("home");

  return (
    <section className="grid-12 gap-xl px-(--container-px) sm:gap-y-[6.4rem]">
      <div className="gap-base col-span-12 flex flex-col text-center sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
        <div className="gap-base sm:gap-xl flex flex-col items-center">
          <Eyebrow>{t("compare.eyebrow")}</Eyebrow>
          <h2 data-split="heading" className="h2">
            {t.rich("compare.title", { serif: chunks => <span className="h2-serif">{chunks}</span> })}
          </h2>
        </div>
        <p data-split="heading" className="body-base">
          {t("compare.description")}
        </p>
      </div>

      <div className="gap-base col-span-12 grid grid-cols-1 sm:grid-cols-2 md:col-span-8 md:col-start-3">
        <ComparisonColumn
          title={t("compare.traditional.title")}
          items={t.raw("compare.traditional.items") as string[]}
          colorScheme="foreground"
          Icon={MinusIcon}
          dotsColorVariable="--foreground"
        />
        <ComparisonColumn
          title={t("compare.billix.title")}
          items={t.raw("compare.billix.items") as string[]}
          colorScheme="primary"
          Icon={PlusIcon}
        />
      </div>
    </section>
  );
};

export default CompareSection;
