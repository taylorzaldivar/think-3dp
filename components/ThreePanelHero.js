import Link from "next/link";
import { img } from "../utils/imageHelpers";

export default function ThreePanelHero({ blogs }) {
  return (
    <div className="md:flex bumper mb-12">
      <Link href={`/${blogs[0].fields.slug}`}>
        <a
          className="block md:mb-0 mb-2 relative md:w-3/5 bg-cover bg-center md:border-r-4 border-white"
          style={{
            paddingTop: "25%",
            backgroundImage: `url(${img(blogs[0].fields.coverImage)})`,
          }}
        >
          <div className="relative text-white p-6 z-10">
            <div className="bg-lime inline-block font-bold px-2 py-1 uppercase mb-2">
              {blogs[0].fields.category.fields.name}
            </div>
            <h2 className="text-3xl md:text-5xl uppercase font-bold">
              {blogs[0].fields.title}
            </h2>
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </a>
      </Link>
      <div className="md:w-2/5 flex flex-col">
        <Link href={`/${blogs[1].fields.slug}`}>
          <a
            className={`md:mb-0 mb-2 relative flex-1 bg-cover bg-center flex items-end ${
              blogs.length < 3 ? "" : "md:border-b-4"
            } border-white`}
            style={{
              backgroundImage: `url(${img(blogs[1].fields.coverImage)})`,
            }}
          >
            <div className="relative text-white p-6 z-10">
              <div className="bg-lime inline-block font-bold px-2 py-1 uppercase mb-2">
                {blogs[1].fields.category.fields.name}
              </div>
              <h2 className="text-2xl uppercase font-bold">
                {blogs[1].fields.title}
              </h2>
            </div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </a>
        </Link>
        {blogs[2] && (
          <Link href={`/${blogs[2]?.fields.slug}`}>
            <a
              className="relative flex-1 bg-cover bg-center flex items-end"
              style={{
                backgroundImage: `url(${img(blogs[2].fields.coverImage)})`,
              }}
            >
              <div className="relative text-white p-6 z-10">
                <div className="bg-lime inline-block font-bold px-2 py-1 uppercase mb-2">
                  {blogs[2]?.fields.category.fields.name}
                </div>
                <h2 className="text-2xl uppercase font-bold">
                  {blogs[2]?.fields.title}
                </h2>
              </div>
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
