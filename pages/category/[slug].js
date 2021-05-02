import { getBlogsByCategory } from "../../lib/blogs";
import { getCategoryBySlug, getAllCategories } from "../../lib/categories";
import BlogPreviewList from "../../components/BlogPreviewList";
import { NextSeo } from "next-seo";

export default function CategoryPage({ category, blogs }) {
  return (
    <div className="py-10">
      <NextSeo
        title={`${category.fields.name}`}
        description="Learn about the creators behind Think3DP and our mission to show how 3D printing technology is revolutionizing the world."
        canonical={`https://think3dp.com/category/${category.fields.slug}`}
        openGraph={{
          title: `${category.fields.name}`,
          description:
            "Learn about the creators behind Think3DP and our mission to show how 3D printing technology is revolutionizing the world.",
          url: `https://think3dp.com/category/${category.fields.slug}`,
          type: "website",
          images: [
            {
              url: `https://think3dp.com/images/opengraph.jpg`,
            },
          ],
        }}
      />
      <h1 className="bumper text-gray-500 pb-2 text-xl md:text-2xl">
        {category.fields.name}
      </h1>
      <BlogPreviewList blogs={blogs} />
    </div>
  );
}
export async function getStaticProps({ params }) {
  const category = await getCategoryBySlug(params.slug);
  const blogs = await getBlogsByCategory(category._id);
  return {
    props: {
      category: category ? category : null,
      blogs: blogs ? blogs : [],
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  var categories = await getAllCategories();
  return {
    paths: categories.map((category) => {
      return {
        params: {
          slug: category.fields.slug,
        },
      };
    }),
    fallback: "blocking",
  };
}
