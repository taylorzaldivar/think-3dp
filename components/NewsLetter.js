import NewsLetterForm from "./Forms/NewsLetterForm";
export default function NewsLetter() {
  return (
    <div className="bg-gray-200 py-20">
      <div className="bumper lg:flex items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="pr-20">
            <p className="text-3xl mb-2">Get 3D Printing News in your inbox</p>
            <p className="text-lg">
              Subscribe for bi-weekly updates on the latest happening in 3D
              printing homes, furniture, and more!
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
}
