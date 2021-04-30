import { NextSeo } from "next-seo";

export default function ContactPage() {
  return (
    <div>
      <NextSeo
        title="Contact"
        description="Information for contacting our team to ask questions, provide feedback, share 3D printing news, and more."
        canonical="https://think3dp.com/contact"
        openGraph={{
          title: "Contact",
          description:
            "Information for contacting our team to ask questions, provide feedback, share 3D printing news, and more.",
          url: "https://think3dp.com/contact",
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
            Contact
          </h1>
          <h2 className="text-3xl md:text-4xl">
            Questions or feedback? Want to send us a 3D printing news tip? Get
            in touch.
          </h2>
        </div>
      </section>
      <section>
        <div className="py-20 max-w-screen-md m-auto px-4 text-center">
          <a
            href="mailto:contact@think3dp.com"
            className="block mb-2 text-3xl md:text-4xl hover:text-lime"
          >
            contact@think3dp.com
          </a>
          <a
            href="https://instagram.com/think3dp"
            target="_blank"
            className="block mb-2 text-3xl md:text-4xl hover:text-lime"
          >
            instagram
          </a>
          <a
            href="https://facebook.com/think3dp"
            target="_blank"
            className="block mb-2 text-3xl md:text-4xl hover:text-lime"
          >
            facebook
          </a>
          <a
            href="https://twitter.com/think3dp"
            target="_blank"
            className="block mb-2 text-3xl md:text-4xl hover:text-lime"
          >
            twitter
          </a>
        </div>
      </section>
    </div>
  );
}
