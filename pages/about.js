import { NextSeo } from "next-seo";

export default function AboutPage() {
  return (
    <div className="">
      <NextSeo
        title="About"
        description="Learn about the creators behind Think3DP and our mission to show how this technology is revolutionizing the world."
        canonical="https://think3dp.com/about"
        openGraph={{
          title: "About",
          description:
            "Learn about the creators behind Think3DP and our mission to show how this technology is revolutionizing the world.",
          url: "https://think3dp.com/about",
          type: "website",
          images: [
            {
              url: `https://think3dp.com/images/opengraph.jpg`,
            },
          ],
        }}
      />
      <section className="py-10 md:py-20 bg-lime text-white">
        <div className="max-w-screen-md m-auto px-4 text-center">
          <h1 className="text-lg uppercase tracking-widest mb-2 font-medium">
            About Us
          </h1>
          <h2 className="text-3xl md:text-4xl">
            We are a blog about what's happening in the world of 3D printing and
            what the future holds for this amazing technology.
          </h2>
        </div>
      </section>
      <div className="max-w-screen-md m-auto px-4 py-20 blog">
        <p>
          Think3DP is a passion project created by Taylor Zaldivar and Albert
          Carrete in Southern California. While looking to purchase homes they
          came across an innovative new construction method, 3D printing.
        </p>
        <p>
          {" "}
          After doing some research on the available technology they became
          enthralled with what 3D printing had to offer in the construction
          space and the benefits of less waste, better affordability, and higher
          design freedom. It wasn’t long before they were telling everyone who
          would lend an ear about this promising new technology. It was out of
          this passion that Think3DP was born, a platform that makes it easier
          for those interested to learn about the space, the prominent
          companies, local availability, and more!
        </p>
      </div>
    </div>
  );
}
