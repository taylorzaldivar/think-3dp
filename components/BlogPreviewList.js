import BlogPreview from "./BlogPreview";

export default function BlogPreviewList({ blogs }) {
  return (
    <div className="">
      {blogs.map((blog, index) => {
        return (
          <BlogPreview
            key={index}
            title={blog.fields.title}
            author={blog.fields.author.fields.name}
            date={blog.datePublished}
            image={blog.fields.coverImage}
            category={blog.fields.category}
            link={blog.fields?.slug}
          />
        );
      })}
    </div>
  );
}
