import NextLink from "@/components/ui/next-link";
import DotsPattern from "@/components/ui/dots-pattern";
import SparklesPenIcon from "@/icons/ui/sparkles-pen-icon";

interface BlogCardProps {
  blog: {
    coverLabel: string;
    title: string;
    category: string;
    author: string;
    href: string;
  };
}

const BlogCard = ({ blog: { coverLabel, title, category, author, href } }: BlogCardProps) => {
  return (
    <NextLink href={href}>
      <article className="bg-background-muted p-base gap-xl flex h-full w-full flex-col rounded-sm">
        <div className="bg-background relative z-0 grid aspect-[416/240] w-full place-content-center rounded-sm">
          <DotsPattern colorVariable="--foreground" />
          <h2 className="max-w-[10ch] text-center font-serif text-[5.6rem] leading-[1.1] font-light">{coverLabel}</h2>
        </div>
        <div className="gap-xl flex grow flex-col justify-between">
          <div className="gap-sm flex flex-col">
            <p className="px-base py-sm border-foreground text-base-sm w-fit rounded-full border border-dashed font-sans leading-none font-medium">
              {category}
            </p>
            <h3 className="font-sans text-[2rem] font-medium">{title}</h3>
          </div>
          <div className="flex justify-end gap-0">
            <p className="px-base py-sm border-foreground text-base-sm text-background bg-foreground w-fit rounded-full border border-dashed font-sans leading-none font-medium">
              {author}
            </p>
            <div className="border-foreground text-foreground grid w-[3.2rem] shrink-0 place-content-center rounded-full border border-dashed">
              <SparklesPenIcon />
            </div>
          </div>
        </div>
      </article>
    </NextLink>
  );
};

export default BlogCard;
