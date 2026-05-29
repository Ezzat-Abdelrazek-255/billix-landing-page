import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CHAT_URL } from "@/constants";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/types";

const PricingCard = ({
  plan,
  variant = "primary",
  isAnnually = false,
}: {
  plan: PricingPlan;
  variant?: "primary" | "secondary";
  isAnnually?: boolean;
}) => {
  const { name, monthlyPrice, annualPrice, description, credits, features, buttonLabel } = plan;

  const displayMonthly = monthlyPrice ?? 0;
  const displayAnnual = annualPrice !== null ? Math.round(annualPrice / 12) : displayMonthly;
  const hasAnnual = annualPrice !== null;

  return (
    <article
      className={cn(
        "bg-background-muted p-2xl gap-xl flex h-full flex-col rounded-sm",
        variant === "secondary" && "bg-primary text-white",
      )}
    >
      <div>
        <LogoSymbolIcon className="w-[4.4rem]" />
      </div>
      <div className="flex flex-col">
        <div className="mb-[1.2rem] flex items-center justify-between">
          <h2 className="font-sans text-lg font-medium tracking-tight">{name}</h2>
          <div className="px-2xs relative z-0 overflow-hidden">
            <p
              className={cn(
                "border-primary px-base ease-primary py-xs text-primary origin-right rounded-full border border-dashed font-sans text-sm leading-none font-medium duration-700",
                variant === "secondary" && "text-secondary border-secondary",
                isAnnually && hasAnnual && "-translate-y-[150%]",
              )}
            >
              {hasAnnual ? "Paid Monthly" : "Free"}
            </p>

            {hasAnnual && (
              <p
                className={cn(
                  "border-primary px-base ease-primary py-xs bg-primary absolute top-0 left-1/2 origin-right -translate-x-1/2 translate-y-[150%] rounded-full border border-dashed font-sans text-sm leading-none font-medium whitespace-nowrap text-white duration-700",
                  variant === "secondary" && "bg-secondary border-secondary text-black",
                  isAnnually && "translate-y-0",
                )}
              >
                Paid Annually
              </p>
            )}
          </div>
        </div>
        <p className="gap-sm relative z-0 mb-[3.2rem] flex items-baseline font-sans text-[4.8rem] font-bold tracking-tight">
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
                Usd
              </span>
            </>
          ) : (
            <span className="leading-none uppercase">${displayMonthly.toString().padStart(2, "0")} Usd</span>
          )}
          <span
            className={cn(
              "text-foreground/60 gap-xs relative z-0 flex items-baseline font-serif text-lg font-light tracking-normal",
              variant === "secondary" && "text-white",
            )}
          >
            per month
          </span>
        </p>
        <div
          className={cn("bg-foreground/20 mb-[1.2rem] h-[1px] w-full", variant === "secondary" && "bg-white/20")}
        ></div>
        <p className="text-base-sm mb-[3.2rem] font-sans font-medium">{description}</p>
        <Button
          asChild
          className={cn("mb-[3.2rem] h-[4.8rem] rounded-full", variant === "secondary" && "bg-secondary text-black")}
        >
          <Link href={CHAT_URL}>{buttonLabel}</Link>
        </Button>
        <div className="gap-sm flex flex-col">
          <h4 className="font-serif text-lg">What&apos;s Included:</h4>
          <ul className="text-base-sm font-sans font-medium">
            <li
              className={cn(
                "py-base gap-sm border-b-foreground/20 flex items-center border-b",
                variant === "secondary" && "border-b-white/20",
              )}
            >
              <div
                className={cn(
                  "bg-primary px-base py-2xs rounded-full font-sans text-sm font-medium text-white",
                  variant === "secondary" && "bg-secondary text-black",
                )}
              >
                {credits.toLocaleString()}
              </div>
              <p>Credits per month</p>
            </li>
            {features.slice(1).map(feature => (
              <li
                key={feature.label}
                className={cn(
                  "py-base gap-sm border-b-foreground/20 flex items-center border-b",
                  variant === "secondary" && "border-b-white/20",
                )}
              >
                <p>{feature.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default PricingCard;
