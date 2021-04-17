// my-data.preval.js
import preval from "next-plugin-preval";
import { getAllCategories } from "./lib/categories";

async function getData() {
  const categories = await getAllCategories();
  return categories;
}

export default preval(getData());
