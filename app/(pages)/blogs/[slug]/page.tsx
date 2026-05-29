import { notFound } from "next/navigation";
import BlogDetail from "@/components/blogs/blog-detail";
import BlogDetailHeading from "@/components/blogs/blog-detail-heading";
import CtaSection from "@/components/ui/cta-section";
import { getBlogBySlug, getAllSlugs } from "@/content/blogs";

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Billix Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-detail-page flex flex-col gap-(--sections-gap) pt-(--page-pt)">
      <div className="flex flex-col gap-[8rem] px-(--container-px)">
        <div className="grid-12">
          <div className="col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
            <BlogDetailHeading
              category={post.category}
              title={post.title}
              description={post.description}
              date={post.date}
              author={post.author}
              readTime={post.readTime}
            />
          </div>
        </div>
        <BlogDetail post={post} />
      </div>
      <CtaSection />
    </main>
  );
}
