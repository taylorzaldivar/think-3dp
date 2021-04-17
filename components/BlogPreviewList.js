import BlogPreview from "./BlogPreview";

export default function BlogPreviewList({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => {
        return (
          <BlogPreview
            title={blog.title}
            author={blog.author}
            category={blog.category}
            image={blog.image}
            link={blog.link}
          />
        );
      })}
    </div>
  );
}
