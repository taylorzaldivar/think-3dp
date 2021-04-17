import NewsLetterForm from "./Forms/NewsLetterForm";
export default function NewsLetter() {
  return (
    <div className="bg-gray-200 py-20">
      <div className="bumper flex">
        <div className="w-1/2">
          <p className="text-3xl">Sign up for our Newsletter today</p>
          <p className="text-lg">
            Stay up to date on the latest information on 3D printed homes!
          </p>
        </div>
        <div className="w-1/2">
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
}
