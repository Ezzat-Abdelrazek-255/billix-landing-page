import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CHAT_URL } from "@/constants";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import type { PricingPlan } from "@/types";

const PricingCardHorizontal = ({ plan, isAnnually = false }: { plan: PricingPlan; isAnnually?: boolean }) => {
  const t = useTranslations("pricing");
  const { name, monthlyPrice, annualPrice, description, credits, features, buttonLabel, badge } = plan;

  const displayMonthly = monthlyPrice ?? 0;
  const displayAnnual = annualPrice !== null ? Math.round(annualPrice / 12) : displayMonthly;
  const hasAnnual = annualPrice !== null;

  return (
    <article className="bg-primary p-2xl gap-xl flex flex-col rounded-sm text-white md:flex-row md:items-center md:gap-[4rem]">
      {/* Left — Logo, Name, Price */}
      <div className="flex shrink-0 flex-col md:w-[28rem]">
        <div className="mb-[1.6rem] flex items-center gap-[1.2rem]">
          <LogoSymbolIcon className="w-[4.4rem]" />
          {badge && (
            <span className="bg-secondary px-base-sm py-xs rounded-full font-sans text-sm leading-none font-medium text-black">
              {badge}
            </span>
          )}
        </div>
        <div className="mb-[1.2rem] flex items-center justify-between">
          <h2 className="font-sans text-lg font-medium tracking-tight">{name}</h2>
          {hasAnnual && (
            <div className="px-2xs relative z-0 overflow-hidden">
              <p
                className={cn(
                  "border-secondary text-secondary ease-primary px-base py-xs origin-right rounded-full border border-dashed font-sans text-sm leading-none font-medium duration-700",
                  isAnnually && "-translate-y-[150%]",
                )}
              >
                {t("card.paidMonthly")}
              </p>
              <p
                className={cn(
                  "bg-secondary border-secondary ease-primary px-base py-xs absolute top-0 left-1/2 origin-right -translate-x-1/2 translate-y-[150%] rounded-full border border-dashed font-sans text-sm leading-none font-medium whitespace-nowrap text-black duration-700",
                  isAnnually && "translate-y-0",
                )}
              >
                {t("card.paidAnnually")}
              </p>
            </div>
          )}
        </div>
        <p className="relative z-0 flex flex-col items-baseline font-sans text-[4.8rem] font-bold tracking-tight">
          {hasAnnual ? (
            <>
              <span className="absolute top-0 left-0 overflow-hidden leading-none uppercase">
                <span
                  className={cn("ease-primary block translate-y-[125%] duration-700", isAnnually && "translate-y-0")}
                >
                  ${displayAnnual.toString().padStart(2, "0")}
                </span>
              </span>
              <span className="overflow-hidden leading-none uppercase">
                <span className={cn("ease-primary inline-block duration-700", isAnnually && "-translate-y-[125%]")}>
                  ${displayMonthly.toString().padStart(2, "0")}
                </span>{" "}
                {t("card.usd")}
              </span>
            </>
          ) : (
            <span className="leading-none uppercase">
              ${displayMonthly.toString().padStart(2, "0")} {t("card.usd")}
            </span>
          )}
          <span className="gap-xs relative z-0 flex items-baseline font-serif text-lg font-light tracking-normal text-white">
            {t("card.perMonth")}
          </span>
        </p>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-white/20 md:h-auto md:w-[1px] md:self-stretch" />

      {/* Middle — Description + Features */}
      <div className="flex flex-1 flex-col">
        <p className="text-base-sm mb-[2rem] font-sans font-medium text-white/80">{description}</p>
        <div className="gap-sm flex flex-col">
          <h4 className="font-serif text-lg">{t("card.whatsIncluded")}</h4>
          <ul className="text-base-sm grid grid-cols-1 font-sans font-medium sm:grid-cols-2">
            <li className="py-base gap-sm flex items-center border-b border-b-white/20">
              <div className="bg-secondary px-base py-2xs rounded-full font-sans text-sm font-medium text-black">
                {credits.toLocaleString()}
              </div>
              <p>{t("card.creditsPerMonth")}</p>
            </li>
            {features.slice(1).map(feature => (
              <li key={feature.label} className="py-base gap-sm flex items-center border-b border-b-white/20">
                <p>{feature.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right — CTA */}
      <div className="flex shrink-0 flex-col items-stretch md:w-[20rem]">
        <Button asChild className="bg-secondary h-[4.8rem] rounded-full text-black">
          <Link href={CHAT_URL}>{buttonLabel}</Link>
        </Button>
      </div>
    </article>
  );
};

export default PricingCardHorizontal;
