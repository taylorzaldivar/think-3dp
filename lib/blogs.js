import axios from "axios";

export async function getAllBlogs() {
  let url = `${process.env.NEXT_PUBLIC_API_SOURCE}${process.env.NEXT_PUBLIC_API_PATH_BLOGS}`;
  var response = await fetch(
    `${url}&isPublished=true&sort=-datePublished&populate=fields.category&populate=fields.author`
  );
  var results = await response.json();
  return results;
}
export async function getBlogsByCategory(category_id) {
  let url = `${process.env.NEXT_PUBLIC_API_SOURCE}${process.env.NEXT_PUBLIC_API_PATH_BLOGS}`;
  var response = await axios.get(
    `${url}&isPublished=true&sort=-datePublished&populate=fields.category&fields.category=${category_id}&populate=fields.author`
  );
  var results = response.data;
  return results;
}

export async function getBlogBySlug(slug) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SOURCE}${process.env.NEXT_PUBLIC_API_PATH_BLOGS}&isPublished=true&fields.slug=${slug}&populate=fields.author&populate=fields.category`
  );
  var results = await response.json();
  return results[0];
}
