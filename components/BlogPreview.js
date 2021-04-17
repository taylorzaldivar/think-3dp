export default function BlogPreview({ title, author, category, image, link }) {
  return (
    <div className="bumper mb-8">
      <h2 className="text-4xl mb-1">{title}</h2>
      <div className="mb-2">
        <p className="text-sm">
          {author} - {category}
        </p>
      </div>
      <div
        className="pt-25 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
    </div>
  );
}
