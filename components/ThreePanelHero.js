import Link from "next/link";
import { img } from "../utils/imageHelpers";

export default function ThreePanelHero({ blogs }) {
  return (
    <div className="lg:flex max-w-screen-xl m-auto md:px-4 mb-12 md:pt-2">
      <Link href={`/${blogs[0].fields.slug}`}>
        <a
          className="block lg:mb-0 mb-2 relative w-full lg:w-2/3 bg-cover bg-center lg:border-r-8 border-white"
          style={{
            paddingTop: "25%",
            backgroundImage: `url(${img(blogs[0].fields.coverImage)})`,
          }}
        >
          <div className="relative text-white p-4 md:p-6 z-10">
            <div className="bg-lime inline-block font-base px-2 py-1 uppercase mb-2 text-xs md:text-base">
              {blogs[0].fields.category.fields.name}
            </div>
            <h2 className="text-2xl md:text-5xl font-base mb-1 md:mb-3">
              {blogs[0].fields.title}
            </h2>
            <p className="text-white text-base">
              {blogs[0]?.fields?.author?.fields?.name} -{" "}
              {new Date(blogs[0]?.datePublished).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
            </p>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 md:opacity-30"></div>
        </a>
      </Link>
      <div className=" w-full lg:w-1/3 grid grid-cols-2 gap-2 lg:flex lg:flex-col px-2 md:px-0">
        <Link href={`/${blogs[1].fields.slug}`}>
          <a
            className={`relative md:mb-0 flex-1 bg-cover bg-center shadow flex flex-col ${
              blogs.length < 3 ? "" : ""
            } border-white`}
          >
            <div
              className="relative w-full flex-1 bg-center bg-cover pt-20 lg:pt-0"
              style={{
                backgroundImage: `url(${img(blogs[1].fields.coverImage)})`,
              }}
            ></div>
            <div className="relative p-2 md:p-6 z-10">
              {/* <div className="bg-lime hidden md:inline-block text-white text-sm px-2 py-1 rounded uppercase mb-1">
                {blogs[1].fields.category.fields.name}
              </div> */}
              <h2 className="text-sm sm:text-base lg:text-xl font-base mb-1">
                {blogs[1].fields.title}
              </h2>
              <p className="text-gray-400 text-xs md:text-base">
                <span className="hidden md:inline">
                  {blogs[1]?.fields?.author?.fields?.name} -
                </span>{" "}
                {new Date(blogs[1]?.datePublished).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
              </p>
            </div>
            {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
          </a>
        </Link>
        {/* <Link href={`/${blogs[1].fields.slug}`}>
          <a
            className={`relative md:mb-0 flex-1 bg-cover bg-center flex items-end ${
              blogs.length < 3 ? "" : ""
            } border-white`}
            style={{
              backgroundImage: `url(${img(blogs[1].fields.coverImage)})`,
            }}
          >
            <div className="relative pt-50 text-white p-2 md:p-6 z-10">
              <div className="bg-lime hidden md:inline-block font-base px-2 py-1 uppercase mb-2">
                {blogs[1].fields.category.fields.name}
              </div>
              <h2 className="text-base md:text-2xl font-base">
                {blogs[1].fields.title}
              </h2>
            </div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </a>
        </Link> */}
        {blogs[2] && (
          <Link href={`/${blogs[2].fields.slug}`}>
            <a
              className={`relative md:mb-0 flex-1 bg-cover bg-center shadow flex flex-col ${
                blogs.length < 3 ? "" : ""
              } border-white`}
            >
              <div
                className="relative w-full flex-1 bg-center bg-cover"
                style={{
                  backgroundImage: `url(${img(blogs[2].fields.coverImage)})`,
                }}
              ></div>
              <div className="relative p-2 md:p-6 z-10">
                {/* <div className="bg-lime hidden md:inline-block text-white text-sm px-2 py-1 rounded uppercase mb-1">
                {blogs[1].fields.category.fields.name}
              </div> */}
                <h2 className="text-sm sm:text-base lg:text-xl font-base mb-1">
                  {blogs[2].fields.title}
                </h2>
                <p className="text-gray-400 text-xs md:text-base">
                  <span className="hidden md:inline">
                    {blogs[2]?.fields?.author?.fields?.name} -
                  </span>{" "}
                  {new Date(blogs[2]?.datePublished).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}{" "}
                </p>
              </div>
              {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
            </a>
          </Link>
        )}
        {/* {blogs[2] && (
          <Link href={`/${blogs[2]?.fields.slug}`}>
            <a
              className="relative flex-1 bg-cover bg-center flex items-end"
              style={{
                backgroundImage: `url(${img(blogs[2].fields.coverImage)})`,
              }}
            >
              <div className="relative text-white p-2 md:p-6 z-10">
                <div className="hidden bg-lime md:inline-block font-bold px-2 py-1 uppercase mb-2">
                  {blogs[2]?.fields.category.fields.name}
                </div>
                <h2 className="text-base md:text-2xl">
                  {blogs[2]?.fields.title}
                </h2>
              </div>
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </a>
          </Link>
        )} */}
      </div>
    </div>
  );
}
