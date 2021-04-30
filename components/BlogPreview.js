import Link from "next/link";
import { img } from "../utils/imageHelpers";

export default function BlogPreview({
  title,
  date,
  author,
  category,
  image,
  link,
}) {
  return (
    <div className="bumper mb-8">
      <Link href={`/${link}`}>
        <a className="block link">
          <h2 className="text-3xl md:text-5xl font-medium mb-2">{title}</h2>
        </a>
      </Link>
      <div className="mb-4">
        <p className="text-lg">
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
      <Link href={`/${link}`}>
        <a className="link">
          <div
            className="block pt-50 bg-cover bg-center"
            style={{ backgroundImage: `url('${img(image)}')` }}
          ></div>
        </a>
      </Link>
    </div>
  );
}
