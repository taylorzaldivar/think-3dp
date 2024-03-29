import { NextSeo } from "next-seo";
import { getAllBlogs } from "../lib/blogs";
import ThreePanelHero from "../components/ThreePanelHero";
import BlogPreviewList from "../components/BlogPreviewList";

export default function Home({ blogs }) {
  return (
    <div id="content">
      <NextSeo
        title=""
        description="Think3DP is your source for news on 3D printed homes, furniture, and more."
        canonical="https://think3dp.com"
        openGraph={{
          title: "Think3DP.com",
          description:
            "Think3DP is your source for news on 3D printed homes, furniture, and more.",
          url: "https://think3dp.com",
          type: "website",
          images: [
            {
              url: `https://think3dp.com/images/opengraph.jpg`,
            },
          ],
        }}
      />
      <ThreePanelHero blogs={blogs} />
      <div className="bumper text-gray-500 pb-2 text-xl md:text-2xl">
        More Articles
      </div>

      <BlogPreviewList blogs={blogs.slice(3)} />
    </div>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
    revalidate: 60,
  };
}
