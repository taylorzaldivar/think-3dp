import { getAllBlogs, getBlogBySlug } from "../lib/blogs";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { img } from "../utils/imageHelpers";
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
      <div className="mb-10"></div>
      <div className="bumper max-w-screen-lg mb-8">
        <h2 className="text-4xl mb-1">{blog.fields.title}</h2>
        <div className="mb-4">
          <p className="text-sm">
            {blog.fields.category.fields.name} -{" "}
            {new Date(blog?.datePublished).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
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

// getStaticProps
// getStaticPaths
