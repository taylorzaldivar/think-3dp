export const img = (image, size) => {
  return `${process.env.NEXT_PUBLIC_API_IMAGE_CDN}/${image}?fit=max&w=${
    size ? size : 1500
  }`;
};
