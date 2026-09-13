import { BLOG_POSTS, BlogPost } from "./blogPosts";
import { SEO_BLOG_POSTS } from "./seoBlogPosts";
import { UK_BLOG_POSTS_01 } from "./ukBlogPosts01";
import { UK_BLOG_POSTS_02 } from "./ukBlogPosts02";
import { UK_BLOG_POSTS_03 } from "./ukBlogPosts03";
import { UK_BLOG_POSTS_04 } from "./ukBlogPosts04";
import { UK_BLOG_POSTS_05 } from "./ukBlogPosts05";
import { UK_BLOG_POSTS_06 } from "./ukBlogPosts06";
import { UK_BLOG_POSTS_07 } from "./ukBlogPosts07";
import { UK_BLOG_POSTS_08 } from "./ukBlogPosts08";
import { UK_BLOG_POSTS_09 } from "./ukBlogPosts09";
import { UK_BLOG_POSTS_10 } from "./ukBlogPosts10";
import { UK_BLOG_POSTS_11 } from "./ukBlogPosts11";
import { UK_BLOG_POSTS_12 } from "./ukBlogPosts12";
import { UK_BLOG_POSTS_13 } from "./ukBlogPosts13";
import { UK_BLOG_POSTS_14 } from "./ukBlogPosts14";
import { UK_BLOG_POSTS_15 } from "./ukBlogPosts15";
import { UK_BLOG_POSTS_16 } from "./ukBlogPosts16";
import { UK_BLOG_POSTS_17 } from "./ukBlogPosts17";
import { UK_BLOG_POSTS_18 } from "./ukBlogPosts18";
import { UK_BLOG_POSTS_19 } from "./ukBlogPosts19";
import { UK_BLOG_POSTS_20 } from "./ukBlogPosts20";
import { UK_BLOG_POSTS_21 } from "./ukBlogPosts21";
import { UK_BLOG_POSTS_22 } from "./ukBlogPosts22";
import { DE_BLOG_POSTS_01 } from "./deBlogPosts01";
import { DE_BLOG_POSTS_02 } from "./deBlogPosts02";
import { DE_BLOG_POSTS_03 } from "./deBlogPosts03";
import { DE_BLOG_POSTS_04 } from "./deBlogPosts04";
import { DE_BLOG_POSTS_05 } from "./deBlogPosts05";
import { DE_BLOG_POSTS_06 } from "./deBlogPosts06";
import { DE_BLOG_POSTS_07 } from "./deBlogPosts07";
import { DE_BLOG_POSTS_08 } from "./deBlogPosts08";
import { DE_BLOG_POSTS_09 } from "./deBlogPosts09";
import { DE_BLOG_POSTS_10 } from "./deBlogPosts10";
import { DE_BLOG_POSTS_11 } from "./deBlogPosts11";
import { DE_BLOG_POSTS_12 } from "./deBlogPosts12";
import { DE_BLOG_POSTS_13 } from "./deBlogPosts13";
import { DE_BLOG_POSTS_14 } from "./deBlogPosts14";
import { DE_BLOG_POSTS_15 } from "./deBlogPosts15";
import { DE_BLOG_POSTS_16 } from "./deBlogPosts16";
import { EN_BLOG_POSTS_01 } from "./enBlogPosts01";
import { EN_BLOG_POSTS_02 } from "./enBlogPosts02";

const EN_UK_BLOG_POSTS: BlogPost[] = [
  ...UK_BLOG_POSTS_01,
  ...UK_BLOG_POSTS_02,
  ...UK_BLOG_POSTS_03,
  ...UK_BLOG_POSTS_04,
  ...UK_BLOG_POSTS_05,
  ...UK_BLOG_POSTS_06,
  ...UK_BLOG_POSTS_07,
  ...UK_BLOG_POSTS_08,
  ...UK_BLOG_POSTS_09,
  ...UK_BLOG_POSTS_10,
  ...UK_BLOG_POSTS_11,
  ...UK_BLOG_POSTS_12,
  ...UK_BLOG_POSTS_13,
  ...UK_BLOG_POSTS_14,
  ...UK_BLOG_POSTS_15,
  ...UK_BLOG_POSTS_16,
  ...UK_BLOG_POSTS_17,
  ...UK_BLOG_POSTS_18,
  ...UK_BLOG_POSTS_19,
  ...UK_BLOG_POSTS_20,
  ...UK_BLOG_POSTS_21,
  ...UK_BLOG_POSTS_22,
];

const DE_BLOG_POSTS: BlogPost[] = [
  ...DE_BLOG_POSTS_01,
  ...DE_BLOG_POSTS_02,
  ...DE_BLOG_POSTS_03,
  ...DE_BLOG_POSTS_04,
  ...DE_BLOG_POSTS_05,
  ...DE_BLOG_POSTS_06,
  ...DE_BLOG_POSTS_07,
  ...DE_BLOG_POSTS_08,
  ...DE_BLOG_POSTS_09,
  ...DE_BLOG_POSTS_10,
  ...DE_BLOG_POSTS_11,
  ...DE_BLOG_POSTS_12,
  ...DE_BLOG_POSTS_13,
  ...DE_BLOG_POSTS_14,
  ...DE_BLOG_POSTS_15,
  ...DE_BLOG_POSTS_16,
];

const EN_BLOG_POSTS: BlogPost[] = [
  ...EN_BLOG_POSTS_01,
  ...EN_BLOG_POSTS_02,
];

export const ALL_POSTS: BlogPost[] = [...SEO_BLOG_POSTS, ...EN_UK_BLOG_POSTS, ...DE_BLOG_POSTS, ...EN_BLOG_POSTS, ...BLOG_POSTS].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO)
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find(p => p.slug === slug);
}
