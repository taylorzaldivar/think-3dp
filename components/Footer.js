import Link from "next/link";
import NewsLetter from "./NewsLetter";
import categories from "../data.preval";
import SocialIcons from "../components/SocialIcons";

const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com/think3dp",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/think3dp",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/think3dp",
  },
];
const pages = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
export default function Footer() {
  return (
    <div>
      <NewsLetter />
      <div className="md:flex bumper py-10 justify-between">
        <div className="mb-8 md:mb-0">
          <Link href="/">
            <a className="block mb-2">
              <img
                src="/images/logo.png"
                className="h-10"
                alt="Think3DP Logo"
              />
            </a>
          </Link>
          <a
            href="mailto:contact@think3dp.com"
            className="block font-medium mb-4"
          >
            contact@think3dp.com
          </a>
          <SocialIcons />
        </div>
        <div className="md:flex text-lg">
          <div className="mr-20 mb-10 md:mb-0">
            <div className="font-bold">Categories</div>
            {categories.map((category, index) => {
              return (
                <div key={index}>
                  <Link key={index} href={`/category/${category.fields.slug}`}>
                    <a>{category.fields.name}</a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div>
            <div className="font-bold">Pages</div>
            {pages.map((page, index) => {
              return (
                <div key={index}>
                  <Link href={page.url}>
                    <a>{page.name}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
