"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
function extractHeadings(markdown: string): { id: string; label: string }[] {
  const headingRegex = /^## (.+)$/gm;
  const headings: { id: string; label: string }[] = [];
  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const label = match[1].trim();
    const id = label
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ id, label });
  }
  return headings;
}

const components: Components = {
  h2: ({ children }) => {
    const text = typeof children === "string" ? children : String(children);
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    return (
      <h2 id={id} className="text-foreground scroll-mt-[11.2rem] font-serif text-[3.2rem] font-light">
        {children}
      </h2>
    );
  },
  h3: ({ children }) => (
    <h3 className="text-foreground font-sans text-[2rem] font-medium">{children}</h3>
  ),
  p: ({ children, node }) => {
    const hasImg = node?.children?.some(
      (child: { type?: string; tagName?: string }) => child.type === "element" && child.tagName === "img",
    );
    if (hasImg) return <>{children}</>;
    return <p>{children}</p>;
  },
  ul: ({ children }) => <ul className="gap-sm pl-base flex list-disc flex-col">{children}</ul>,
  ol: ({ children }) => <ol className="gap-sm pl-base flex list-decimal flex-col">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline">
      {children}
    </a>
  ),
  hr: () => <div className="bg-foreground/20 h-[1px] w-full" />,
  blockquote: ({ children }) => (
    <blockquote className="border-primary border-l-2 pl-[2rem] italic opacity-80">{children}</blockquote>
  ),
  strong: ({ children }) => <strong className="font-medium">{children}</strong>,
  img: ({ src, alt }) => (
    <figure className="gap-sm flex flex-col">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || ""}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      {alt && (
        <figcaption className="text-center font-sans text-[1.2rem] opacity-50">{alt}</figcaption>
      )}
    </figure>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className="bg-foreground/5 block overflow-x-auto rounded-sm p-[2.4rem] font-mono text-[1.4rem]">
          {children}
        </code>
      );
    }
    return (
      <code className="bg-foreground/10 rounded-xs px-[0.6rem] py-[0.2rem] font-mono text-[1.4rem]">
        {children}
      </code>
    );
  },
  pre: ({ children }) => <pre className="overflow-x-auto">{children}</pre>,
};

function BlogMarkdown({ content }: { content: string }) {
  return (
    <div className="gap-xl body-base flex flex-col">
      <Markdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </Markdown>
    </div>
  );
}

export { BlogMarkdown, extractHeadings };
