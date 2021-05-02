export const img = (image, size) => {
  return `${process.env.NEXT_PUBLIC_API_IMAGE_CDN}/${image}?fit=max&w=${
    size ? size : 1500
  }`;
};
export const thumbnail_sd = (image, size) => {
  return `${process.env.NEXT_PUBLIC_API_IMAGE_CDN}/${image}?fit=crop&w=720&h=576`;
};
