import { getAllBlogs, getBlogBySlug } from "../lib/blogs";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { img } from "../utils/imageHelpers";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function BlogPage({ blog }) {
  const router = useRouter();

  if (router.isFallback) {
    return <>Loading...</>;
  }
  if (!router.isFallback && !blog?.fields?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <NextSeo
        title={`${blog.fields.seo.title}`}
        description={`${blog.fields.seo.description}`}
        canonical={`https://think3dp.com/${blog.fields.slug}`}
        openGraph={{
          title: `${blog.fields.seo.title}`,
          description: `${blog.fields.seo.description}`,
          url: `https://think3dp.com/${blog.fields.slug}`,
          type: "website",
          images: [
            {
              url: `https://think3dp.com/images/opengraph.jpg`,
            },
          ],
        }}
      />
      <div className="mb-10"></div>
      <div className="bumper max-w-screen-lg mb-20">
        <h1 className="text-3xl md:text-5xl font-medium mb-2">
          {blog.fields.title}
        </h1>
        <div className="mb-4">
          <p className="">
            {blog?.fields?.author?.fields?.name} -{" "}
            {new Date(blog?.datePublished).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            -{" "}
            <Link href={`/category/${blog.fields.category.fields.slug}`}>
              <a className="link">{blog.fields.category.fields.name}</a>
            </Link>{" "}
          </p>
        </div>
        <img
          className="block w-full mb-8"
          src={img(blog.fields.coverImage)}
          alt=""
        />
        <div
          className="blog max-w-screen-md m-auto"
          dangerouslySetInnerHTML={{ __html: blog.fields.content }}
        ></div>
      </div>
    </>
  );
}
export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {
      blog: blog ? blog : null,
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  var blogs = await getAllBlogs();
  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog.fields.slug,
        },
      };
    }),
    fallback: "blocking",
  };
}
