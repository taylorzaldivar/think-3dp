import { getAllBlogs } from "../lib/blogs";
import ThreePanelHero from "../components/ThreePanelHero";
import BlogPreviewList from "../components/BlogPreviewList";

export default function Home({ blogs }) {
  return (
    <div id="content">
      <ThreePanelHero blogs={blogs} />
      {/* <BlogPreviewList blogs={blogs} /> */}
    </div>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
