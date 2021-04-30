import Link from "next/link";

const socials = [
  {
    name: "Facebook",
    _name: "facebook",
    url: "https://facebook.com/think3dp",
  },
  {
    name: "Twitter",
    _name: "twitter",
    url: "https://twitter.com/think3dp",
  },
  {
    name: "Instagram",
    _name: "instagram",
    url: "https://instagram.com/think3dp",
  },
];

export default function SocialIcons() {
  return (
    <div>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.url}>
            <a className="inline-block mr-2">
              <img
                className="h-5 inline-block"
                src={`/icons/${social._name}.svg`}
                alt=""
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
}
