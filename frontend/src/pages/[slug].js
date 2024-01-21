import React from "react";

import fetchContentType from "../../src/lib/Strapi/fetchContentType";

// import BlockManager from "components/shared/BlockManager";

const Pages = ({ data }) => {
  const blocks = data?.blocks;

  // return <>{blocks && <BlockManager blocks={blocks} />}</>;
  return <></>;
};

export async function getServerSideProps({ params }) {
  const data = await fetchContentType(
    "pages",
    `filters[slug][$startsWith]=${params.slug}&populate[blocks][populate]=*`
  );

  if (data?.length === 0 || !data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}

export default Pages;
