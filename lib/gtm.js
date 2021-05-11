export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

export const GTMPageView = (url) => {
  const pageEvent = {
    event: "pageview",
    page: url,
  };
  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};

// export const GTMPageView = (url: string) => {
//   interface PageEventProps {
//       event: string;
//       page: string;
//   }

//   const pageEvent: PageEventProps = {
//       event: 'pageview',
//       page: url,
//   };
//   //@ts-ignore
//   window && window.dataLayer && window.dataLayer.push(pageEvent);
//   return pageEvent;
// };
