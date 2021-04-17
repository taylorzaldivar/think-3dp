import Link from "next/link";
import NewsLetter from "./NewsLetter";
import categories from "../data.preval";

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
export default function Footer() {
  return (
    <div>
      <NewsLetter />
      <div className="flex bumper py-10 justify-between">
        <div className="">
          <Link href="/">
            <a className="block mb-2">
              <img
                src="/images/logo.png"
                className="h-10"
                alt="Think3DP Logo"
              />
            </a>
          </Link>
          <a href="mailto:contact@think3dp.com" className="font-bold">
            contact@think3dp.com
          </a>
        </div>
        <div className="flex text-lg">
          <div className="mr-20">
            <div className="font-bold">Pages</div>
            {categories.map((category, index) => {
              return (
                <div key={index}>
                  <Link key={index} href={`/${category.fields.slug}`}>
                    <a>{category.fields.name}</a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div>
            <div className="font-bold">Social</div>
            {socials.map((social, index) => {
              return (
                <div key={index}>
                  <a href={social.url} target="_blank">
                    {social.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
