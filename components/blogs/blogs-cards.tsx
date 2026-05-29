"use client";

import { useMemo, useState } from "react";
import BlogCard from "./blog-card";
import BubbleButton from "@/components/ui/bubble-button";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import { cn } from "@/lib/utils";
import { BLOG_POSTS, CATEGORIES } from "@/content/blogs";

const INITIAL_COUNT = 6;

const BlogCards = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filteredBlogs = useMemo(() => {
    let results = BLOG_POSTS;

    if (activeCategory !== "View all") {
      results = results.filter(blog => blog.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        blog =>
          blog.title.toLowerCase().includes(query) ||
          blog.description.toLowerCase().includes(query) ||
          blog.author.toLowerCase().includes(query) ||
          blog.category.toLowerCase().includes(query) ||
          blog.coverLabel.toLowerCase().includes(query),
      );
    }

    return results;
  }, [activeCategory, searchQuery]);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_COUNT);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <div className="grid-12 w-full px-(--container-px)">
      <div className="col-span-12 mb-[4rem] sm:col-span-8 sm:col-start-3 md:col-span-4 md:col-start-5">
        <input
          data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}
          data-reveal-group
          placeholder="Search for topics"
          value={searchQuery}
          onChange={handleSearch}
          className="bg-background-muted h-[5.8rem] w-full rounded-full text-center font-sans font-medium"
        />
      </div>
      <div className="gap-xl col-span-12 flex flex-col">
        <Carousel>
          <CarouselContent
            data-reveal-group
            data-animate-whole
            data-reveal-delay={LOADER_DELAY + INTRO_STAGGER}
            className="gap-sm pl-base-sm text-base-sm relative flex"
          >
            {CATEGORIES.map((category, index) => (
              <button
                key={`${category}-${index}`}
                onClick={() => handleCategoryChange(category)}
                className={cn(
                  "border-foreground px-base py-sm ease-out-quad relative z-0 shrink-0 cursor-pointer overflow-hidden rounded-full border border-dashed font-sans leading-none font-medium whitespace-nowrap transition-colors duration-150",
                  category === activeCategory && "bg-foreground text-background",
                )}
              >
                {category}
              </button>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="gap-xl flex flex-col items-center">
          <div data-reveal-group data-reveal-delay={LOADER_DELAY + INTRO_STAGGER} className="grid-12 gap-base">
            {visibleBlogs.length > 0 ? (
              visibleBlogs.map(blog => (
                <div key={blog.slug} className="col-span-12 sm:col-span-6 md:col-span-4">
                  <BlogCard
                    blog={{
                      coverLabel: blog.coverLabel,
                      title: blog.title,
                      category: blog.category,
                      author: blog.author,
                      href: `/blogs/${blog.slug}`,
                    }}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-12 py-[8rem] text-center">
                <p className="body-base opacity-60">No articles found matching your search.</p>
              </div>
            )}
          </div>
          {hasMore && (
            <div>
              <BubbleButton variant="secondary" onClick={() => setVisibleCount(prev => prev + 6)}>
                Show more
              </BubbleButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
