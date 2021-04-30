import axios from "axios";

export async function getAllCategories() {
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_SOURCE}${process.env.NEXT_PUBLIC_API_PATH_CATEGORIES}&isPublished=true`
  );
  var results = response.data;
  return results;
}
export async function getCategoryBySlug(slug) {
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_SOURCE}${process.env.NEXT_PUBLIC_API_PATH_CATEGORIES}&isPublished=true&fields.slug=${slug}`
  );
  var results = response.data;
  return results[0];
}
