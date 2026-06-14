"use client";

import { useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { BlogMarkdown, extractHeadings } from "./blog-markdown";
import type { BlogPost } from "@/content/blogs";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import { cn, remToPx } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BlogDetail = ({ post }: { post: BlogPost }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("");

  const headings = extractHeadings(post.content);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      headings.forEach(item => {
        const section = container.querySelector(`#${item.id}`);
        if (section) {
          ScrollTrigger.create({
            trigger: section,
            start: `top-=${remToPx(12)} top`,
            end: `bottom-=${remToPx(12)} top`,
            onEnter: () => setActiveSection(item.id),
            onEnterBack: () => setActiveSection(item.id),
          });
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      data-reveal-group
      data-animate-whole
      data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}
      ref={containerRef}
      className="grid-12 gap-base relative z-0"
    >
      {/* Navigation */}
      <div className="relative z-0 col-span-12 hidden sm:col-span-3 sm:block">
        <div className="gap-sm sticky top-[calc(3.2rem+var(--header-height))] flex flex-col">
          {headings.map(item => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "border-foreground px-base ease-out-quad py-sm block w-full rounded-full border border-dashed transition-colors",
                activeSection === item.id && "bg-foreground text-background",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="col-span-12 col-start-1 sm:col-span-8 sm:col-start-5 md:col-span-6 md:col-start-7">
        <div className="bg-background-muted gap-xl body-base flex flex-col rounded-sm p-[4.8rem]">
          <BlogMarkdown content={post.content} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
