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
      <div className="mb-20">
        <div className="content-header bumper mb-4">
          <Link href={`/category/${blog.fields.category.fields.slug}`}>
            <a className="inline-block bg-lime py-2 px-2 text-sm text-white uppercase font-medium leading-none mb-4">
              {blog.fields.category.fields.name}
            </a>
          </Link>
          <h1 className="text-3xl md:text-5xl font-medium mb-4 md:mb-8">
            {blog.fields.title}
          </h1>
          <p className="mb-8">
            By {blog?.fields?.author?.fields?.name} |{" "}
            {new Date(blog?.datePublished).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
          </p>
        </div>
        <img
          className="max-w-screen-2xl m-auto block w-full mb-8"
          src={img(blog.fields.coverImage)}
          alt=""
        />
        <div className="">
          <main
            className="blog bumper"
            dangerouslySetInnerHTML={{ __html: blog.fields.content }}
          ></main>
        </div>
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
