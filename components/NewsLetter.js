import NewsLetterForm from "./Forms/NewsLetterForm";
export default function NewsLetter() {
  return (
    <div className="bg-gray-200 py-10 md:py-20">
      <div className="bumper lg:flex items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="lg:pr-20">
            <p className="text-2xl md:text-3xl mb-2">
              Subscribe for 3D Printing News
            </p>
            <p className="text-sm md:text-lg">
              Get bi-weekly updates on the latest happening in 3D printing
              homes, furniture, and more!
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
}
