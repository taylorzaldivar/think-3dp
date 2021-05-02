import Link from "next/link";
import { img, thumbnail_sd } from "../utils/imageHelpers";

export default function BlogPreview({
  title,
  date,
  author,
  category,
  image,
  link,
}) {
  return (
    <div className="bumper mb-8 border-t border-gray-100">
      <div className="flex">
        <Link href={`/${link}`}>
          <a className="block w-24 md:w-80">
            <img className="block" src={thumbnail_sd(image)} alt="" />
          </a>
        </Link>
        <div className="p-4 flex-1">
          <Link href={`/${link}`}>
            <a className="block link">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-base mb-2 md:mt-5">
                {title}
              </h2>
            </a>
          </Link>
          <div className="mb-4">
            <p className="text-sm md:text-lg">
              {author} -{" "}
              {new Date(date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              -{" "}
              <Link href={`/category/${category?.fields?.slug}`}>
                <a className="link">{category?.fields?.name}</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
