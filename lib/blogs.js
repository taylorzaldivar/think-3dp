export async function getAllBlogs() {
  let url = `${process.env.NEXT_PUBLIC_API_SOURCE}${process.env.NEXT_PUBLIC_API_PATH_BLOGS}`;
  var response = await fetch(
    `${url}&isPublished=true&sort=datePublished&populate=fields.category`
  );
  var results = await response.json();
  return results;
}

export async function getBlogBySlug(slug) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SOURCE}${process.env.NEXT_PUBLIC_API_PATH_BLOGS}&isPublished=true&fields.slug=${slug}&populate=fields.category`
  );
  var results = await response.json();
  return results[0];
}
